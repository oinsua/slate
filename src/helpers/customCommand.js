import { Editor, Transforms, Text } from 'slate';
// Define our own custom set of helpers.
export const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },

    isItalicMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.italic === true,
        universal: true,
      })
  
      return !!match
    },

    isUnderlineMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.underline === true,
        universal: true,
      })
  
      return !!match
    },
  
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },

    isBlockQuoteBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'blockquote',
      })
  
      return !!match
    },

    isH1BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h1',
      })
  
      return !!match
    },

    isH2BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h2',
      })
  
      return !!match
    },

    isH3BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h3',
      })
  
      return !!match
    },

    isH4BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h4',
      })
  
      return !!match
    },

    isH5BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h5',
      })
  
      return !!match
    },
  
    isH6BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h6',
      })
  
      return !!match
    },
  
    isParagraphBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'p',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },

    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor)
      Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },

    toggleUnderlineMark(editor) {
      const isActive = CustomEditor.isUnderlineMarkActive(editor)
      Transforms.setNodes(
        editor,
        { underline: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },

    toggleBlockQuoteBlock(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'blockquote' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },

    toggleH1Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h1' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    
    toggleH2Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h2' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    toggleH3Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h3' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    toggleH4Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h4' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    toggleH5Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h5' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    toggleH6Block(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h6' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    toggleParagraphBlock(editor) {
      const isActive = CustomEditor.isBlockQuoteBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'p' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },

  }