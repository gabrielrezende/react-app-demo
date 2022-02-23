import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContainerLado = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerLadoEsquerdo = styled(ContainerLado)`
  border-right: #333333 1px solid;
`;

export const Titulo = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const TituloPlataforma = styled(Titulo)`
  font-size: 40px;
`;

export const ContainerFormulario = styled.div`
  height: 100%;
  width: 400px;
  max-width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const BotaoCriarConta = styled.a`
  margin: 20px;
`;