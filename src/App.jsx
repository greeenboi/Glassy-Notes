import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import "./App.css"
import NoteWindow from './components/NoteWindow';
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code'
import Text from '@tiptap/extension-text'

import { Emoticons } from './components/Emoticons';

// Import the necessary Node.js modules
// const fs = require('fs');
// const path = require('path');

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Emoticons,
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
  return (
    <main className='window'>
      {/* <NoteMenuBar editor={editor} /> */}
      <NoteWindow  editor={editor}/>
      {/* <button >Save as JSON</button> */}
    </main>
  );
};

export default App;
