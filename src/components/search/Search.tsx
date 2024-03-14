import useDebounce from "@/hooks/debounce";
import { SimplifiedFeature, parseSearchResults } from "@/utils/dataParser";
import { LegacyRef, useEffect, useRef, useState } from "react";
import useSWR from "swr";

type Props = {
  referral: LegacyRef<HTMLInputElement>
};

export default function Search({ referral }: Props) {

  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const { data, error, isLoading } = useSWR(debounceValue ? `https://api.mapbox.com/geocoding/v5/mapbox.places/${debounceValue}.json?proximity=ip&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API}` : null, async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  });

  const listOfResults = parseSearchResults(data);


  const handleClick = (liResult: SimplifiedFeature) => {
    console.log(liResult);

  };

  return (
    <div className="relative mx-auto md:mt-12 md:ml-6 shadow-lg z-50" id="search-bar">
      <div className="relative mt-2 flex items-center">
        <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500 animate-slide-left-right"></div>
        <input
          ref={referral}
          value={value}
          type="text"
          name="search"
          placeholder="Where are you going?"
          id="search"
          className="block w-full rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
        <div>
        </div>
      </div>
      {listOfResults.length > 0 && (
        <ul className="dropdown-content z-10 menu shadow-lg bg-white mt-2 rounded-md w-full">
          {listOfResults.map((liResult, index) => (
            <li onClick={() => handleClick(liResult)} key={liResult.placeName + index} className="hover:bg-green-200 rounded-sm text-gray-600 "><a>{liResult.placeName}</a></li>
          ))}
        </ul>)}

    </div>
  )
}
