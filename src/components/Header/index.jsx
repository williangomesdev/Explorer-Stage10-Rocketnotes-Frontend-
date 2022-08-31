import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

//importando hook de auth
import { useAuth } from '../../hooks/auth'

export function Header() {
    /* importando a funcionalidade */
    const { signOut } = useAuth()

    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/williangomesdev.png" alt="imagem do perfil do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Willian Amaro Gomes</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}