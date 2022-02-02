import './style.js';
import { MainDiv, Registers, Buttons } from "./style";
import Header from '../Header/index.js';

export default function MainPage() {
    return (
        <MainDiv>
            <Header text={'Olá, Fulano'} main={true} />

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