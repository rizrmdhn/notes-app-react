import React from "react";

const NotesHeader = ({ onSearch }) => {
    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    } 

    return (
        <>
            <div className="note-app__header">
                <h1>Notes</h1>
                    <div className="note-search">
                        <input type="text" placeholder="Cari catatan ...." onChange={onSearchbarChange}/>
                    </div>
            </div>
        </>
    );
}

export default NotesHeader;

