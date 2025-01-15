import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

export const NewTaskInput = styled.input`
    width: 39.875rem;
    background: ${props => props.theme['gray-500']};
    
    color: ${(props) => props.theme['gray-300']};
    font-size: 1rem;
    font-weight: 400;

    border: 2px solid;
    border-color: transparent;
    border-radius: 8px;
    padding: 1rem;

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['blue-dark']};
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-300']};
    }
`


export const NewTaskButton = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 0.875rem;
    font-weight: bold;

    cursor: pointer;

    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${(props) => props.theme['blue']};
    }
`