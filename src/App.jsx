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
import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';
import { AiOutlineUpload } from 'react-icons/ai';

// Import the necessary Node.js modules
// const fs = require('fs');
// const path = require('path');



const App = () => {
  // const saveJSONLocally = async () => {
  //   const suggestedFilename = "document.json";
  //   console.log('Started Process:');
  //   const jsonContent = editor.getJSON();
  //   console.log(editor.getJSON());
  //   try {

  //     const filePath = await save({
  //       defaultPath: suggestedFilename,
  //       filters: [{ name: "JSON Files", extensions: ["json"] }],
  //     });

  //     if (!filePath) {
  //       alert('No file path selected/User Cancelled Operation');
  //       return;
  //     }

  //     await writeFile({ path: filePath, contents: jsonContent, options: {} });

  //     alert("JSON content saved successfully!");
  //   } catch (error) {
  //     alert("Failed to save JSON content: " + error);
  //   }
  // }
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
    <h1><b>Welcome Fellow Enthusiast!</b></h1>
    <p>
      This is the <em>Beta</em> Release of <strong><I>Glassy Notes</I></strong>. 
      <br/>
      <br/>
      <h4>Refer to github.com/greeenboi for Documentation and discussions.</h4>
      <br/>
      <br/>
      <h4>Place your cursor anywhere within the boundary box to start typing...</h4>
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

  
  const OpenFile = async () => {
    try {
        let filepath = await open();
        let content = await readTextFile(filepath);
        
        editor.commands.setContent(content);
        alert('Opened content from file: ' + filepath);

    } catch (e) {
        console.log(e);
        alert('Error while opening file', e);
    }
};
  
  return (
    <main className='window'>
      
      <NoteWindow  editor={editor}/>
      <div className="character-count">
        {editor.storage.characterCount.characters()} characters 
      </div>
      <div className="character-count">
        {`${editor.storage.characterCount.words()} words`}
      </div>
      <button onClick={OpenFile}>{ <AiOutlineUpload /> }</button>
    </main>
  );
};

export default App;
