import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/williangomesdev.png" alt="imagem do perfil do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Willian Amaro Gomes</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}