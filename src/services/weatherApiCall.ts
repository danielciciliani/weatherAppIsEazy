const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherData(lat: number, long: number, lang: string){
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}&lang=${lang}`;
  
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}



