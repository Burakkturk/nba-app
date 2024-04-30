import Container from "react-bootstrap/Container"; 
import {Image} from "react-bootstrap"; 
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container className="text-center mt-5" >
      <Image src={logo} width="200px"  />
      <h1 className="my-2">NBA LEGENDS</h1>
    </Container>
  );
};

export default Header;
