//Criar contexto
import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../../../api_rocketnotes/src/services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  //função de autenticação
  //parâmetros em {} é possível obter as propriedades em qualquer ordem
  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

      //Armazenar dados de autenticação no navegador do usuário
      //dados tem que ser armazenado em formato de texto é nescessário fazer a conversão do dado
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])



  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
