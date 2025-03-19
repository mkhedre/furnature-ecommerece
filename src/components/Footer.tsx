import React from 'react';

const data = [
  {
    title: 'OUR STORES',
    links: [
      {
        title: 'new york',
        link: 'new york',
      },
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#092143] border-b border-[#3a4d69] w-full text-white">
        <div className=" container max-w-[1220] mx-auto flex">
          <ul className="flex flex-col">
            {data?.map((footerItem) => (
              <li key={footerItem.title}>
                <a href="">
                  <span>OUR STORES</span>
                </a>
                <ul>
                  {footerItem?.links.map((item) => (
                    <li key={item.title}>
                      <a href={item.link}>
                        <span>new york</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
