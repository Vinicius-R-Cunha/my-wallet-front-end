import styled from "styled-components";

const AddDiv = styled.div`
    width: 87%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddForm = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 37px;

    input {
        width: 100%;
        height: 58px;

        font-size: 20px;
        color: #000000;
        text-indent: 15px;

        background: #FFFFFF;

        border: hidden;
        border-radius: 5px;
        
        margin-bottom: 12px;
    }
    
    button {
        width: 100%;
        height: 46px;

        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        
        background: #A328D6;
        
        border: hidden;
        border-radius: 5px;
    }
`

export { AddDiv, AddForm }