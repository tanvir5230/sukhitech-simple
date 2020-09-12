import React from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import eyeOn from "../../resources/images/login/eye.png";
import eyeOff from "../../resources/images/login/not-eye.png";
const SignUp = ({ hidden, handleBlur, showHidePass, handleSubmit }) => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center py-4">
        <Col xs="12" sm="12" md="8" lg="5">
          <Card className="border-0 login shadow rounded-15">
            <CardBody>
              <h3 className="text-center border-bottom pb-3">Sign Up</h3>
              <p className="text-center px-2 my-3 text-secondary">
                Create your Sukhitech account
              </p>
              <form>
                <div className="input-div-style">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-div-style">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-div-style">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="input-div-style">
                  <input
                    type={hidden ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="password"
                    onBlur={handleBlur}
                  />
                  <button
                    className="btn d-inline-block p-0"
                    onClick={showHidePass}
                  >
                    <img
                      src={hidden ? eyeOff : eyeOn}
                      alt="show-pass"
                      width="20"
                      height="15"
                    />
                  </button>
                </div>
                <div className="pl-2 pb-4">
                  <input
                    type="checkbox"
                    value={false}
                    name="sendNotifications"
                    id="sendNotifications"
                    onBlur={handleBlur}
                  />
                  <label
                    className="ml-2 font-weight-lighter d-inline"
                    htmlFor="sendNotifications"
                  >
                    I want to receive exclusive offers and promotions from
                    Sukhitech.
                  </label>
                </div>
                <div className="mb-3">
                  <button
                    className="btn-style sign-in-btn"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                </div>
                <Row className="align-items-center">
                  <Col xs="5">
                    <hr />
                  </Col>
                  <Col xs="2">
                    <div className="text-center">OR</div>
                  </Col>
                  <Col xs="5">
                    <hr />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs="12">
                    <button className="btn-style fb-btn">
                      <img
                        src={require("../../resources/images/login/facebook.png")}
                        alt="fb"
                        width="10"
                        height="15"
                      />
                      <span className="ml-2">facebook</span>
                    </button>
                  </Col>
                  <Col xs="12">
                    <button className="btn-style gmail-btn my-3">
                      <img
                        src={require("../../resources/images/login/gmail.png")}
                        alt="gmail"
                        width="20"
                        height="15"
                      />
                      <span className="ml-2">Gmail</span>
                    </button>
                  </Col>
                </Row>
              </form>
              <div className="text-center">
                <span>Haven't registered yet?</span>
                <button className="btn sign-up-div">
                  <strong>sign Up</strong>
                </button>
                <p>
                  By clicking “SIGN UP”, I agree to Sukhitech's{" "}
                  <a href="terms-conditions">Terms of Use</a> and{" "}
                  <a href="privacy-policy">Privacy Policy</a>
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
