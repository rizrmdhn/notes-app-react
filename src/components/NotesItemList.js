import React from "react";
import NotesItem from "./NotesItems";

function NoteItemList({ lists, onDelete, onArchive, onActive}) {
    
    return (
            <>
                { lists.length !== 0 ?
                    <div className="notes-list">
                    {
                        lists.map((list) => (
                            <NotesItem 
                            key={list.id}
                            id={list.id}
                            lists={list}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            onActive={onActive}
                            {...list} />
                        ))
                    }
                </div  > :
                <p className="notes-list__empty-message">Tidak ada catatan.</p>
                }
            </>   
  
    );
}

export default NoteItemList;