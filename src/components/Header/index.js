import { HeaderContainer } from "./style";
import exit from '../../assets/exit.png';

export default function Header({ text, main }) {

    return (
        <HeaderContainer>
            <p>{text}</p>
            {main && <img src={exit} alt="" />}
        </HeaderContainer>
    );
}