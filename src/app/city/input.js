'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Input() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultCity = searchParams.get('name') || '';
    const [city, setCity] = useState(defaultCity);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
        if (city.trim() !== '') {
            router.push(`/city?name=${city.trim()}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="bg-white text-slate-600 p-5 w-[350px] mx-auto mt-[5px] rounded-3xl border-none outline-none flex justify-between">
            <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border-none outline-none w-[300px]"
            />
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} width={20} height={20} />
            </button>
        </form>
    );
}

