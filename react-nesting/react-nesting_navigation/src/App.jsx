import "./styles.css";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo/>
        <Nav>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Impressum</Link>
        </Nav>
        <Avatar></Avatar>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
