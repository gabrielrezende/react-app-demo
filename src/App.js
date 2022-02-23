import {
    Container,
    ContainerLado,
    ContainerLadoEsquerdo,
    ContainerFormulario,
    Titulo,
    TituloPlataforma,
    BotaoCriarConta
} from "./styles";
import {Routes, Route} from "react-router-dom";
import CreateUserForm from "./CreateUserForm";
import CreateAccountForm from "./CreateAccountForm";

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
                    <Routes>
                        <Route path='/criar-conta' component= {CreateAccountForm()}/>
                    </Routes>
                </BotaoCriarConta>
            </ContainerLado>
        </Container>
    );
}

export default App;
