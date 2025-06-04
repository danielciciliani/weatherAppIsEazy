import { useState } from "react";
import { useTranslation } from "react-i18next";

function CitySelector({cities, fetchCityData, selectedCity}){
    const {t} = useTranslation();
    const [selectedCity, setSelectedCity] = useState(null);

    return (
    <div className='pt-10'>
        <p>{t('Select your city')}</p>
        <div className='flex gap-2 justify-center pt-5'>
          {
            cities.map((city) => (
                <button 
                className={`border-1 rounded-full py-1 px-3 min-w-[100px] cursor-pointer transition-all duration-300 ease-in-out border-white
                hover:text-white hover:bg-sky-900
                  ${selectedCity === city.name ? 'bg-sky-900 text-white border-none' : ''}
                `}
                key={city.name} 
                onClick={() => {
                  fetchCityData(city.name);
                  setSelectedCity(city.name); 
                }} >{city.name}</button>
            ))
          }
        </div>
      </div>
    );
}

export default CitySelector;