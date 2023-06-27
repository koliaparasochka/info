import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Translate from './translations/translate.json';

class App extends React.Component {
  constructor(props) {
    super(props);
      if (localStorage.getItem('language') == null) {
        localStorage.setItem('language', 'ua');
      }

    this.state = {
      content: Translate[localStorage.getItem('language')]
    };

    this.setTranslate = this.setTranslate.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header content={this.state.content} setTranslate={this.setTranslate}/>
        <div className='wrapper'>
          <Home content={this.state.content} />
          <Services content={this.state.content} />
        </div>
      </div>
    ); 
  }

  setTranslate(value) {
    this.setState({
      content: Translate[value]
    });

    localStorage.setItem('language', value);
  }
}

export default App;
