import { useState } from "react";
import "./App.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CheckDelivery from "./components/CheckDelivery";
import Navbar from "react-bootstrap/Navbar";
import Suggestion from "./components/Suggestion";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
export default function App() {
  return (
    <>
    <div className="top">

      <CheckDelivery  />
      </div>
      <div className="phonenav">
      <Navbar>
      <Container>
      <Nav.Link href="#home">back</Nav.Link>
      <Navbar.Brand><img src="logo.png"></img></Navbar.Brand>
      <Nav.Link href="#home">cart</Nav.Link>
      </Container>
      </Navbar>
    </div>
    <div className="phonesearch">
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search on Frikly"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn">Search</Button>
          </Form>
    </div>
      <div className="navi">
      <Navbar className="nav1">
          <Navbar.Brand><img src="logo.png"></img></Navbar.Brand>
          <Nav.Link href="#home">Brans</Nav.Link>
          <Nav.Link href="#home">About us</Nav.Link>
          <Nav.Link href="#home">Quote</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search on Frikly"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn">Search</Button>
          </Form>
          <Nav.Link className="ico" href="#home"><img src="ic1.svg"></img>Catalogue</Nav.Link>
          <Nav.Link className="ico" href="#home"><img src="ic2.svg"></img>Cart</Nav.Link>
          <Nav.Link className="ico" href="#home"><img src="ic3.svg"></img>Wishlist</Nav.Link>
          <Nav.Link className="ico" href="#home"><img src="ic4.svg"></img>Account</Nav.Link>
        
      </Navbar>
      
      <Navbar className="nav2">
        <div className="nav3">
          <Nav.Link href="#home">Hardware</Nav.Link>
          <Nav.Link href="#home">Sanitaryware & Bath</Nav.Link>
          <Nav.Link href="#home">Home Appliances</Nav.Link>
          <Nav.Link href="#home">Laminates & Mica</Nav.Link>
          <Nav.Link href="#home">Louvers & Planks</Nav.Link>
          <Nav.Link href="#home">Veneer</Nav.Link>
          <Nav.Link href="#home">Luxe Home Decor</Nav.Link>
          <Nav.Link href="#home">Jaipur Rugs</Nav.Link>
        </div>
      </Navbar>
      </div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Home Appliances</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Air Conditioner </Breadcrumb.Item>
        <Breadcrumb.Item active href="#">
          Samsung AC{" "}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="main">
        <div className="mainleft">
        <div className="mainimg">
          <img src="product.png"></img>
          </div>
          <div>
          <div className="Also"> Also See:</div>
          <div className="suggestion">
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>

</div>
        </div>
        </div>
        

        <div className="mainright">
          <div className="heading">
            <h1>Dorna Premium Leatherette Rolled arm Sofa, 74.01"</h1>
          </div>
          <div className="tags">
            <div className="tagleft">
              <div className="brand">
                <Button>Brand name</Button>
                <Button>Brand name</Button>
              </div>
            </div>
            <div className="tagright">
              <div className="socials">
                <p>Share it :</p>
                <img src="whatsapp.svg"></img>
                <img src="facebook.svg"></img>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="prices">
            <div className="discount">
              <p>
                MRP : ₹ <span>17,999</span> ( 11% off ){" "}
              </p>
            </div>
            <div className="real">
              <h2>₹ 11,999/piece</h2>
            </div>
          </div>
          <div className="add">
            <div>-</div>
            <div>1</div>
            <div>+</div>
            <Button>Add to cart</Button>
          </div>
          <div className="buywhatsapp">
            <div>Buy On Whatsapp</div>
          </div>
          <div className="sizes">
            <p>Length: 8 feet</p>
            <p>Breadth: 4 feet</p>
            <p>Sheets Available: 144</p>
          </div>
          <div className="discounts">
            <h1>BEST PRICE</h1>
            <h2>Save ₹238</h2>
            <ul>
            <li>
              <p>On orders over 2500 today with coupon code "FRIKLY"</p>
            </li>
            </ul>
            <h2>Save ₹338</h2>
            <ul>
            <li>
              <p>On orders over 5000 today with coupon code "FRIKLY"</p>
            </li>
            </ul>
          </div>
          <div className="pincode">
            <Form.Control
              type="search"
              placeholder="Enter Pincode"
              className="me-2"
              aria-label="Search"
            />
            <Button>Check</Button>
          </div>
          <div className="icons">
            <div className="icon1">
              <img src="icon1.svg"></img>
              <p>Assured Transparency</p>
            </div>
            <div className="icon2">
              <img src="icon2.svg"></img>
              <p>Fast And Safe Delivery</p>
            </div>
            <div className="icon3">
              <img src="icon3.svg"></img>
              <p>Easy returns & replacements</p>
            </div>
          </div>
          <div className="details">
            <div className="btn1">
                Description
            </div>
            <div className="btn1">
              Shipping T&C
            </div>
            <div className="btn1">
              Payment T&C
            </div>
          </div>
          <hr></hr>
          <div className="moredetails">
            <ul>
              <li>Dulux Velvet Touch Platinum Glo ( 1 Litre )</li>
              <li>Dulux Velvet Touch Platinum Glo is an uber premium paint with subtle platinum like glow.</li>
              <li>Moreover its superior dust & dirt resistance coupled with Class A wash ability makes your walls timelessly beautiful.</li>
              <li>Now with Tru Color (Dura Color Technology), Velvet Touch is made with the finest ingredients and color pigments to deliver intense rich colors and ultra-smooth finish on your walls.</li>
              <li>Finish - Mid Sheen</li>
              <li>Stainer Cost Extra</li>
              <li>Pack Size - 1 Litre, 4 Litre, 10 Litre, 20 Litre.</li>

            </ul>
          </div>
          <div className="question">
        <div className="q1">
          <h>Have a Question ?</h><p> We're here to help</p>
        </div>
        <div className="q2">
          <Button className="bt"><img src="whatsapp.svg"></img>Whatsapp</Button>
          <Button className="bt"><img src="phone.svg"></img>8035388980</Button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}


    