import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#030101]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#D7D8D9] bg-[#D7D8D9] p-4">
        <Link to="/">
          <img
            src="./logo.png"
            alt="Logo do site."
            className="mb-4 h-50 w-58.25"
          />
        </Link>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/my-animes" className="w-full">
          <Button title="Login" />
        </Link>
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
