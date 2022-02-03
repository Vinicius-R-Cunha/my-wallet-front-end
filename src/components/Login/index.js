import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Container } from "./style";

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const { setUserName, setToken } = useContext(UserContext);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', formData);
        promise.then(answer => {
            setToken(answer.data.token);
            setUserName(answer.data.name);
            navigate('/');
        });

        promise.catch(answer => window.alert(answer.response.data));
    }

    function handleInput(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Container login={true}>
            <h1>MyWallet</h1>
            <input
                type="email"
                placeholder="E-mail"
                name='email'
                onChange={e => handleInput(e)}
                value={formData.email}
            />
            <input
                type="password"
                placeholder="Senha"
                name='password'
                onChange={e => handleInput(e)}
                value={formData.password}
            />
            <button onClick={e => handleSubmit(e)}>Entrar</button>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}