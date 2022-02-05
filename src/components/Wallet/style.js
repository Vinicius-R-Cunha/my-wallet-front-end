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
    
    position: relative;

    overflow-y: scroll;
    .empty-message {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        
        margin: auto 0;
    }

    .item {
        width: 93%;

        font-size: 16px;
        line-height: 19px;
        
        display: flex;
        justify-content: space-between;

        margin-top: 21px;

        .name {
            color: #000000;
            span {
                margin-right: 6px;

                color: #C6C6C6;
            }
        }

        .price-delete-div {
            display: flex;
        }

        .delete-button {
            width: 20px;

            color: #C6C6C6;

            text-align: end;
        }


        .red {
            color: #C70000;
        }

        .green {
            color: #03AC00;
        }
    }

    .subtotal {
        width: 93%;

        display: flex;
        justify-content: space-between;

        position: ${props => props.length < 10 ? 'absolute' : 'static'};
        bottom: 0;

        margin: 18px 0 10px 0;

        .name {
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;
            color: #000000;
        }

        .red {
            color: #C70000;
        }

        .green {
            color: #03AC00;
        }
    }
`

const Buttons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    button {
        width: 48%;
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