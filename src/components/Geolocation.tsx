import { useState } from "react";
import useGeolocation from "../hooks/useGeolocation";



export default function Geolocation() {
  const [countClicks, setCountClicks] = useState(0);
  const {getPosition, position, isLoading, error} = useGeolocation();

  const { lat, lng } = position;

  const handleClick = () => {
    getPosition();
    setCountClicks(clicks => clicks + 1)
  }

  return (
    <div className="mt-20 flex flex-col items-center">
      <button onClick={handleClick} disabled={isLoading} className="cursor-pointer bg-green-400 text-black px-6 py-3 rounded-3xl mb-4">
        Obter minha localização
      </button>

      {isLoading && <p>Carregando localização...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p className="pb-1">
          Sua localização:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            className="underline text-gray-400"
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>Você obteve sua localização {countClicks} vez(es)</p>
    </div>
  );
}