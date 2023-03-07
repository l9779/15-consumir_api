import * as types from "../types";

const initalState = {
  botaoClicado: false,
};

export default function exampleReducer(state = initalState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("sucesso");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log("deu errado");
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Fazendo requisição");
      return state;
    }

    default:
      return state;
  }
}
