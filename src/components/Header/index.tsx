import TodoLogo from '../../assets/TodoLogo.svg'

import { HeaderContainer } from "./styles";

import { NewTaskForm } from "../NewTaskForm";

export function Header() {
    return (
        <HeaderContainer>
            <img src={TodoLogo} />

            <form action="">
                <NewTaskForm />
            </form>
        </HeaderContainer>
    )
}