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
            <p>
            <Input type={"text"} placeholder={"Nome"}/>
            <Input type={"text"} placeholder={"Sobrenome"}/>
            <Input type={"date"} value={"01-01-2000"}/>
            </p>
            <p>
            <Input type={"radio"} NAME={"sex"} VALUE={"M"}/><label for="M">Masculino</label>
            <Input type={"radio"} NAME={"sex"} VALUE={"F"}/><label for="F">Feminino</label>
            </p>
            <p>
            <Input type={"email"} placeholder={"E-mail"}/>
            <Input type={"text"} placeholder={"Usuário"}/>
            </p>
            <p>
            <Input type={"text"} placeholder={"Senha"}/>
            <Input type={"text"} placeholder={"Confirme a Senha"}/>
            </p>
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