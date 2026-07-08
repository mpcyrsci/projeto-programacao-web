const API_URL = "http://localhost:3001/authent";

export const createUser = async (email: string, senha: string) => {
  const response = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message);
  }

  return response.json();
};

export const loginUser = async (email: string, senha: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message);
  }

  return response.json();
};
