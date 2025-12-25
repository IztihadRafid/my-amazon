import CartIcon from "./CartIcon";
import Container from "./Container";
import FavouriteButton from "./FavouriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex justify-between items-center text-lightColor">
        <div className="w-auto md:h-1/3 flex items-center gap-5 justify-start md:gap-0">
          <MobileMenu></MobileMenu>
          <Logo></Logo>
        </div>
        <HeaderMenu></HeaderMenu>
        <div className="flex justify-end items-center gap-5 md:w-1/3 w-auto">
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <FavouriteButton></FavouriteButton>
          <SignIn></SignIn>
        </div>
      </Container>
    </header>
  );
};

export default Header;
