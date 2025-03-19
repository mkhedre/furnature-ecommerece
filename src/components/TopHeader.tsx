import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import SelectInput from './form/SelectInput';
import Divider from './Divider';

const TopHeader = () => {
  const selectItems = ['Deutsch', 'French', 'Requires Wpml Plugin'];
  const countryOptions = ['USD', 'EUR', 'JPY'];
  const icons = [Facebook, Twitter, Instagram, Youtube];
  return (
    <div className="bg-[#092143] border-b border-[#3a4d69] w-full text-white">
      <div className=" container max-w-[1220] mx-auto">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <SelectInput target="English" options={selectItems} />
            <SelectInput target="Country" options={countryOptions} />
            <div className=" border-l border-[#3a4d69] h-10 p-2">
              <span className="font-semibold text-[#fffc] text-xs ">
                FREE SHIPPING FOR ALL ORDERS OF $150
              </span>
            </div>
          </div>

          <div className="right-side flex items-center justify-between capitalize">
            <div className="flex">
              {icons.map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="w-5 h-[26px] p-0.5 flex items-center justify-center"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <Divider />
            <div className="flex gap-2 items-center justify-center">
              <Mail size={20} />
              <span>newsLetter</span>
            </div>
            <Divider />
            <span>contact Us</span>
            <Divider />
            <span>Faqs</span>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
