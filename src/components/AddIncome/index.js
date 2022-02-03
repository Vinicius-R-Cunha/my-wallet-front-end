import Header from "../Header";
import { AddDiv, AddForm } from "../AddExpense/style";

export default function AddIncome() {
    return (
        <AddDiv>
            <Header text={'Nova entrada'} />
            <AddForm>
                <input className='value' type="text" placeholder="Valor" />
                <input className='description' type="text" placeholder="Descrição" />
                <button>Salvar entrada</button>
            </AddForm>
        </AddDiv>
    );
}