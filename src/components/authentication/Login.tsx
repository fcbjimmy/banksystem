import React, { FC, useState, SyntheticEvent, ChangeEvent } from "react";
import css from "./login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { MdLockOutline } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "/users/login";
const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { username, password });
      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
    setUsername("");
    setPassword("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmitForm}>
        <div className={css.test}>
          <MdLockOutline className={css.icon} />
        </div>
        <legend>Login</legend>
        <div>
          <Input
            type="text"
            value={username}
            placeholder="Username"
            required
            name={"username"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
          />
        </div>
        <div>
          <Input
            type="password"
            value={password}
            placeholder="Password"
            name={"password"}
            required
            onChange={handleInputPassword}
          />
        </div>
        <Button>Login</Button>
        <Button icon>
          <BsGoogle className={css.gmail} /> <span>Login with Gmail</span>
        </Button>
        <div>
          Do you have an account?
          <br />
        </div>
        <Link to="/signup">Sign up!</Link>
      </form>
    </Card>
  );
};

export default Login;
