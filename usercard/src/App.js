import React from 'react';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
import Card from './card';

const followersArray = [  
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'Hector-bit'
];

class App extends React.Component {
  state = {
    person: [],
    personText: ''
  };

  componentDidMount() {
    // useEffect
    followersArray.forEach(e => {
      axios
      .get(`https://api.github.com/users/${e}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          person: res.data
        });
      })
      .catch(err => console.log(err));
    })
    }

  render() {
    console.log(this.person);
    return (
      <div className='card'>
      <img src={this.state.person.avatar_url}/>
      <div className='card-info'>
          <h3 className='name'>Name: {this.state.person.name}</h3>
          <p className='username'>Username: {this.state.person.login}</p>
          <p>Location: {this.state.person.location}</p>
          <p>
              <a>{this.state.person.url}</a>
          </p>
          <p>Followers: {this.state.person.followers}</p>
          <p>Following: {this.state.person.following}</p>
          <p>Bio: {this.state.person.bio}</p>
      </div>
  </div>
    )
};
}

export default App;
