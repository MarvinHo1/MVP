import React from 'React'
import axios from 'axios';
import style from '../style.css';


class Form extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      journalNote: '',
      country: '',
      destination: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNotes = this.postNotes.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.journalNote === '' || this.state.country === '' || this.state.destination === '') {
      // eslint-disable-next-line no-alert
      return alert('please fill out text box Country, Destination, and Journal Notes');
    }
    this.postNotes();
    this.props.photo();
  }

  postNotes() {
    const journalNotes = this.state;
    axios.put('/journalInformation', { journalNotes })
    // eslint-disable-next-line func-names
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={style.containerForNotes}>
        <form onSubmit={this.handleSubmit}>
          <input className={style.inputCountry} name="country" value={this.state.country} onChange={this.handleChange} placeholder="country" />
          <input className={style.inputDestination} name="destination" value={this.state.destination} onChange={this.handleChange} placeholder="Destination" />
          <label className={style.label}>
            Journal Notes
            <textarea type="text" className={style.inputJournal} name="journalNote" value={this.state.journalNote} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
