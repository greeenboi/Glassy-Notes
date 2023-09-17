import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import "./App.css"
import NoteWindow from './components/NoteWindow';
import NoteMenuBar from './components/NoteMenuBar';

// Import the necessary Node.js modules
// const fs = require('fs');
// const path = require('path');

const App = () => {
  // const [editor, setEditor] = useState(null);
  // const [note, setNote] = useState('');

  // const saveAsHtml = () => {
  //   if (editor) {
  //     const html = editor.getHTML();
  //     // Save the HTML content to a file
  //     saveToFile(html);
  //   }
  // };

  // // Function to save HTML content to a file
  // const saveToFile = (htmlContent) => {
  //   const fileName = 'note.html'; // Specify the file name
  //   const filePath = path.join(__dirname, fileName); // Build the file path

  //   // Write the HTML content to the file
  //   fs.writeFile(filePath, htmlContent, (err) => {
  //     if (err) {
  //       console.error('Error saving file:', err);
  //     } else {
  //       console.log('File saved successfully!');
  //     }
  //   });
  // };

  
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
        <h1>Hi there,</h1>
        <p>
          this is a <em>basic</em> example of <strong><I>Glassy Notes</I></strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the rest.
          <br/>
          do <code> CTRL + A </code> and <code> DELETE</code> or <code>BACKSPACE</code> to start typing...
        </p>
        
        
            `,
  })

  return (
    <main className='window'>
      {/* <NoteMenuBar editor={editor} /> */}
      <NoteWindow editor={editor} />
    </main>
  );
};

export default App;
