import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex justify-between items-center">
        <Logo></Logo>
        <HeaderMenu></HeaderMenu>
        <div>others</div>
      </Container>
    </header>
  );
};

export default Header;
