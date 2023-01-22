import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './nav.module.css'

function NavMenu() {
  return (
    <Navbar className={classes["black"]} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className={classes["navbar-brand"]}>BBC News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className={classes["nav-link"]}>Home</Nav.Link>
            <Nav.Link href="/news" className={classes["nav-link"]}>News</Nav.Link>
            <Nav.Link href="/sport" className={classes["nav-link"]}>Sport</Nav.Link>
            <Nav.Link href="/asia-news" className={classes["nav-link"]}>Asia News</Nav.Link>
            <Nav.Link href="/cricket" className={classes["nav-link"]}>Cricket</Nav.Link>
            <Nav.Link href="/entertainment" className={classes["nav-link"]}>Entertainment</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className={classes['btn-outline-success']}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;