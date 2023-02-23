import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Images/logo.png";
import saedi from "../Images/saedi.png";
import down from "../Images/down-arrow.png";
import sreach from "../Images/loupe.png";
import global from "../Images/global.png";
import up from "../Images/upload.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar className="navBar " expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="m-0 d-flex">
          <img
            src={logo}
            alt="logo"
            className="ml-2 logo border-start "
          />
          <div className=" d-flex  ">
            <img
              src={saedi}
              alt="sudi"
              className="mx-2 my-4 pl-5 "
              width="22px"
              height="17px"
            />
            <div className="shapping">
              <span className="shapping-to ">
                الشحن إلى <img src={down} alt="down" width="19px" />{" "}
              </span>
              <p className="my-1">السعوديه</p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link as={Link} to="/home" eventKey="/home"> الرئيسية </Nav.Link>
            <Nav.Link href="#link">عن المنصة</Nav.Link>
            <Nav.Link href="#shopping">المتاجر</Nav.Link>
            <Nav.Link href="#typs">الوصفات</Nav.Link>
            <div className="  d-md-none d-block ">
        <form className="Search_search my-2 ">
          <button type="submit" className="Search_search__icon">
            <img src={sreach} alt="search" />
          </button>
          <input
            type="text"
            placeholder="ما الذي تبحث عنه ؟"
            className="Search"
            maxLength={30}
          />
        </form>
        
        <div className="border-end mx-1">
        <button className="login">تسجيل الدخول</button>
          <img src={global} alt="global" width="20" className="mx-2" />
          <img src={up} alt="up" width="10" />
        </div>
        </div>
          </Nav>
        </Navbar.Collapse>
        <div className="  d-none d-md-flex ">
        <form className="Search_search mx-2 ">
          <button type="submit" className="Search_search__icon">
            <img src={sreach} alt="search" />
          </button>
          <input
            type="text"
            placeholder="ما الذي تبحث عنه ؟"
            className="Search"
            maxLength={"30"}
          />
        </form>
        <button className="login">تسجيل الدخول</button>
        <div className="border-end mx-1 my-2">
          <img src={global} alt="global" width="20" className="mx-2" />
          <img src={up} alt="up" width="10" />
        </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
