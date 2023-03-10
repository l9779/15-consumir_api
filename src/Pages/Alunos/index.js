import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture, NovoAluno } from "./styled";
import axios from "../../services/axios";
import Loading from "../../Components/Loading";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute("display", "block");
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
    } catch (err) {
      const status = get(err, "response.status", []);
      if (status === 400) {
        // esse código ficaria na parte do try mas esta dando erro 400 de qualquer jeito
        const novosAlunos = [...alunos];
        novosAlunos.splice(index, 1);
        setAlunos(novosAlunos);
      } else if (status === 401) {
        toast.error("Você precisa fazer login.");
      } else {
        toast.error("Ocorreu um erro ao excluir aluno.");
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => {
          return (
            <div key={String(aluno.id)}>
              <ProfilePicture>
                {get(aluno, "Fotos[0].url", false) ? (
                  <img src={aluno.Fotos[0].url} crossOrigin="" alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>

              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>

              <Link to={`aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link to={`aluno/${aluno.id}/delete`} onClick={handleDeleteAsk}>
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              ></FaExclamation>
            </div>
          );
        })}
      </AlunoContainer>
    </Container>
  );
}
