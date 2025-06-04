import { useEffect, useState } from 'react'
import './App.css'
import { getWeatherData } from './services/weatherApiCall'
import { cities } from './data/cities'
import {useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0)
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('London');

  const citiesData = cities;
  const lat = citiesData[0].lat;
  const long = citiesData[0].long;

  useEffect(() => {
    async function fetchWeather() {
        const data = await getWeatherData(lat, long);
        setWeatherData(data);
    }
    fetchWeather();
  }, [])

  
  async function fetchCityData(cityName: string) {
    const city = cities.find(c => c.name === cityName);
    if (!city) return;

    const data = await getWeatherData(city.lat, city.long, cityName);
    setWeatherData(data);
    setSelectedCity(city.name);
  }

  console.log('datos desde la api: ', weatherData);

  const city = weatherData?.name || " ";
  const temp = weatherData?.main.temp || " ";
  const tempMin = weatherData?.main.temp_min || " ";
  const tempMax = weatherData?.main.temp_max || " ";
  const description = weatherData?.weather[0].description || " ";
  const icon = weatherData?.weather[0]?.icon || null;

  const formatTemp = (temp: number) => Math.round(temp);

  return (
    <>
      <h1 className='capitalize'>{t('weather app')}</h1>
      <div className='pt-10'>
        <p>{t('Select your city')}</p>
        <div className='flex gap-2 justify-center pt-5'>
          {
            cities.map((city) => (
                <div 
                className='border-1 rounded-2xl py-1 px-3 min-w-[30%] cursor-pointer'
                key={city.name} onClick={() => fetchCityData(city.name)} >{city.name}</div>
            ))
          }
        </div>
      </div>

  { weatherData? (    
    <div className='border-1 rounded-2xl p-10 mt-10'>
      <div>
        <div className='flex justify-center'>
          {
            icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description} icon`}/>
          }
          
        </div>
        <p className='text-2xl'>{selectedCity}</p>
        <p className='text-6xl pt-8'>{formatTemp(temp)}</p>
        <p className='capitalize pt-4'>{description}</p>
        <div className='flex justify-center gap-5'>
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
