export default function Navbar() {
  return (
    <nav className="flex justify-between sm:px-20 px-8 pt-4">
      <span>logo</span>
      <ul className="flex gap-4 sm:gap-8">
        <li>Login</li>
        <li>Cadastro</li>
      </ul>
    </nav>
  );
}
