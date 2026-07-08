import { createUser } from "../services/authApi";
import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await createUser(email, password);

      alert("Conta criada com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao criar a conta.");
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
            src="./logo.png"
            alt="Logo do site."
            className="mb-4 h-50 w-58.25"
          />
        </Link>

        {/* <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        /> */}
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
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        /> */}

        <Button title="Criar conta" />
        <Link to="/login" className="w-full">
          <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
