// Define a React component to render leaves with bold text.
export const Leaf = props => {
    let styles = {};         
   if(props.leaf.bold){
      styles.fontWeight = 'bold';
   }
   if(props.leaf.italic){
      styles.fontStyle = 'italic';
   } 
   if(props.leaf.underline){
      styles.textDecoration = 'underline';
   } 
   return <span {...props.attributes} style={styles} >
                {props.children}
          </span>;
 };