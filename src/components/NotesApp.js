import React from "react";
import { getInitialData } from '../utils/index.js';
import NotesCard from "./NotesCard";
import NotesHeader from "./NotesHeader.js";

class NotesApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: getInitialData(),
            unfilteredLists: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onUndoArchivedHandler = this.onUndoArchivedHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                lists: [
                    ...prevState.lists,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date.now(),
                        archived: false,
                    }
                ],
                
                unfilteredLists: [
                    ...prevState.unfilteredLists,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date.now(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const lists = this.state.lists.filter(list => list.id !== id);
        this.setState({ lists });
    }
    
    onArchivedHandler(id) {
        const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
        const ArcivedNotes = (NotesArchive[0].archived = true);
        this.setState({ArcivedNotes});
    }

    onUndoArchivedHandler(id) {
        const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
        const ActiveNotes = (NotesArchive[0].archived = false);
        this.setState({ActiveNotes});

    }
    
    onSearchHandler(text) {
        if (text.length !== 0 && text.trim() !== '') {
            this.setState({
                lists: this.state.unfilteredLists.filter(lists => lists.title.toLowerCase().includes(text.toLowerCase())),
            })
        } else {
            this.setState({
                lists: this.state.unfilteredLists,
            })
        }
    }
    render () {
        return (
            <>
            <NotesHeader onSearch={this.onSearchHandler}/>
            <NotesCard addnote={this.onAddNoteHandler} lists={this.state.lists} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} onActive={this.onUndoArchivedHandler} />
            </>
        )
    }
}

export default NotesApps;