import logo from "../../assets/img/logo1.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between sm:px-20 px-8 pt-4">
      <span>
        <img src={logo} alt="logo" className="w-9 h-9" />
      </span>
      <ul className="flex gap-4 sm:gap-8">
        <li>Login</li>
        <li>Cadastro</li>
      </ul>
    </nav>
  );
}
