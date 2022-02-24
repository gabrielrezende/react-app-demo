import {
    ContainerFormulario,
    BotaoCriarConta
} from "../styles";
import CreateUserForm from "../CreateUserForm/CreateUser";
import LoginTemplate from "./LoginTemplate";

function Login() {
    return (
    <LoginTemplate>
            <ContainerFormulario>
                <CreateUserForm/>
            </ContainerFormulario>
            <BotaoCriarConta href={"/criar-conta"}>
                Criar conta
            </BotaoCriarConta>
    </LoginTemplate>
);
}
export default Login;

