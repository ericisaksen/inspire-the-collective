import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.scss';
import axios from 'axios';

class App extends Component {
  API_PATH = 'api/index.php';
  constructor(props){
    super(props);
    this.state = {
      email: '',
      mailSent: false,
      error: null
    }
  }
  submitForm = (event) => {
    console.log(this.state);
  event.preventDefault();
    axios({
      method: 'post',
      url: `${this.API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
        document.getElementById('formContainer').innerHTML = "<h2>We look forward to speaking with you.  Thank you for signing up!</h2>"
      })
      .catch(error => this.setState({ error: error.message }));
  }
  launchModal = () => {
    if(document.body.classList.contains('cta-active')){
      document.body.classList.remove('cta-active')
    } else {
      document.body.classList.add('cta-active')
    }
  }
  render(){
    return (
      <div className="page-container">
        <Helmet
          title="Inspire the Collective"
        />
        <img src="/images/itc-logo.png" alt="Inspire the Collective" />
        <div className="headline">
          <h1>Inspire The Collective</h1>
          <h2>A web based Tribe working together to Inspire Community Growth!</h2>
          <h3>Share your passion. Live your dream.</h3>
          <h4>Motivate others to Rise Up in our community!</h4>
          <p><a onClick={this.launchModal} className="button">Get Involved</a></p>
        </div>
        <div className="cta-container">
          <a className="close-cta" onClick={this.launchModal}>
            x
          </a>
          <div id="formContainer">
            <h2>Get Involved</h2>
            <p>To get involved and receive more information about or becoming part of our tribe, leave your preferred method of contact and we will reach out!</p>
            <form onSubmit={this.submitForm}>
              <p><input type="email" required placeholder="Enter your email address" 
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              /></p>
              <p><button className="button">Send</button></p>
            </form>
          </div>
        </div>
        <div onClick={this.launchModal} className="cta-cast"></div>
      </div>
    );
  }
}

export default App;
