import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { appColors } from "../utils/colors.ts";

export const Welcome = () => {
  return <Container style={{color: appColors.text}} className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <h1 className="text-center text-uppercase" style={{fontSize: 48}}>
            <Typewriter
              words={["Where frontend precision meets celestial design."]}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              delaySpeed={1000}
            />
          </h1>
  </Container>
}
