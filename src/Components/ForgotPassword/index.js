import React from 'react';
import {FormularioContainer, ContainerAcao} from "./styles";
import Input from "../Input";
import Button from "../Button";

export default () => {
    
    const onClickRecuperarConta = () =>{
        console.log('criarConta');
    }

    return (
        <FormularioContainer>
            <Input type={"text"} placeholder={"Digite seu E-mail"}/>
            <ContainerAcao>
                <Button width="100%" onClick={onClickRecuperarConta}>
                    Recuperar Conta
                </Button>
            </ContainerAcao>
        </FormularioContainer>
    );
};