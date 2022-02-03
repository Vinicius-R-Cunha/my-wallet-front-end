import Header from "../Header";
import { AddDiv, AddForm } from "../AddExpense/style";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function AddIncome() {

    const [formData, setFormData] = useState({ value: '', description: '' });
    const { token } = useContext(UserContext);
    const navigate = useNavigate();

    function handleInput(e) {
        setFormData({ ...formData, [e.target.className]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/add-expense', { ...formData, expense: false }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        promise.then(() => navigate('/'));
        promise.catch(answer => console.log(answer));
    }

    return (
        <AddDiv>
            <Header text={'Nova entrada'} />
            <AddForm>
                <input
                    className='value'
                    type="text"
                    placeholder="Valor"
                    onChange={e => handleInput(e)}
                    value={formData.value}
                />
                <input
                    className='description'
                    type="text"
                    placeholder="Descrição"
                    onChange={e => handleInput(e)}
                    value={formData.description}
                />
                <button onClick={e => handleSubmit(e)}>Salvar entrada</button>
            </AddForm>
        </AddDiv>
    );
}