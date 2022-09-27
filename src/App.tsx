import { Container } from "./components/Container";
import { Header } from "./components/Header";
import logo from './assets/img/logo.png';
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="wrapper">
      <Header>
        <Container alignCenter>
          <img src={logo} className="logo" alt="Logo em cartaz" />
        </Container>
      </Header>

      <Main />

      <Footer>
        <Container column>
          <p>EM CARTAZ | {new Date().getFullYear()}</p>
          <p>Developed by Vitor Sacramento | sep 22 | ReactJS</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App
