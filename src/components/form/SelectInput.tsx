import { ChevronDown } from 'lucide-react';
import React from 'react';

interface SelectInputProps {
  target: string;
  options: string[];
  classNames?: string;
  SIcon?: any;
}
const SelectInput = ({
  target,
  options,
  classNames,
  SIcon,
}: SelectInputProps) => {
  return (
    <div
      className={`relative group h-[41px] border-l  border-[#3a4d69] ${classNames}`}
    >
      <a
        href="#"
        className="flex items-center h-[41px] px-2.5 uppercase text-xs text-white"
      >
        {SIcon && <SIcon />}
        <span className="text-white">{target}</span>
        <ChevronDown className="ml-1 h-5 text-[rgba(255,255,255,0.6)]" />
      </a>
      <div className="absolute top-[41px] left-0 z-50 bg-white shadow-md w-[220px] p-3 invisible opacity-0 transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
        <ul className="text-[#838383]">
          {options?.map((item: string) => (
            <li key={item}>
              <a href="#" className="block py-2 text-sm hover:text-primary">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectInput;
