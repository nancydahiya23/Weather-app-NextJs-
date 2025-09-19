import React from 'react'
import Image from 'next/image';
import Input from './input';
import Home from '../page';
import Return from './home';


export async function fetchWeather(city) {
    const API_KEY = "98b9a621328db7c4774a5de68cc3e908";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    try {
      const res = await fetch(URL);
      if(!res.ok) {
        throw new Error("City Not Found");
      }
      const data = await res.json();
      return data;
    }
    catch(error) {
      console.error(error);
      return null;
    }
  }

  export function getWeatherImage(weatherMain) {
    const weatherIcon = {
      Clear: "clear.svg",
      Clouds: "clouds.svg",
      Drizzle: "drizzle.svg",
      Rain: "rain.svg",
      Snow: "snow.svg",
      Thunderstrom: "thunderstrom.svg",
      Mist: "atmosphere.svg",
      Smoke: "atmosphere.svg",
      Haze: "atmosphere.svg",
      Fog: "atmosphere.svg",
      Dust: "atmosphere.svg",
    };
    return weatherIcon[weatherMain];
  }


export default async function Weather({searchParams}) {
  const cityName = searchParams.name

  if(!cityName) {
    return (
      <div className='text-5xl text-center'>
        <h1>Please enter City!</h1>
      </div>
    );
  }
  const forecast = await fetchWeather(cityName);

  if(!forecast) {
    return(
      <div className='w-full min-h-screen bg-[#003153] pt-[100px]'>
        <div className="w-[500px] h-[600px] bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg pt-[40px] kkml-[500px] text-white rounded-4xl">
          <Image src="error.svg" width={50} height={50} alt="error" className='mt-[100px] ml-[224px]'></Image>
        <h3 className='text-2xl text-center mt-[20px]'>404: City Not Found</h3>
        <Return />
        </div>
        
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-[#003153] pt-[100px]">
        <div className="w-[500px] h-[600px] bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg pt-[40px] ml-[500px] text-white rounded-4xl" >
            <div >
              <Input />
              </div>
              <div className="flex justify-center items-center mt-[20px]">
              <Image src={`/${getWeatherImage(forecast.weather[0].main)}`} alt={forecast.weather[0].main} width={200} height={200}></Image>
              </div>
              <h1 className='text-7xl text-center'>{forecast.main.temp}&deg;C</h1>
              <h4 className='text-2xl text-center'>{forecast.weather[0].main}</h4>
              <h2 className='text-5xl text-center'>{forecast.name}</h2>
              <div className='flex justify-around mt-[20px]'>
                <div className='flex justify-center'>
                    <Image src="humidity_wave.svg"width={50} height={50}  alt={forecast.main.humidity}></Image>
                    <div className='mt-[16px] ml-[8px]'>
                    <p>{forecast.main.humidity}%</p>
                    <p>Humidity</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image src="/white_wind.png"width={70} height={70}  alt={forecast.wind.speed}></Image>
                    <div className='mt-[16px] ml-[8px]'>
                    <p>{forecast.wind.speed}Km/h</p>
                    <p>Wind Speed</p>
                    </div>
                </div>
              </div>

        </div>

    </div>
  )
}
