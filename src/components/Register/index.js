import { Link, useNavigate } from 'react-router-dom';
import '../Login/style';
import { Container } from '../Login/style';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Register() {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirmation: '' });
    const { token } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    function handleInput(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password === formData.passwordConfirmation) {
            const promise = axios.post('http://localhost:5000/sign-up', formData);
            promise.then(() => navigate("/sign-in"));
            promise.catch(error => window.alert(error.response.data));
        } else {
            window.alert('as senhas nao coincidem');
            return;
        }
    }

    return (
        <Container login={false}>
            <h1>MyWallet</h1>
            <input
                type="text"
                placeholder="Nome"
                name="name"
                onChange={e => handleInput(e)}
                value={formData.name}
            />
            <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={e => handleInput(e)}
                value={formData.email} />
            <input type="password"
                placeholder="Senha"
                name="password"
                onChange={e => handleInput(e)}
                value={formData.password} />
            <input type="password"
                placeholder="Confirme a senha"
                name="passwordConfirmation"
                onChange={e => handleInput(e)}
                value={formData.passwordConfirmation} />
            <button onClick={e => handleSubmit(e)}>Cadastrar</button>
            <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </Container>
    );
}