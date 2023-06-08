import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" width={120} />
      <div className="SignIn">Sign In</div>
    </nav>
  );
};

export default Navbar;
