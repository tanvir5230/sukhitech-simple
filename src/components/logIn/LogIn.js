import React from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import "./login.css";
const LogIn = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center py-4">
        <Col xs="12" sm="12" md="8" lg="5">
          <Card className="border-0 login shadow rounded-15">
            <CardBody>
              <h3 className="text-center border-bottom pb-1">Log in</h3>
              <p className="text-center text-secondary my-3 px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing.
              </p>
              <form>
                <div className="input-div-style">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="input-div-style">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                  <button className="btn d-inline-block p-0">
                    <img
                      src={require("../../resources/images/login/eye.png")}
                      alt="show-pass"
                      width="20"
                      height="15"
                    />
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div>
                    <input type="checkbox" name="remember" id="remember" />
                    <label className="ml-2 font-weight-bold" htmlFor="remember">
                      keep me signed in
                    </label>
                  </div>
                  <div>
                    <button className="btn forgot-pass">
                      forgot password?
                    </button>
                  </div>
                </div>
                <Row>
                  <Col xs="6">
                    <button className="btn-style fb-btn">
                      <img
                        src={require("../../resources/images/login/facebook.png")}
                        alt="fb"
                        width="10"
                        height="15"
                      />
                      <span className="ml-2 d-none d-md-inline-block">
                        facebook
                      </span>
                    </button>
                  </Col>
                  <Col xs="6">
                    <button className="btn-style gmail-btn">
                      <img
                        src={require("../../resources/images/login/gmail.png")}
                        alt="gmail"
                        width="20"
                        height="15"
                      />
                      <span className="ml-2 d-none d-md-inline-block">
                        Gmail
                      </span>
                    </button>
                  </Col>
                  <Col className="my-3">
                    <button className="btn-style sign-in-btn">Sign in</button>
                  </Col>
                </Row>
              </form>
              <p className="text-center">
                <span>Haven't registered yet?</span>
                <button className="btn sign-up-div">
                  <strong>sign Up</strong>
                </button>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
