import styled from "styled-components";

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: grid;
    grid-template-columns: 0.8fr 1fr 2fr 0.4fr 0.4fr;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
