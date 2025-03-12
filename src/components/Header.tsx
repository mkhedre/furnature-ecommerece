import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

const Header = () => {
  return (
    <header className="w-full bg-[#092143] border-b border-[#3a4d69] ">
      <div className="container max-w-[1222px] mx-auto px-4 ">
        <div className="flex items-center justify-between h-[105px] gap-10">
          <img
            src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/wood-logo-white.svg"
            alt=""
            width={245}
          />
          <SearchBar />

          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
