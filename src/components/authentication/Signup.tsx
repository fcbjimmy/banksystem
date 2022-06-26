import React, {
  FC,
  useState,
  useEffect,
  SyntheticEvent,
  ChangeEvent,
} from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import csstyle from "./login.module.css";
import { FaUserAlt } from "react-icons/fa";
import Button from "../UI/Button";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup: FC = () => {
  const [username, setUsername] = useState<string>("");
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

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();

    fetch("0.0.0.0:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("congrats");
        console.log(data);
      });

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
          value={username}
          placeholder={"Username"}
          required
          name={"username"}
          onChange={handleInputName}
        />
        <Input
          value={firstname}
          placeholder={"First Name"}
          required
          name={"firstname"}
          onChange={handleInputFirstName}
        />
        <Input
          value={lastname}
          placeholder={"Last Name"}
          required
          name={"lastname"}
          onChange={handleInputLastName}
        />
        <Input
          value={email}
          placeholder={"Email"}
          required
          name={"email"}
          onChange={handleInputEmail}
        />
        <Input
          value={password}
          placeholder={"Password"}
          required
          name={"password"}
          onChange={handleInputPassword}
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
