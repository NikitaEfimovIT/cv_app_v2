import { Container } from "react-bootstrap";
import { Welcome } from "./views/Welcome.tsx";
import { Header } from "./components/Header.tsx";

function App() {


  return (
    <Container className="min-vh-100">
      <Header/>
      <Welcome/>
    </Container>
  )
}

export default App
