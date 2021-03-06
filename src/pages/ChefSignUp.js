import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Title from "../components/Title";
import Axios from "axios";
import { Col } from "react-bootstrap";

export default class ChefSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };
  render() {
    return (
      <div>
        <Title name="are you a chef? sign up for free!" />
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  placeholder="Enter full name"
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Control
                  placeholder="Enter city and state"
                  id="location"
                  name="location"
                  type="text"
                  value={this.state.location}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="insta">Instagram Handle</Form.Label>
                <Form.Control
                  placeholder="Enter URL"
                  id="insta"
                  name="insta"
                  type="text"
                  value={this.state.insta}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="bio/Experience">Bio/Experience</Form.Label>
                <Form.Control
                  placeholder="Please try to go in detail"
                  id="bio"
                  name="bio"
                  type="text"
                  as="textarea"
                  rows="6"
                  value={this.state.bio}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your message"
                  id="message"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                className="d-inline-block"
                variant="primary"
                type="submit"
                disabled={this.state.disabled}
              >
                Submit
              </Button>

              {this.state.emailSent === true && (
                <p className="d-inline success-msg">
                  {" "}
                  Submit Successful. Please allow 24 hours to review/approve
                  your profile
                </p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg"> Email Not Sent</p>
              )}
            </Form>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
