import { Fragment } from "react";
import Logo from "../header/Logo";
import classes from "./Header.module.css";
import NavMenu from "../header/Nav";
import Search from "../header/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
         <Row className="align-items-center">
           <Col sm={12} lg={12}>
             <NavMenu />
           </Col>
         </Row>
      </Container>
    </header>
  );
};
export default Header;
