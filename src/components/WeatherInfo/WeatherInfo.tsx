import { useTranslation } from "react-i18next";

function WeatherInfo({selectedCity, weatherData}){

    const { t } = useTranslation();

  const temp = weatherData?.main.temp || " ";
  const tempMin = weatherData?.main.temp_min || " ";
  const tempMax = weatherData?.main.temp_max || " ";
  const description = weatherData?.weather[0].description || " ";
  const icon = weatherData?.weather[0]?.icon || null;

  const formatTemp = (temp: number) => Math.round(temp) + '°';
    

    return (
      <div>
        <div className='flex justify-center transition-all delay-500 duration-800 ease'>
          {
            icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={`${description} icon`}/>
          }
        </div>
        <p className='text-2xl'>{selectedCity}</p>
        <p className='text-6xl pt-8'>{formatTemp(temp)}</p>
        <p className='capitalize pt-4'>{description}</p>
        <div className='flex justify-center gap-3 pt-1'>
          <p>{t ('Min: ')} {formatTemp(tempMin)}</p>
          <p>{t ('Max: ')}{formatTemp(tempMax)}</p>
        </div>
      </div>
    );
}

export default WeatherInfo;