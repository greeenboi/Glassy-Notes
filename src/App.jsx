import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import "./App.css"
import CharacterCount from '@tiptap/extension-character-count'
import NoteWindow from './components/NoteWindow';
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import { Emoticons } from './components/Emoticons';

// Import the necessary Node.js modules
// const fs = require('fs');
// const path = require('path');



const App = () => {

 
  const saveJSONLocally = async () => {
    const suggestedFilename = "document.json";
    console.log('Started Process:');
    const jsonContent = editor.getJSON();
    console.log(editor.getJSON());
    try {

      const filePath = await save({
        defaultPath: suggestedFilename,
        filters: [{ name: "JSON Files", extensions: ["json"] }],
      });

      if (!filePath) {
        console.log('No file path selected/User Cancelled Operation');
        return;
      }

      await writeFile({ path: filePath, contents: jsonContent, options: {} });

      alert("JSON content saved successfully!");
    } catch (error) {
      alert("Failed to save JSON content: " + error);
    }
  }
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Emoticons,
      CharacterCount,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
        <h1>Hi there,</h1>
        <p>
          this is a <em>basic</em> example of <strong><I>Glassy Notes</I></strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the rest.
          <br/>
          do <code> CTRL + A </code> and <code> DELETE</code> or <code>BACKSPACE</code> to start typing...
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            `,
  });
  if (!editor) {
    return null
  }
  return (
    <main className='window'>
      
      {/* <button onClick={saveJSONLocally}>Save as JSON</button> */}
      <NoteWindow  editor={editor}/>
      <div className="character-count">
        {editor.storage.characterCount.characters()} characters 
        {editor.storage.characterCount.words()} words
      </div>
    </main>
  );
};

export default App;
