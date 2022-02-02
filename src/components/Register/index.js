import { Link } from 'react-router-dom';
import '../Login/style';
import { Container } from '../Login/style';

export default function Register() {

    function handleSubmit(e) {
        e.preventDefault();

        //Post dos dados pro servidor registrar
    }

    return (
        <Container login={false}>
            <h1>MyWallet</h1>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button onClick={e => handleSubmit(e)}>Cadastrar</button>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Container>
    );
}