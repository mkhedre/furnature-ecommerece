import { ArrowLeft } from 'lucide-react';

type IData = {
  name: string;
  description?: string;
  img?: string;
  link?: string;
};
interface Props {
  title: string;
  data: IData[];
}

const Breadcrumb = ({ title, data }: Props) => {
  return (
    <div
      className="bg-[#0a0a0a] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://woodmart.xtemos.com/wp-content/uploads/2022/03/page-title-shop.jpg')",
      }}
    >
      <div className="container mx-auto py-20">
        <div className="flex items-center justify-center my-10 gap-3">
          <ArrowLeft />
          <h1 className="text-7xl leading-4 mb-2 font-bold">{title}</h1>
        </div>
        <ul className="flex justify-between items-center mx-auto max-w-3/5  ">
          {data?.map((category) => (
            <li key={category.name} className="group">
              <a
                href={category.link}
                className="flex items-center gap-2 text-white"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-8 h-8"
                />
                <div>
                  <span className=" font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-amber-300 after:transition-all after:duration-500 group-hover:after:w-full">
                    {category.name}
                  </span>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
