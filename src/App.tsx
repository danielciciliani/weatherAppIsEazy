import { useEffect, useState } from 'react'
import './App.css'
import { getWeatherData } from './services/weatherApiCall'
import { cities } from './data/Cities'
import {useTranslation } from 'react-i18next';
import './i18n';
import LanguageSelector from './components/languageSelector/LanguageSelector';
import CitySelector from './components/citySelector/CitySelector';

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0)
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('London');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  console.log(selectedLanguage);

  const citiesData = cities;
  const lat = citiesData[0].lat;
  const long = citiesData[0].long;
  const lang = selectedLanguage;

  
  async function fetchCityData(cityName: string) {
    const city = cities.find(c => c.name === cityName);
    if (!city) return;

    const data = await getWeatherData(city.lat, city.long, cityName);
    setWeatherData(data);
    setSelectedCity(city.name);
  }

   useEffect(() => {
    async function fetchWeather() {
        const data = await getWeatherData(lat, long, lang);
        setWeatherData(data);
    }
    fetchWeather();
  }, [])

  console.log('datos desde la api: ', weatherData);

  const city = weatherData?.name || " ";
  const temp = weatherData?.main.temp || " ";
  const tempMin = weatherData?.main.temp_min || " ";
  const tempMax = weatherData?.main.temp_max || " ";
  const description = weatherData?.weather[0].description || " ";
  const icon = weatherData?.weather[0]?.icon || null;

  const formatTemp = (temp: number) => Math.round(temp) + '°';

  return (
    <>
    <div className='flex absolute top-0 right-[20%]'>
      <LanguageSelector 
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}>
      </LanguageSelector>
    </div>
      <h1 className='capitalize'>{t('weather app')}</h1>
      <CitySelector selectedCity={selectedCity} ></CitySelector>

  { weatherData? (    
    <div className='border-1 rounded-2xl p-10 mt-10 transition-all delay-300 duration-800 ease'>
      <div>
        <div className='flex justify-center'>
          {
            icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description} icon`}/>
          }
          
        </div>
        <p className='text-2xl'>{selectedCity}</p>
        <p className='text-6xl pt-8'>{formatTemp(temp)}</p>
        <p className='capitalize pt-4'>{description}</p>
        <div className='flex justify-center gap-3 pt-1'>
          <p>Min: {formatTemp(tempMin)}</p>
          <p>Max: {formatTemp(tempMax)}</p>
        </div>

      </div>

    </div>
) : (
     <p>loading...</p> 
  )}
    </>
  )}

export default App
