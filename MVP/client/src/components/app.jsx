import React from 'react';
import axios from 'axios';
import style from '../style.css';
import Picture from './picture.jsx';
import Form from './form.jsx';
import Notes from './notes.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      pictures: [],
    };
    this.photo = this.photo.bind(this);
  }

  componentDidMount() {
    this.photo();
  }

  photo() {
    axios.get('/journalNotesAndPhotos')
      .then((photos) => {
        this.setState({ pictures: photos.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className={style.titleheaders}>Travel Plans</h1>
        <Picture pictures={this.state.pictures} />
        <Notes />
        <Form photo={this.photo} />
      </div>
    );
  }
}


export default App;
