import {
    Container,
    ContainerLado,
    ContainerLadoEsquerdo,
    ContainerFormulario,
    Titulo,
    TituloPlataforma,
    BotaoCriarConta
} from "./styles";
import Routes from "../Routes";

function App() {
    return (
        <Container>
            <ContainerLadoEsquerdo>
                <Titulo>
                    Welcome to your professional gaming community
                </Titulo>
            </ContainerLadoEsquerdo>
            <ContainerLado>
                <TituloPlataforma>
                    Allamo PRO
                </TituloPlataforma>
                <ContainerFormulario>
                    <Routes/>
                </ContainerFormulario>
                
            </ContainerLado>
        </Container>
    );
}

export default App;
