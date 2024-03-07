import { LegacyRef } from "react";

type Props = {
  value: string;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  referral: LegacyRef<HTMLInputElement>
};

export default function Search({ value, inputChange, referral }: Props) {




  return (
    <div className="relative mx-auto md:mt-12 md:ml-6 shadow-lg z-50" id="search-bar">
      <div className="relative mt-2 flex items-center">
        <input
          ref={referral}
          value={value}
          type="text"
          name="search"
          placeholder="Start your adventure..."
          id="search"
          className="block w-full rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          onChange={inputChange}
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
        <div>
        </div>
      </div>
      <ul className="dropdown-content z-10 menu shadow-lg bg-white mt-2 rounded-md w-full">
        <li className="hover:bg-green-200 rounded-sm text-gray-600 "><a>Item 1</a></li>
        <li className="hover:bg-green-200 rounded-sm text-gray-600 "><a>Item 2</a></li>
      </ul>
    </div>
  )
}
