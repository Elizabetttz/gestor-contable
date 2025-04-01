import styled from "styled-components";
import { v,Btnsave} from "../../../index";

export function SidebarDiv(){
    
    return(
        <Container>
            
            <div className="contentBtn">

            <Btnsave titulo="Cerrar Sesion" bgcolor={({theme})=> theme.bg5} ></Btnsave>

            </div>
            
        </Container>

    );
}
const Container = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    position: relative;
    
    .contentBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        margin-left: -20px;
        bottom: 0;
    }

`;