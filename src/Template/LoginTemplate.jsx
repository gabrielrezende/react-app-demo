import {
    Container,
    ContainerLado,
    ContainerLadoEsquerdo,
    Titulo,
    TituloPlataforma,
} from "../styles";

function LoginTemplate({children}) {
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
                {children}
            </ContainerLado>
        </Container>
    );
}
export default LoginTemplate;

