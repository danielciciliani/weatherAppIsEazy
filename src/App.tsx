import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "./i18n";
import { motion } from "motion/react";

import { getWeatherData } from "./services/weatherApiCall";
import { cities } from "./data/Cities";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Card from "./components/UI/Card";
import CitySelector from "./components/citySelector/citySelector";

import "./App.css";

function App() {
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("London");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    async function changeLanguageAndFetch() {
      await i18next.changeLanguage(selectedLanguage);

      const city = cities.find((c) => c.name === selectedCity);
      if (!city) return;

      const data = await getWeatherData(city.lat, city.long, i18next.language);
      setWeatherData(data);
    }

    changeLanguageAndFetch();
  }, [selectedCity, selectedLanguage]);

  console.log(weatherData);

  return (
    <>
      <div className="flex absolute top-1 right-[20%]">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        ></LanguageSelector>
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          scale: { type: "tween", transition: 0.4 },
        }}
        className="capitalize"
      >
        {t("weather app")}
      </motion.h1>
      <CitySelector
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      ></CitySelector>

      {weatherData ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            scale: { type: "tween", transition: 0.4 },
          }}
        >
          <Card>
            <WeatherInfo
              weatherData={weatherData}
              selectedCity={selectedCity}
              selectedLanguage={selectedLanguage}
            ></WeatherInfo>
          </Card>
        </motion.div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
