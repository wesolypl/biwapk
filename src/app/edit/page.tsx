import prisma from "@/lib/prisma";
import Link from "next/link";

const API_URL = process.env.GEOAPI_URL as string;
const API_KEY = process.env.GEOAPI_KEY as string;

async function createPlace(data: FormData) {
  "use server";

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
}

export default async function Edit() {
  return (
    <div className="container flex mx-auto px-8 py-24">
      <div className="flex flex-col border shadow-sm max-w-auto min-w-[50%] mx-auto p-4">
        <h2>Dodaj nowe miejsce</h2>
        <p>Wypełnij poniższy formularz</p>
        <form action={createPlace} className="flex flex-col flex-grow-0">
          <label htmlFor="name" className="flex flex-col">
            Nazwa:
            <input name="name" type="text" className="border" />
          </label>
          <label htmlFor="description" className="flex flex-col mt-2">
            Opis:
            <textarea name="description" className="border"></textarea>
          </label>
          <label htmlFor="street" className="flex flex-col mt-2">
            Ulica:
            <input name="street" type="text" className="border" />
          </label>
          <label htmlFor="zipCode" className="flex flex-col mt-2">
            Kod pocztowy:
            <input name="zipCode" type="text" className="border" />
          </label>
          <label htmlFor="city" className="flex flex-col mt-2 ">
            Miasto:
            <input name="city" type="text" className="border" />
          </label>
          <label htmlFor="country" className="flex flex-col mt-2">
            Kraj:
            <input
              name="country"
              type="text"
              className="border"
              defaultValue="Polska"
            />
          </label>
          <button className="bg-green-500 p-2 text-white rounded-md mt-4 hover:bg-green-700 transition-colors">
            Dodaj
          </button>
        </form>
        <Link href="/" className="mt-4">
          Wstecz
        </Link>
      </div>
    </div>
  );
}
