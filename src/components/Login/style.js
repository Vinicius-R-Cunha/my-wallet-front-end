import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: ${props => props.login ? '160px' : '95px'};

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;

        margin-bottom: 24px;
    }

    input {
        width: 326px;
        height: 58px;

        font-size: 20px;
        color: #000000;

        background: #FFFFFF;

        margin-bottom: 13px;

        border: hidden;
        border-radius: 7px;

        text-indent: 15px;
    }

    button {
        width: 326px;
        height: 46px;

        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;

        background: #A328D6;

        margin-bottom: 36px;

        border: hidden;
        border-radius: 5px;
    }

    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;

        text-decoration: none;

        padding-bottom: 30px;
    }

    .error-message {
        margin-bottom: 12px;
        color: red;
    }
`

export { Container }