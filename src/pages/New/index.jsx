import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { api } from "../../../../api_rocketnotes/src/services/api";
import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [description, serDescription] = useState("");
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();

  //Adicionar links
  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  //remover link
  function handleRemoveLink(linkDeleted) {
    setLinks((prevState) => prevState.filter((link) => link !== linkDeleted));
  }

  //Adicionar tags
  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  //Remover tag
  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  //Cadastrando nota
  async function handleNewNote() {
    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");
    //retornar para a home
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(event) => setTitle(event.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(event) => serDescription(event.target.value)}
          />
          <Section title="Links úteis">
            {/* renderizar varias vezes o link */}
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                //quando houver parâmetros se usa a arrow function
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(event) => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(event) => setNewTag(event.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
