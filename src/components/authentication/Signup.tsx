import React, { FC, useState, SyntheticEvent, ChangeEvent } from "react";
import { debounce } from "lodash";
import Card from "../UI/Card";
import Input from "../UI/Input";
import csstyle from "./login.module.css";
import { FaUserAlt } from "react-icons/fa";
import Button from "../UI/Button";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "/users";

const Signup: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useState<object | null>(null);
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleInputFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleInputLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const debounceName = debounce(handleInputName, 800);
  const debounceFirstName = debounce(handleInputFirstName, 800);
  const debounceLastName = debounce(handleInputLastName, 800);
  const debounceInputEmail = debounce(handleInputEmail, 800);
  const debounceInputPassword = debounce(handleInputPassword, 800);

  const handleSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        username,
        first_name: firstname,
        last_name: lastname,
        email,
        password,
      });
      setData(response.data.access_token);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
    setUsername("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmitForm}>
        <FaUserAlt className={csstyle.icon} />
        <legend className={csstyle.legend}>Sign Up</legend>
        <div className={csstyle.description}>
          Please fill this form to create an account
        </div>
        <Input
          placeholder={"Username"}
          required
          name={"username"}
          onChange={debounceName}
        />
        <Input
          placeholder={"First Name"}
          required
          name={"firstname"}
          onChange={debounceFirstName}
        />
        <Input
          placeholder={"Last Name"}
          required
          name={"lastname"}
          onChange={debounceLastName}
        />
        <Input
          placeholder={"Email"}
          required
          name={"email"}
          onChange={debounceInputEmail}
        />
        <Input
          placeholder={"Password"}
          required
          name={"password"}
          onChange={debounceInputPassword}
        />
        <Button>Sign Up</Button>
        <Button icon>
          <BsGoogle className={csstyle.gmail} />
          <span>Sign Up with Gmail</span>
        </Button>
        <div>
          Already have an existing account?
          <br />
          <span>
            Login <Link to="/">here!</Link>
          </span>
        </div>
      </form>
    </Card>
  );
};

export default Signup;
