import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Links, Content } from './styles.js'
export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magni tempore a excepturi illum illo quaerat vel deleniti assumenda veniam animi. 
            Voluptates impedit accusantium distinctio sequi nostrum fugiat aliquid cumque totam.</p>

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
        </Content>
      </main>
    </Container >
  )

}