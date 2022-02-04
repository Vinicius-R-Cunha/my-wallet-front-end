import { HeaderContainer } from "./style";
import exit from '../../assets/exit.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header({ text, main }) {

    const { setToken, setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        setToken();
        setUserName();
        localStorage.removeItem('localToken');
        localStorage.removeItem('userName');
        navigate('/sign-in');
    }

    return (
        <HeaderContainer>
            <p>{text}</p>
            {main && <img onClick={logout} src={exit} alt="" />}
        </HeaderContainer>
    );
}