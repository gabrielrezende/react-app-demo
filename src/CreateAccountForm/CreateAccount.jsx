import React from 'react';
import {FormularioContainer, ContainerAcao, TextoOu} from "./styles";
import Input from "../Input";
import Button from "../Button";
import LoginTemplate from "../Template/LoginTemplate";
import {ContainerFormulario} from "../styles";
import { BotaoVoltar } from "../styles";

export default () => {

    const onClickFacebook = () => {
        console.log('facebook');
    }

    const onClickGoogle = () => {
        console.log('google');
    }

    const onClickCriar = () => {
        console.log('CreatAccount');
    }

    const onClickLinkedin = () => {
        console.log('linkedin');
    }

    return (
        <LoginTemplate>
            <ContainerFormulario>
                <FormularioContainer>
                    <Input type={"text"} placeholder={"First Name"}/>
                    <Input type={"text"} placeholder={"Last Name"}/>
                    <Input type={"text"} placeholder={"Username"}/>
                    <Input type={"text"} placeholder={"Sexo"}/>
                    <Input type={"text"} placeholder={"Nascimento"}/>
                    <Input type={"text"} placeholder={"E-mail"}/>
                    <Input type={"text"} placeholder={"Senha"}/>
                    <ContainerAcao>
                        <Button width="100%" backgroundColor="#d3e760" onClick={onClickCriar}>
                            Criar conta
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
                </FormularioContainer>
            </ContainerFormulario>
            <BotaoVoltar href={"/"}>
                Voltar
            </BotaoVoltar>
        </LoginTemplate>
    );
};