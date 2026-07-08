import { useState } from "react";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router";
import Button from "../components/ui/Button";
import { loginUser } from "../services/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await loginUser(email, password);

      navigate("/my-animes");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao fazer login.");
      }
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#030101]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#D7D8D9] bg-[#D7D8D9] p-4">
        <Link to="/">
          <img
            src="/logo.png"
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

        <Button title="Login" />

        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
