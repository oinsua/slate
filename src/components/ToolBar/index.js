import React from 'react'
import { CustomEditor } from '../../helpers/customCommand'
import { useSlate } from 'slate-react'
import Button from '../Button'
import Select from '../Select'

  const toolbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'normal',
    justifyContent: 'flex-start',
    marginLeft: '1rem',
  }
const Toolbar = () => {
    const editor = useSlate()

    return (
      <div style={toolbarStyles}>
            <Select editor={editor} CustomEditor={CustomEditor}/>
            <Button onMouseDown={event => {
                                event.preventDefault()
                                CustomEditor.toggleBoldMark(editor)
                                }}
                    children="B" 
                    styles={{fontWeight: 'bold', marginLeft: '0.5rem'}}      
            />
            <Button onMouseDown={event => {
                                event.preventDefault()
                                CustomEditor.toggleItalicMark(editor)
                                }}
                children="I"
                styles={{fontStyle: 'italic', marginLeft: '0.5rem'}}  
            />
            <Button
                onMouseDown={event => {
                                    event.preventDefault()
                                    CustomEditor.toggleUnderlineMark(editor)
                                    }}
                children="U"
                styles={{textDecoration: 'underline', marginLeft: '0.5rem'}} 
            />
            <Button onMouseDown={event => {
                                        event.preventDefault()
                                        CustomEditor.toggleCodeBlock(editor)
                                        }}
                    children="</>"
                    styles={{marginLeft: '0.5rem'}} 
            />
            <Button onMouseDown={event => {
                                        event.preventDefault()
                                        CustomEditor.toggleBlockQuoteBlock(editor)
                                        }}
                    children= "Q"
                    styles={{marginLeft: '0.5rem'}} 
            />
      </div>
    )
  }

export default Toolbar