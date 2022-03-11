import React from 'react';
import {   
        FormularioContainer, 
        ContainerAcao, 
        BotaoEsqueciMinhaSenha, 
        TextoOu,
        BotaoCriarConta
        } from "./styles";
import Input from "../Input";
import Button from "../Button";

export default () => {

    const onClickFacebook = () => {
        console.log('facebook');
    }

    const onClickGoogle = () => {
        console.log('google');
    }

    const onClickEntrar = () =>{
        console.log('entra');
    }

    const onClickLinkedin = () =>{
        console.log('linkedin');
    }

    return (
        <FormularioContainer>
            <Input type={"text"} placeholder={"Digite o seu e-mail"}/>
            <Input type={"password"} placeholder={"Digite a sua senha"}/>
            <ContainerAcao>
                <BotaoEsqueciMinhaSenha href={"/recuperar-senha"}>
                    Recuperar senha
                </BotaoEsqueciMinhaSenha>
                <Button onClick={onClickEntrar}>
                    Entrar
                </Button>
            </ContainerAcao>
            <TextoOu>
                OU
            </TextoOu>
            <Button width="100%" backgroundColor="#38548F" onClick={onClickFacebook}>
                Facebook
            </Button>
            <Button width="100%" backgroundColor="#C4402F" onClick={onClickGoogle}>
                Google
            </Button>
            <Button width="100%" backgroundColor="#0961B8" onClick={onClickLinkedin}>
                Linkedin
            </Button>
            <BotaoCriarConta href="/criar-conta">
                Criar conta
            </BotaoCriarConta>
        </FormularioContainer>
        
    );
};