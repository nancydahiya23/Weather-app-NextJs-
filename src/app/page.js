"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching city:", city);
    if (!city.trim() == "") {
      router.push(`/city?name=${city}`);
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#003153] pt-[100px]">
      <div className="w-[500px] h-[600px] bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg pt-[40px] ml-[500px] text-white rounded-4xl">
        <h1 className="text-center text-5xl font-bold">Weather Forecast</h1>
        <div className="flex justify-center items-center">
          <Image
            src="clouds.svg"
            alt="cloudy"
            width={200}
            height={200}
            className="mt-[30px]"
          ></Image>
        </div>
        <p className=" text-2xl px-7">
          To know the weather of any city click on
        </p>
        <p className="text-2xl px-50">button!</p>
        <button
          onClick={() => setShowInput(true)}
          className="bg-white text-slate-600 py-[15px] px-[20px] rounded-2xl ml-[170px] mt-[28px]"
        >
          {/* <Link href="/city">Check Weather</Link> */}Check weather
        </button>
        {showInput && (
          <div className="bg-white text-slate-600 p-5 w-[350px] ml-[70px] mt-[20px] rounded-3xl border-none outline-none flex justify-between">
            <form onSubmit={handleSearch} className="flex justify-around ">
              <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                className="border-none outline-none w-[300px]"
              />
              <button type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                width={20}
                height={20}
              />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
