import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Links } from './styles.js'
export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://github.com/williangomesdev</a></li>
          <li><a href="#">https://github.com/williangomesdev</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>
      <Button title="Voltar" />
    </Container>
  )

}