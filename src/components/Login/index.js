import { Link } from "react-router-dom";
import { Container } from "./style";

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault();

        //Post pro servidor te logar
    }

    return (
        <Container login={true}>
            <h1>MyWallet</h1>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button onClick={e => handleSubmit(e)}>Entrar</button>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}