import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from '../utils/index.js';
import ActiveButton from "./ActiveButton";
import ArchiveButton from "./ArchiveButton";

const NotesItem = ({ lists, id, title, createdAt, body, onDelete, onArchive, onActive}) => {
    
    return (
        
             <div className="note-item">
                <NotesItemBody lists={lists} title={title} createdAt={showFormattedDate(createdAt)} body={body} />
                <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    lists.archived === false ?
                    <ArchiveButton id={id} onArchive={onArchive}/> :
                    <ActiveButton id={id} onActive={onActive} /> 
                    
                    
                }
                
                </div>
            </div>
        
    );
}

export default NotesItem;