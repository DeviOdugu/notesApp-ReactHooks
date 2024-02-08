// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  border: solid #d8d8d8 2px;
  padding: 30px;
  margin: 10px;
`
export const MainHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 25px;
  text-align: center;
  padding-bottom: 20px;
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  border: 4px #efefef solid;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const TitleInput = styled.input`
  color: #475569;
  font-size: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
`
export const NoteInput = styled.textarea`
  color: #475569;
  font-size: 10px;
  outline: none;
  border: none;
`
export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 4px;
  font-size: 10px;
  text-align: center;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  align-self: flex-end;
  margin: 20px;
  border: none;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 50px;
  width: 50px;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 20px;
`
export const Paragraph = styled.p`
  color: #475569;
  font-size: 10px;
`
export const Lists = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`
