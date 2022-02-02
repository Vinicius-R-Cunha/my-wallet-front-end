import styled from "styled-components";

const MainDiv = styled.div`
    width: 87%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Registers = styled.div`
    width: 100%;
    height: 446px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;

    margin: 22px 0 12px 0;

    border-radius: 5px;
`

const Buttons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    button {
        width: 156px;
        height: 114px;

        background: #A328D6;

        border: hidden;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        text-align: left;

        ion-icon {
            font-size: 25px;
            color: #FFFFFF;

            margin: 6px 0 0 2px;
        }

        p {
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;

            margin: 0 0 6px 7px;
        }
    }
`

export { MainDiv, Registers, Buttons }