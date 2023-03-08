import React from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (!isEmail(email)) {
      formErros = true;
      toast.error("Email inválido.");
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error("Senha inválida.");
    }

    if (formErros) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
