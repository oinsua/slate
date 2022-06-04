import React, {useState} from 'react'
import Select from 'react-select'
import { CustomEditor } from '../../helpers/customCommand'
import { useSlate } from 'slate-react'

const options = [
  { value: 'h1', label: 'Header 1' },
  { value: 'h2', label: 'Header 2' },
  { value: 'h3', label: 'Header 3' },
  { value: 'h4', label: 'Header 4' },
  { value: 'h5', label: 'Header 5' },
  { value: 'h6', label: 'Header 6' },
  { value: 'p', label: 'Paragraph' },
]

const DropdownSelect = () => {
  const editor = useSlate()
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log('select:', option);
      if(option.value === 'h1'){
        CustomEditor.toggleH1Block(editor)
      } else if(option.value === 'h2'){
        CustomEditor.toggleH2Block(editor)
      } else if(option.value === 'h3'){
        CustomEditor.toggleH3Block(editor)
      } else if(option.value === 'h4'){
        CustomEditor.toggleH4Block(editor)
      } else if(option.value === 'h5'){
        CustomEditor.toggleH5Block(editor)
      } else if(option.value === 'h6'){
        CustomEditor.toggleH6Block(editor)
      } else if(option.value === 'p'){
        CustomEditor.toggleParagraphBlock(editor)
      }
  };

  return (
    <Select
          defaultValue={selectedOption}
          onChange={handleSelect}
          options={options}
    />
  )
}

export default DropdownSelect 