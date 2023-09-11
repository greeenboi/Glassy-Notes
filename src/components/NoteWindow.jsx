import './styles.scss'
import { FaListOl, FaListUl } from 'react-icons/fa'
import { RiSeparator } from 'react-icons/ri';
import { AiOutlineItalic, AiOutlineBold, AiOutlineStrikethrough } from 'react-icons/ai';
import { 
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor, } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
// import NoteMenuBar from './NoteMenuBar'




export default ({ editor }) => {
    
  return (
    <>
    {/* <NoteMenuBar /> */}
      {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <AiOutlineBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <AiOutlineItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <AiOutlineStrikethrough/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
          className={editor.isActive('heading', { level: 1 })}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
      </BubbleMenu>}

      {editor && <div className='menu-float'><FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>        
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={() => editor.isActive('orderedList')}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <RiSeparator />
        </button>
      </FloatingMenu></div>}

      <EditorContent editor={editor} />
    </>
  )
}