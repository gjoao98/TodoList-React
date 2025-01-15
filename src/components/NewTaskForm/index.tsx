import { PlusCircle } from "phosphor-react";
import { FormContainer, NewTaskButton, NewTaskInput } from "./styles";

export function NewTaskForm() {
    return (
        <FormContainer>
            <NewTaskInput type="text" placeholder="Adicione uma nova tarefa" />

            <NewTaskButton>
                Criar
                <PlusCircle size={24} />
            </NewTaskButton>
        </FormContainer>
    )
}