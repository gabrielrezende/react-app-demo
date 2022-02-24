import React from 'react';
import {
    FormularioContainer, 
    ContainerAcao, 
    TextoOu, 
    BotaoVoltar
    } from "./styles";
import Input from "../Input";
import Button from "../Button";

export default () => {
    
    const onClickCriarConta = () =>{
        console.log('criarConta');
    }

    const onClickFacebook = () => {
        console.log('facebook');
    }    

    const onClickGoogle = () => {
        console.log('google');
    }  

    const onClickLinkedin = () =>{
        console.log('linkedin');
    }

    return (
        <FormularioContainer>
            <Input type={"text"} placeholder={"First Name"}/>
            <Input type={"text"} placeholder={"Last Name"}/>
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"text"} placeholder={"Sexo"}/>
            <Input type={"text"} placeholder={"Nascimento"}/>
            <Input type={"text"} placeholder={"E-mail"}/>
            <Input type={"text"} placeholder={"Senha"}/>
            <ContainerAcao>
                <Button width="100%" onClick={onClickCriarConta}>
                    Criar Conta
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
            <BotaoVoltar href="/">
                Voltar
            </BotaoVoltar>
        </FormularioContainer>
    );
};