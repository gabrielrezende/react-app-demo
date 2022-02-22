import React from 'react';
import {Button} from './styles';

export default ({
                    width = "120px",
                    fontColor = "#FFF",
                    backgroundColor = "#ff8a00",
                    onClick,
                    children
                }) => {
    return (
        <Button
            width={width}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            onClick={onClick}>
            {children}
        </Button>
    );
}