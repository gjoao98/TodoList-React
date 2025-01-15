import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 12.5rem;
    background-color: ${props => props.theme['gray-700']};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        position: absolute;
        top: 10.5rem;
    }
`