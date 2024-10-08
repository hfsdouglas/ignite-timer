import { styled } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    height: 48px;
    width: 100px;

    background-color: ${props => props.theme['green-500']};

`