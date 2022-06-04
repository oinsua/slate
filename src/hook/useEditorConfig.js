import React, { useCallback } from 'react';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import P from '../components/P';
import CodeElement from '../components/CodeElement';
import BlockQuote from '../components/BlockQuote';
import DefaultElement from '../components/DefaultElement';
import { Leaf } from '../helpers/customLeaf';

export default function useEditorConfig() {

    const renderElement = useCallback(props => {
        switch (props.element.type) {
          case 'code':
            return <CodeElement {...props} />
          case 'blockquote':
            return <BlockQuote {...props} />
          case 'h1':
            return <H1 {...props} />
          case 'h2':
            return <H2 {...props} />
          case 'h3':
            return <H3 {...props} />
          case 'h4':
            return <H4 {...props} />
          case 'h5':
            return <H5 {...props} />
          case 'h6':
            return <H6 {...props} />
          case 'p':
            return <P {...props} />
          default:
            return <DefaultElement {...props} />
        }
      }, []);
    
    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, []);
      
    return { renderElement, renderLeaf };
};