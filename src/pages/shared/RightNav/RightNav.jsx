import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <BsGoogle className="me-2" />
          Login with Google
        </Button>
        <Button variant="outline-secondary">
          <BsGithub className="me-2" /> Login with GitHub
        </Button>
      </div>
      <div className="my-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <BsFacebook className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <BsTwitter className="me-2" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <BsInstagram className="me-2" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img className="w-100 mt-3 rounded" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
