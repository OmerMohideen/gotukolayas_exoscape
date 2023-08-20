import { pageProps } from "@/app/page";
import {
  ImageOverlay,
  MapContainer,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CRS, LatLngExpression } from "leaflet";
import { Planet, STATES } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

interface bookPageProps extends  pageProps{
	setAvailable: Dispatch<SetStateAction<Array<any>>>
}

export default function BookPage({ setPage, setAvailable }: bookPageProps) {
  const bounds: [number, number][] = [
    [1152, 0],
    [0, 768],
  ];
	
  const fromPlanet: Planet = {
    galaxy: {name: "G1"}, name: "Earth Malli", position: [740, 255]
  }

  const planetLocations: Planet[] = [
    { galaxy: {name: "G1"}, name: "Jupiya", position: [306, 563] },
    { galaxy: {name: "G1"}, name: "Thabiliya", position: [544, 110] },
    { galaxy: {name: "G1"}, name: "Loku Thabiliya", position: [972, 124] },
    { galaxy: {name: "G1"}, name: "Loku Jupiya", position: [1029, 642] },
  ];

  return (
    <div className="w-full m-auto sm:max-w-sm">
      <MapContainer
        crs={CRS.Simple}
        maxBounds={bounds}
        maxBoundsViscosity={1}
        className="h-screen w-full bg-white"
        center={[500, 500]}
        zoom={0}
        maxZoom={0.5}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <ImageOverlay
          url={"./images/galaxy_map.jpg"}
          bounds={bounds as [number, number][]}
        />
        <CircleMarker
          className="animate-pulse"
          fill={false}
          radius={100}
          dashArray="5"
          weight={2}
          color="#56FFFF"
          dashOffset="5"
          center={fromPlanet.position as LatLngExpression}
        />
        {planetLocations.map((planet, index) => {
          return (
            <CircleMarker
              className="cursor-pointer"
              color="transparent"
              key={index}
              center={planet.position as LatLngExpression}
              radius={100}
              eventHandlers={{
                click: () => {
					setAvailable([fromPlanet, planet])
					setPage(STATES.AVAILABLE)
                },
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
