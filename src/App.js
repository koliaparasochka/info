import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
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
          <Routes>
            <Route path="/" element={<Home content={this.state.content} />}/>
            <Route path="/about" element={<About content={this.state.content} />}/>
            <Route path="/contacts" element={<Contacts content={this.state.content} />} />
            <Route path="*" element={<Home content={this.state.content} />}/>
          </Routes>
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
