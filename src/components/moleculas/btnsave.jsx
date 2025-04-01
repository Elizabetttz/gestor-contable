import styled from "styled-components";
import {Icono} from "../../index"
export function Btnsave({ funcion, titulo, bgcolor, icono,url }) {
  return (
    <Container type="submit" $bgcolor={bgcolor}>
   
     <Icono>{icono}</Icono>
     

      <span className="btn" onClick={funcion}>
        <a href={url} target="_blank">
           {titulo}
        </a>
      </span>
    </Container>
  );
}
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;
  .btn{
  background-color: ${(props)=> props.$bgcolor};
  padding: 0.5em 1.1em;
  font-weight: 800;
  border: 3px solid ${(props)=> props.$bgcolor};
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em #000;
  transition: 0.2s;
  white-space: 1px;
  color: #000;
  cursor : pointer;
  &:hover{
    transform: translate(-0.08em, -0.3em);
  }
  &:active{
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
`;