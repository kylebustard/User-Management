import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../styles.css";
import Submit from "./Submit";

const inputStatus = {
  ERROR: "ERROR",
  OK: "OK",
  IDLE: "IDLE",
};

const submissionStatus = {
  COMPLETE: "COMPLETE",
  INCOMPLETE: "INCOMPLETE",
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      nameStatus: inputStatus.IDLE,
      emailStatus: inputStatus.IDLE,
      userSubmissionStatus: submissionStatus.INCOMPLETE,
    };
  }

  submitForm = async () => {
    try {
      const { httpMethod } = this.props;
      const { name, email } = this.state;

      if (httpMethod === "POST") {
        await axios.post("/users", { name, email });
      } else if (httpMethod === "PATCH") {
        const { id } = this.props.user;
        await axios.put(`/users/${id}`, { id, name, email });
      }
      this.setState({ userSubmissionStatus: submissionStatus.COMPLETE });
    } catch (error) {
      console.error(error);
    }
  };

  isValid = (inputName, inputEmail) => {
    const validate = () => {
      !inputName
        ? this.setState({ nameStatus: inputStatus.ERROR })
        : this.setState({ nameStatus: inputStatus.OK });
      !inputEmail
        ? this.setState({ emailStatus: inputStatus.ERROR })
        : this.setState({ emailStatus: inputStatus.OK });
    };

    validate();

    return inputName && inputEmail ? true : false;
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.validateAndSubmit();
  };

  validateAndSubmit = () => {
    const isValid = this.isValid(this.state.name, this.state.email);

    if (isValid) {
      this.submitForm();
    }
  };

  handleInputChange = (inputType, event) => {
    if (this.state[inputType + "Status"] !== inputStatus.IDLE) {
      this.setState({ [inputType + "Status"]: inputStatus.IDLE });
    }
    this.setState({ [inputType]: event.target.value });
  };

  render() {
    const {
      name,
      email,
      nameStatus,
      emailStatus,
      userSubmissionStatus,
    } = this.state;

    const okOrError = (status, inputType) => {
      const errorMessage =
        inputType === "name"
          ? "You must enter a name"
          : "You must enter an email address";

      if (status === inputStatus.OK) {
        return (
          <React.Fragment>
            <br />
            <label htmlFor={`${inputType}Success`} className="Success">
              <strong>Ok</strong>
            </label>
            <br />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <br />
            <label htmlFor={`${inputType}Error`} className="Error">
              <strong>Error: </strong>
              {errorMessage}
            </label>
            <br />
          </React.Fragment>
        );
      }
    };

    const formHeader =
      this.props.httpMethod === "POST" ? "Create new user" : "Edit user";

    const createNewUserForm = (
      <div className="Users">
        <h1>{formHeader}</h1>
        <form
          onSubmit={(event) => {
            this.submitHandler(event);
          }}
          className="card"
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            placeholder={this.props.user.name}
            onChange={(event) => this.handleInputChange("name", event)}
          />
          {nameStatus === inputStatus.IDLE
            ? null
            : okOrError(nameStatus, "name")}
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={email}
            placeholder={this.props.user.email}
            onChange={(event) => this.handleInputChange("email", event)}
          />
          {emailStatus === inputStatus.IDLE
            ? null
            : okOrError(emailStatus, "email")}
          <br />
          <Submit submitHandler={this.submitHandler} />
        </form>
      </div>
    );

    const successMessage = (httpMethod) => {
      const message =
        httpMethod === "POST" ? "User was created!" : "User was updated";

      return (
        <div className="Users Users-success">
          <h1>{message}</h1>
          <div className="card">
            <p>Click to return home.</p>
            <Link to="/" className="Link">
              Return
            </Link>
          </div>
        </div>
      );
    };

    return userSubmissionStatus === submissionStatus.COMPLETE
      ? successMessage(this.props.httpMethod)
      : createNewUserForm;
  }
}

export default Form;
