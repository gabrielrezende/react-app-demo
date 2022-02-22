import {
    Container,
    ContainerLado,
    ContainerLadoEsquerdo,
    ContainerFormulario,
    Titulo,
    TituloPlataforma,
    BotaoCriarConta
} from "./styles";
import CreateUserForm from "./CreateUserForm";

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
                    <CreateUserForm/>
                </ContainerFormulario>
                <BotaoCriarConta href={"/criar-conta"}>
                    Criar conta
                </BotaoCriarConta>
            </ContainerLado>
        </Container>
    );
}

export default App;
