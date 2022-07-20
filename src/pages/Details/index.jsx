import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Links } from './styles.js'
export function Details() {
  return (
    <Container>
      <Header />
<Section title="Links úteis">
<Links>
  <li><a href="#">https://github.com/williangomesdev</a></li>
  <li><a href="#">https://github.com/williangomesdev</a></li>
</Links>

</Section>
      <Button title="Voltar" />
    </Container>
  )

}