import { useEffect, useState } from 'react'
import './App.css'
import { getWeatherData } from './services/WeatherApiCall'
import { cities } from './data/Cities'
import {useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import CitySelector from './components/CitySelector/CitySelector';
import i18next from './i18n';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Card from './components/UI/Card';

function App() {
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('London');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

   useEffect(() => {
    async function changeLanguageAndFetch() {
      await i18next.changeLanguage(selectedLanguage);

      const city = cities.find(c => c.name === selectedCity);
      if (!city) return;

      const data = await getWeatherData(city.lat, city.long, i18next.language);
      setWeatherData(data);
    }

    changeLanguageAndFetch();
  }, [selectedCity, selectedLanguage]);

  return (
    <>
    <div className='flex absolute top-1 right-[20%]'>
      <LanguageSelector 
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}>
      </LanguageSelector>
    </div>
      <h1 className='capitalize'>{t ('weather app')}</h1>
      <CitySelector 
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}>  
      </CitySelector>

  { weatherData? (
    <Card>
      <WeatherInfo 
        weatherData={weatherData} 
        selectedCity={selectedCity}>
      </WeatherInfo>
    </Card>    
) : (
     <p>Loading...</p> 
  )}
    </>
  )}

export default App
