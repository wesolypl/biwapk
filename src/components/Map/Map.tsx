"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Place } from "@prisma/client";
import L from "leaflet";

type MapProps = {
  places: Place[];
};

const marketIcon = new L.Icon({ iconUrl: "/assets/location-dot-solid.svg" });

export const Map = (props: MapProps) => {
  const { places } = props;

  return (
    <MapContainer center={[51.9189046, 19.1343786]} className="h-full" zoom={7}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lon]}
          icon={marketIcon}
        >
          <Popup>
            <h3 className="font-bold">{place.name}</h3>
            <p className="!m-0 !mt-2">{place.description}</p>
            <address className="!mt-2 not-italic">
              {place.street}, {place.zipCode} {place.city}
            </address>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
