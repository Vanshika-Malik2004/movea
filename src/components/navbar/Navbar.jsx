import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img tabIndex={0} src={Logo} alt="logo" />
      <div className="SignIn">Sign In</div>
    </nav>
  );
};

export default Navbar;
