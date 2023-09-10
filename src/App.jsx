import React, { useState } from 'react';
import { EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import NoteWindow from './components/NoteWindow';

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

  return (
    <main>
      <NoteWindow />
    </main>
  );
};

export default App;
