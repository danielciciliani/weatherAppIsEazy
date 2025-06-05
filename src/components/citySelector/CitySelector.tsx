import { cities } from "../../data/Cities";
import { t } from "i18next";

interface CitySelectorProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

function CitySelector({ setSelectedCity, selectedCity } : CitySelectorProps) {
  const citiesData = cities;

  return (
    <div className="pt-10">
      <p>{t("Select your city")}</p>
      <div className="flex gap-2 justify-center pt-5">
        {citiesData.map((city) => (
          <button
            className={`border-1 rounded-full py-1 px-3 min-w-[100px] cursor-pointer transition-all duration-300 ease-in-out border-white
                hover:text-white hover:bg-sky-900
                ${selectedCity === city.name ? "bg-sky-900 text-white border-none" : ""}

                `}
            key={city.name}
            onClick={() => {
              setSelectedCity(city.name);
            }}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CitySelector;
