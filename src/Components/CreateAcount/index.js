import React from 'react';
import {
    FormularioContainer, 
    ContainerAcao, 
    TextoOu, 
    BotaoVoltar,
    LabelColumn
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

            <LabelColumn>
                <label>
                    <input name='sexo' type='radio' />
                    Masculino
                </label>            
                <label> 
                    <input name='sexo' type='radio' />  
                    Feminino
                </label>
            </LabelColumn>
            
            
            <Input type={"email"} placeholder={"E-mail"}/>
            <Input type={"text"} placeholder={"Usuário"}/>
            </p>
            <p>
            <Input type={"password"} placeholder={"Senha"}/>
            <Input type={"password"} placeholder={"Confirme a Senha"}/>
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