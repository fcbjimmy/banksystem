import React, { FC, useState, SyntheticEvent, ChangeEvent } from "react";
import css from "./login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { MdLockOutline } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    setEmail("");
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
            type="email"
            value={email}
            placeholder="Email"
            required
            name={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
        </div>
        <div>
          <Input
            type="password"
            value={password}
            placeholder="Password"
            name={"password"}
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
        <a href="/signup">Sign up!</a>
      </form>
    </Card>
  );
};

export default Login;
