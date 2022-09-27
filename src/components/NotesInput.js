import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
    title: '',
    body: '',
    limit: 50,

    }


    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);

}


    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit)
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addnote(this.state);
    }



    render() {
        return (
            <div className="note-input">
                <form onSubmit={this.onSubmitChangeEventHandler}>
                    <h2>Buat catatan</h2>
                    <p className="note-input__title__char-limit">Sisa Karakter: {this.state.limit - this.state.title.length}</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <input className="note-input__body" type="text" placeholder="Tuliskan Catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;