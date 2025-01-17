import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FourOhFour from './pages/FourOhFour';
import Contacts from './pages/Contacts';
import Translate from './translations/translate.json';
import Projects from './pages/Projects';

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
//<Route path="/contacts" element={<Contacts content={this.state.content} />} />
  render() {
    return (
      <div className="App">
        <Header content={this.state.content} setTranslate={this.setTranslate}/>
        <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Home content={this.state.content} />}/>
            <Route path="/about" element={<About content={this.state.content} />}/>
            <Route exact path='*' element={<FourOhFour content={this.state.content}/>}></Route>
            <Route path="/projects" element={<Projects content={this.state.content} />} />
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
