// Write your code here
import {ListContainer, ItemTitle, ItemNote} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails} = props
  const {title, note} = noteItemDetails

  return (
    <ListContainer>
      <ItemTitle> {title} </ItemTitle>
      <ItemNote> {note} </ItemNote>
    </ListContainer>
  )
}

export default NoteItem
