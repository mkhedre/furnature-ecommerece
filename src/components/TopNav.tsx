import {
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

const TopNav = () => {
  return (
    <div className="w-full bg-[#092143] border-b border-[#3a4d69] text-sm">
      <div className="container max-w-[1222px] mx-auto px-4">
        <div className="flex flex-row justify-between h-[41px]">
          <div className="flex items-center">
            <div className="h-[41px] border-r border-[rgba(255,255,255,0.25)]"></div>
            <div className="relative group h-[41px]">
              <a
                href="#"
                className="flex items-center h-[41px] px-2.5 uppercase text-xs text-white"
              >
                <span className="text-white">English</span>
                <ChevronDown className="ml-1 h-[6px] w-[6px] text-[rgba(255,255,255,0.6)]" />
              </a>
              <div className="absolute top-[41px] left-0 z-50 bg-white shadow-md w-[220px] p-3 invisible opacity-0 transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <ul className="text-[#838383]">
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      French
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      Requires WPML plugin
                    </a>
                  </li>
                </ul>
              </div>
              {/* <span className="block h-[41px] border-r border-[rgba(255,255,255,0.25)]"></span> */}
            </div>
            {/* Country dropdown */}
            <div className="relative group h-[41px]">
              <a
                href="#"
                className="flex items-center h-[41px] px-2.5 uppercase text-xs text-white"
              >
                <span className="text-white">Country</span>
                <ChevronDown className="ml-1 h-[6px] w-[6px] text-[rgba(255,255,255,0.6)]" />
              </a>
              <div className="absolute top-[41px] left-0 z-50 bg-white shadow-md w-[220px] p-3 invisible opacity-0 transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <ul className="text-[#838383]">
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      United States (USD)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      Deutschland (EUR)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm hover:text-primary"
                    >
                      Japan (JPY)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Divider */}
            <div className="h-[41px] border-r border-[rgba(255,255,255,0.25)]"></div>
            {/* Free shipping message */}
            <div className="px-2.5 text-xs text-[rgba(255,255,255,0.8)]">
              <strong className="font-semibold">
                FREE SHIPPING FOR ALL ORDERS OF $150
              </strong>
            </div>
          </div>
          {/* Middle section - empty */}
          <div className="flex items-center"></div>
          {/* Right section */}
          <div className="flex items-center">
            {/* Social icons */}
            <div className="flex items-center justify-center text-center text-[rgba(255,255,255,0.8)] px-2.5">
              <a
                href="https://www.facebook.com/xtemos.studio"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Facebook social link"
                className="flex items-center justify-center w-[20px] h-[26px] text-white rounded-full p-1.5"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=xtemos_studio"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="X social link"
                className="flex items-center justify-center w-[20px] h-[26px] text-white rounded-full p-1.5"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://www.instagram.com/xtemos.studio/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Instagram social link"
                className="flex items-center justify-center w-[20px] h-[26px] text-white rounded-full p-1.5"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCu3loFwqqOQ9z-YTcnplK8w"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="YouTube social link"
                className="flex items-center justify-center w-[20px] h-[26px] text-white rounded-full p-1.5"
              >
                <Youtube size={14} />
              </a>
            </div>
            {/* Divider */}
            <div className="h-[41px] border-r border-[rgba(255,255,255,0.25)]"></div>
            {/* Navigation links */}
            <div className="h-[41px] text-right px-2.5">
              <ul className="inline-flex flex-wrap justify-end text-left gap-x-5 h-[41px]">
                <li className="flex flex-row items-stretch h-[41px]">
                  <a
                    href="#"
                    className="flex items-center h-[41px] uppercase text-xs text-white px-2"
                  >
                    <Mail className="mr-1.5 h-[14px] w-[14px]" />
                    <span>Newsletter</span>
                  </a>
                  <span className="block h-[41px] border-r border-[rgba(255,255,255,0.25)]"></span>
                </li>
                <li className="flex flex-row items-stretch h-[41px]">
                  <a
                    href="#"
                    className="flex items-center h-[41px] uppercase text-xs text-white px-2"
                  >
                    <span>Contact Us</span>
                  </a>
                  <span className="block h-[41px] border-r border-[rgba(255,255,255,0.25)]"></span>
                </li>
                <li className="flex flex-row items-stretch h-[41px]">
                  <a
                    href="#"
                    className="flex items-center h-[41px] uppercase text-xs text-white"
                  >
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Final divider */}
            <div className="h-[41px] pr-2.5 border-r border-[rgba(255,255,255,0.25)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
