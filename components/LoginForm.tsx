import { FunctionalComponent } from "preact";

const LoginForm: FunctionalComponent = () => {
  return (
    <form action="/" method="GET">
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="password" placeholder="password" required />
      <button type="submit">LogIn</button>
    </form>
  );
};

export default LoginForm;
