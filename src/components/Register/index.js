import { Link, useNavigate } from 'react-router-dom';
import '../Login/style';
import { Container } from '../Login/style';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Register() {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirmation: '' });
    const { token } = useContext(UserContext);
    const [errorData, setErrorData] = useState();
    const [emailExists, setEmailExists] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    });

    function handleInput(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        setErrorData({ ...formData });
        setTimeout(() => setErrorData(), 3500);

        const passwordsMatch = formData.password === formData.passwordConfirmation;
        const nameNotEmpty = formData.name !== '';
        const emailNotEmpty = formData.email !== '';
        const emailIsLowerCased = formData.email === formData.email.toLowerCase();
        const passwordNotEmpty = formData.password !== '';

        if (passwordsMatch && nameNotEmpty && emailNotEmpty && passwordNotEmpty && emailIsLowerCased) {
            const promise = axios.post('http://localhost:5000/sign-up', formData);
            promise.then(() => navigate("/sign-in"));
            promise.catch(error => {
                if (error.response.data === 'used email') {
                    setEmailExists(true);
                    setTimeout(() => setEmailExists(false), 3500);
                }
            });
        } else {
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
            {errorData?.name === '' && <p className="error-message">digite seu nome</p>}
            <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={e => handleInput(e)}
                value={formData.email}
            />
            {(errorData?.email === '' || errorData?.email !== errorData?.email.toLowerCase()) &&
                <p className="error-message">digite um email válido</p>}
            {emailExists && <p className="error-message">esse e-mail já está sendo usado</p>}
            <input type="password"
                placeholder="Senha"
                name="password"
                onChange={e => handleInput(e)}
                value={formData.password}
            />
            {(errorData?.password === '' && errorData?.password === errorData?.passwordConfirmation) &&
                <p className="error-message">digite a sua senha/confirmação</p>}
            <input type="password"
                placeholder="Confirme a senha"
                name="passwordConfirmation"
                onChange={e => handleInput(e)}
                value={formData.passwordConfirmation}
            />
            {errorData?.password !== errorData?.passwordConfirmation &&
                <p className="error-message">as senhas não coincidem</p>}
            <button onClick={e => handleSubmit(e)}>Cadastrar</button>
            <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </Container>
    );
}