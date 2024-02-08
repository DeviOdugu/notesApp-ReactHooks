// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  MainHeading,
  FormContainer,
  TitleInput,
  NoteInput,
  Button,
  Container,
  Image,
  Heading,
  Paragraph,
  Lists,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitle] = useState('')
  const [noteInput, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddButton = event => {
    event.preventDefault()
    const newEvent = {
      id: uuidv4(),
      title: titleInput,
      note: noteInput,
    }
    setNotesList(prevNoteList => [...prevNoteList, newEvent])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer>
      <MainHeading> Notes </MainHeading>
      <FormContainer onSubmit={onAddButton}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={onChangeTitle}
        />
        <NoteInput
          rows="6"
          placeholder="Take a Note..."
          value={noteInput}
          onChange={onChangeNote}
        />
        <Button type="submit"> Add </Button>
      </FormContainer>
      {notesList.length === 0 && (
        <Container>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading> No Notes Yet </Heading>
          <Paragraph> Notes you add will appear here </Paragraph>
        </Container>
      )}
      {notesList.length !== 0 && (
        <Lists>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteItemDetails={eachNote} />
          ))}
        </Lists>
      )}
    </MainContainer>
  )
}

export default Notes
