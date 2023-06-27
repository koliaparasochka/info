import React from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

class Header extends React.Component {
    mobileMaxWidth = 700;
    isInited = false;

    constructor(props) {
        super(props);

        this.state = {
            isMobileMenuOpened: false,
            isLangDialogOpened: false,
            isMobileScreen: window.innerWidth < this.mobileMaxWidth,
            flag: this.getFlag()
        };

        this.setLanguage = this.setLanguage.bind(this);
    }

    componentDidMount() {
        if (!this.isInited) {
            window.addEventListener('resize', (event) => this.setState({ isMobileScreen: event.target.innerWidth < this.mobileMaxWidth }));
            this.isInited = true;
        }
    }
    
    render() {
        return (
            <header className="prevent-select">
               <div className="logo">Eden2012</div>
               <ul className={this.state.isMobileMenuOpened && this.state.isMobileScreen ? "nav-links nav-links-mobile" : "nav-links nav-links-laptop"}>
                   <li><a href="#home" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.homeLink}</a></li>
                   <li><a href="#services" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.servicesLink}</a></li>
                   <li><a href="#about" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.aboutLink}</a></li>
                   <li><a href="#contacts" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.contactsLink}</a></li>
                   <li>
                        <img className="select-lang-button" src={`https://flagcdn.com/${this.state.flag}.svg`} onClick={() =>  this.setState({ isLangDialogOpened: !this.state.isLangDialogOpened })} width="32" height="20"/> 
                       { 
                           this.state.isLangDialogOpened &&
                           <div className="lang-select">
                               <div className="lang-option" onClick={() => this.setLanguage('ua')}>
                                   <img src="https://flagcdn.com/ua.svg" width="32" height="20"/> 
                                   <div className="lang-label">Українська</div>
                               </div>
                               <div className="lang-option" onClick={() => this.setLanguage('en')}>
                                   <img src="https://flagcdn.com/gb-eng.svg" width="32" height="20"/> 
                                   <div className="lang-label">English</div>
                               </div>
                           </div>     
                       }
                   </li>
               </ul>
               <button className="mobile-menu-button" onClick={() => this.setState({ isMobileMenuOpened: !this.state.isMobileMenuOpened }) }>
                   {this.state.isMobileMenuOpened ? <ImCross /> : <FaBars/>}
               </button>
           </header>
       );
    }

    setLanguage(value) {
        this.props.setTranslate(value);

        this.setState({
            isLangDialogOpened: !this.state.isLangDialogOpened,
            flag: this.getFlag() 
        });
    }

    getFlag() {
        return localStorage.getItem('language') == 'en' ? 'gb-eng' : localStorage.getItem('language');
    }
}

export default Header;