import React from "react";
import NoteItemList from "./NotesItemList";
import NotesInput from "./NotesInput";


function NotesCard ({addnote, lists, onDelete, onArchive, onActive, changeButton}) {
    const activeNotes = lists.filter((lists) => lists.archived === false);
    const archiveNotes = lists.filter((lists) => lists.archived === true);


    return (
                <div className='note-app__body'>
                <NotesInput addnote={addnote} />
                <h2>Catatan Aktif</h2>
                <NoteItemList lists={activeNotes} onDelete={onDelete} onArchive={onArchive} />
                <h2>Arsip </h2>
                <NoteItemList lists={archiveNotes} onDelete={onDelete} onActive={onActive}  />
                </div>
    );
        
}

export default NotesCard;
