import React, { useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { CustomEditor } from './helpers/customCommand';
import Toolbar from './components/ToolBar';
import { nodes } from './helpers/initialData';
import { handleChangeSlate, handleKeyDown } from './helpers/slateEditable';
import useEditorConfig from './hook/useEditorConfig';

function App() {
  const editor = useMemo(() => withReact(createEditor()), [])

  // Add the initial value.
  const initialValue = useMemo(() =>   /* deserialize(localStorage.getItem('content')) */
                                      JSON.parse(localStorage.getItem('content'))
                                      ||
                                      nodes
                                      , []
  );

  const { renderElement, renderLeaf } = useEditorConfig();

  // Render the Slate context.
  return (
    // Add the editable component inside the context.
    <Slate editor={editor} 
           value={initialValue} 
           onChange={(value) => handleChangeSlate({editor, value})}
    >
      <Toolbar />
      <Editable onKeyDown={event => handleKeyDown({event, editor, CustomEditor})}
                // Pass in the `renderElement` function.
                renderElement={renderElement}
                // Pass in the `renderLeaf` function.
                renderLeaf={renderLeaf}
      />
    </Slate>
  );
}

export default App;
