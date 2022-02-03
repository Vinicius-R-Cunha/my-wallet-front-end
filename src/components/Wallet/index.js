import './style.js';
import { MainDiv, Registers, Buttons } from "./style";
import Header from '../Header/index.js';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext.js';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

export default function Wallet() {

    const { token, userName } = useContext(UserContext);

    //const navigate = useNavigate();

    useEffect(() => {

    }, []);


    if (!userName) {
        return (
            <h1>Carregando</h1>
        );
    }

    return (
        <MainDiv>
            <Header text={`Olá, ${userName}`} main={true} />

            <Registers>
                <p className='empty-message'>Não há registros de<br />entrada ou saída</p>
                {/* <div className='item'>
                    <p className='name'><span>30/11</span>Almoço mãe</p>
                    <p className='price'>39,90</p>
                </div>
                <div className='item'>
                    <p className='name'><span>30/11</span>Almoço mãe</p>
                    <p className='price'>39,90</p>
                </div>
                <div className='item'>
                    <p className='name'><span>30/11</span>Almoço mãe</p>
                    <p className='price'>39,90</p>
                </div>
                <div className='item'>
                    <p className='name'><span>30/11</span>Almoço mãe</p>
                    <p className='price'>39,90</p>
                </div>
                <div className='subtotal'>
                    <p className='name'>SALDO</p>
                    <p className='price'>39,90</p>
                </div> */}
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