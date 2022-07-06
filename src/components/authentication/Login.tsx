import { FC, useState, SyntheticEvent, ChangeEvent } from 'react';
import { debounce } from 'lodash';
import css from './login.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { MdLockOutline } from 'react-icons/md';
import { BsGoogle } from 'react-icons/bs';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = '/users/login';

const Login: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<object | null>(null);

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const debouncePassword = debounce(handleInputPassword, 800);
  const debounceUsername = debounce(handleInputUsername, 800);

  const handleSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { username, password });
      setData(response.data.access_token);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
    setUsername('');
    setPassword('');
  };

  console.log(data);

  return (
    <Card>
      <form onSubmit={handleSubmitForm}>
        <div className={css.test}>
          <MdLockOutline className={css.icon} />
        </div>
        <legend>Login</legend>
        <div>
          <Input
            type='text'
            placeholder='Username'
            required
            name={'username'}
            onChange={debounceUsername}
          />
        </div>
        <div>
          <Input
            type='password'
            placeholder='Password'
            name={'password'}
            required
            onChange={debouncePassword}
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
        <Link to='/signup'>Sign up!</Link>
      </form>
    </Card>
  );
};

export default Login;
