import React, { FC, useState, SyntheticEvent, ChangeEvent } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import csstyle from "./login.module.css";
import { FaUserAlt } from "react-icons/fa";
import Button from "../UI/Button";
import { BsGoogle } from "react-icons/bs";

const Signup: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleInputConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ name });
    console.log({ email });
    console.log({ password });
    console.log({ confirmpassword });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
          value={name}
          placeholder={"Full Name"}
          required
          name={"name"}
          onChange={handleInputName}
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
        <Input
          value={confirmpassword}
          placeholder={"Confirm Password"}
          required
          name={"confirmpass"}
          onChange={handleInputConfirmPassword}
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
            Login <a href="/">here!</a>
          </span>
        </div>
      </form>
    </Card>
  );
};

export default Signup;
