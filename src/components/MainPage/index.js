import './style.js';
import { MainDiv, Registers, Buttons } from "./style";
import Header from '../Header/index.js';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

    const { token, userName, setUserName } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get('http://localhost:5000/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        promise.then(answer => setUserName(answer.data));
        promise.catch(error => {
            console.log(error);
            navigate('/');
        });
    }, [navigate, token, setUserName]);


    if (!userName) {
        return (
            <h1>Carregando</h1>
        );
    }

    return (
        <MainDiv>
            <Header text={`Olá, ${userName}`} main={true} />

            <Registers>

            </Registers>

            <Buttons>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br />entrada</p>
                </button>
                <button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br />saída</p>
                </button>
            </Buttons>
        </MainDiv>
    );
}