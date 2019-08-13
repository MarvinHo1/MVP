import React from 'React'
import style from '../style.css';
import axios from 'axios';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      countryTraveled: '',
      notes: 'empty',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.renderView = this.renderView.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  getNotes() {
    const travelNotes = this.state.countryTraveled;
    axios.get('/travelNotes', {
      params: {
        ID: travelNotes,
      },
    })
      .then((journalNote) => {
        this.setState({
          notes: journalNote,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getNotes();
  }

  handleChange(event) {
    this.setState({ countryTraveled: event.target.value });
  }


  // eslint-disable-next-line class-methods-use-this
  deleteNote(event, noteID) {
    event.preventDefault();
    axios.delete('/deleteNote', {
      params: { _id: `${noteID}` },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.getNotes();
  }


  renderView() {
    if (this.state.notes === 'empty') {
      return 'Select A Country';
    }
    // eslint-disable-next-line no-underscore-dangle
    const note = this.state.notes.data.map((notes) => <li onClick={() => this.deleteNote(event, notes._id)} key={notes._id} > { notes.journalNotes }</li>);
    return note;
  }

  render() {
    return (
      <div className={style.split}>
        <form className={style.noteForm} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.countryTraveled} onChange={this.handleChange} placeholder="Country Visted" />
          <button type="submit" value="Submit">Search</button>
        </form>
        <ul>
          { this.renderView() }
        </ul>
      </div>

    );
  }
}

export default Notes;
