export const handleChangeSlate = ({editor, value}) => {
    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    )
    if (isAstChange) {
      // Save the value to Local Storage.
      const content = JSON.stringify(value)
      localStorage.setItem('content', content)
      /* localStorage.setItem('content', serialize(value)) */
    }
  };

export const handleKeyDown = ({event, editor, CustomEditor}) => {
    if (!event.ctrlKey) {
      return
    }

    switch (event.key) {
      // When "`" is pressed, keep our existing code block logic.
      case '`': {
        event.preventDefault()
        CustomEditor.toggleCodeBlock(editor)
        break
      }

      // When "Q" is pressed, keep our existing code quote logic.
      case 'q': {
        event.preventDefault()
        CustomEditor.toggleBlockQuoteBlock(editor)
        break
      }

      // When "B" is pressed, bold the text in the selection.
      case 'b': {
        event.preventDefault()
        CustomEditor.toggleBoldMark(editor)
        break
      }

      // When "I" is pressed, italic the text in the selection.
      case 'i': {
        event.preventDefault()
        CustomEditor.toggleItalicMark(editor)
        break
      }

      // When "U" is pressed, underline the text in the selection.
      case 'u': {
        event.preventDefault()
        CustomEditor.toggleUnderlineMark(editor)
        break
      }

      // When "1" is pressed, keep our existing h1.
      case '1': {
        event.preventDefault()
        CustomEditor.toggleH1Block(editor)
        break
      }
      // When "2" is pressed, keep our existing h2.
      case '2': {
        event.preventDefault()
        CustomEditor.toggleH2Block(editor)
        break
      }
      // When "3" is pressed, keep our existing h3.
      case '3': {
        event.preventDefault()
        CustomEditor.toggleH3Block(editor)
        break
      }
      // When "4" is pressed, keep our existing h4.
      case '4': {
        event.preventDefault()
        CustomEditor.toggleH4Block(editor)
        break
      }
      // When "5" is pressed, keep our existing h5.
      case '5': {
        event.preventDefault()
        CustomEditor.toggleH5Block(editor)
        break
      }
      // When "6" is pressed, keep our existing h6.
      case '6': {
        event.preventDefault()
        CustomEditor.toggleH6Block(editor)
        break
      }
      // When "p" is pressed, keep our existing code block logic.
      case 'p': {
        event.preventDefault()
        CustomEditor.toggleParagrapfBlock(editor)
        break
      }

      default:
         break
    }
  }