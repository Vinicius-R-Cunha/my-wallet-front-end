import './style.js';
import { MainDiv, Registers, Buttons } from "./style";
import Header from '../Header/index.js';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Wallet() {

    const { token, userName } = useContext(UserContext);
    const [expenses, setExpenses] = useState();
    const [subtotal, setSubtotal] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/sign-in');
        } else {
            const promise = axios.get('http://localhost:5000/wallet', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            promise.then(answer => {
                setExpenses(answer.data.expenses);
                setSubtotal(answer.data.subtotal);
            });
            promise.catch(answer => console.log(answer));
        }
    }, [token, navigate]);


    if (!expenses) {
        return (
            <h1>Carregando</h1>
        );
    }

    return (
        <MainDiv>
            <Header text={`Olá, ${userName}`} main={true} />

            <Registers>
                {expenses.length === 0 ? <p className='empty-message'>Não há registros de<br />entrada ou saída</p> :
                    expenses.map(obj => {
                        return (
                            <div className='item' key={expenses.indexOf(obj)}>
                                <p className='name'><span>{obj.date}</span>{obj.description}</p>
                                <p className={obj.expense ? 'red' : 'green'}>{obj.value}</p>
                            </div>
                        )
                    })
                }
                <div className='subtotal'>
                    <p className='name'>SALDO</p>
                    <p className={parseFloat(subtotal?.replace(',', '.')) >= 0 ? 'green' : 'red'}>{subtotal}</p>
                </div>
            </Registers>

            <Buttons>
                <button onClick={() => navigate('/add-income')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br />entrada</p>
                </button>
                <button onClick={() => navigate('/add-expense')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br />saída</p>
                </button>
            </Buttons>
        </MainDiv>
    );
}