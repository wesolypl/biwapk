"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const API_URL = process.env.GEOAPI_URL as string;
const API_KEY = process.env.GEOAPI_KEY as string;

export async function createPlace(prevState: any, data: FormData) {
  try {
    const userStreet = data.get("street") as string;
    const zipCode = data.get("zipCode") as string;
    const city = data.get("city") as string;
    const userCountry = data.get("country") as string;

    const localization = `${userStreet}, ${zipCode}, ${city}, ${userCountry}`;
    const url = new URL(
      `${API_URL}/geocode/search?text=${localization}&apiKey=${API_KEY}`
    );
    const geo = await fetch(url);
    const res = await geo.json();
    const { lon, lat, country } = res.features[0].properties;

    await prisma.place.create({
      data: {
        name: data.get("name") as string,
        description: data.get("description") as string,
        street: data.get("street") as string,
        city: data.get("city") as string,
        zipCode: data.get("zipCode") as string,
        lon,
        lat,
        country,
      },
    });

    revalidatePath("/", "layout");
    return {
      success: true,
      message: "success",
    };
  } catch (e) {
    console.error(e);
    return { success: false, message: "Failed to create" };
  }
}
