import { HeaderContainer } from "./style";
import exit from '../../assets/exit.png';
import { useNavigate } from "react-router-dom";

export default function Header({ text, main }) {

    const navigate = useNavigate();

    function logout() {
        navigate('/');
    }

    return (
        <HeaderContainer>
            <p>{text}</p>
            {main && <img onClick={logout} src={exit} alt="" />}
        </HeaderContainer>
    );
}