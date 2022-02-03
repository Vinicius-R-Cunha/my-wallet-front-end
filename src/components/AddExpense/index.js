import Header from "../Header"
import { AddDiv, AddForm } from "./style"

export default function AddExpense() {
    return (
        <AddDiv>
            <Header text={'Nova saída'} />
            <AddForm>
                <input className='value' type="text" placeholder="Valor" />
                <input className='description' type="text" placeholder="Descrição" />
                <button>Salvar saída</button>
            </AddForm>
        </AddDiv>
    );
}