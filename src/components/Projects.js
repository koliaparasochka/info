import React from "react";
import FadeInSection from "./FadeInSection";
//import Eden_2012_management_en from '../assets/videos/en/Eden_2012_management_en.mp4';
//import Eden_2012_management_ua from '../assets/videos/en/Eden_2012_management_ua.mp4';
//import Eden_2012_public_en from '../assets/videos/en/Eden_2012_public_en.mp4';
//import Eden_2012_public_ua from '../assets/videos/en/Eden_2012_public_ua.mp4';

export default class Projects extends React.Component {
    language;
    translate;

    constructor(props) {
        super(props);
        
        this.state = {
            language: localStorage.getItem('language')
        }

        this.translate = this.props.content;
        this.checkTranslate = this.checkTranslate.bind(this);
    }

    componentDidUpdate() {
        this.checkTranslate();
    }

    checkTranslate() {
        const isTranslateUpdated = this.translate && this.translate !== this.props.content;

        if (isTranslateUpdated || this.language === null) {
            this.translate = this.props.content;

            this.setState({
                language: localStorage.getItem('language')
            });
        }
    }

    render() {
        return (
            <div>
                <div className="projects-title">{this.translate.projectsLink}</div>
                <div className='projects-list'>
                    <div className='project-block'>
                        <FadeInSection>
                            <div className='project-title'>
                                {this.translate.eden2012WebsiteBusinessCard}
                            </div>
                            <div className="project-content">
                                <div className='project-video'>
                                    { 
                                        this.state.language === 'en' && 
                                        <video className="video-file" controls>
                                            <source src={require('../assets/videos/en/Eden_2012_public_en.mp4')} type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video className="video-file" controls>
                                            <source src={require('../assets/videos/ua/Eden_2012_public_ua.mp4')} type="video/mp4" /> 
                                        </video>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.eden2012WebsiteBusinessCardDescription} - <a className="project-link" href="https://eden-2012.onrender.com/" target="_blank">{this.translate.link}</a>.</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className='project-block'>
                        <FadeInSection>
                            <div className='project-title'>
                                {this.translate.eden2012Management}
                            </div>
                            <div className="project-content">
                                <div className='project-video'>
                                    { 
                                        this.state.language === 'en' && 
                                        <video className="video-file" controls>
                                            <source src={require('../assets/videos/en/Eden_2012_management_en.mp4')} type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video className="video-file" controls>
                                            <source src={require('../assets/videos/ua/Eden_2012_management_ua.mp4')} type="video/mp4" /> 
                                        </video>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.eden2012ManagementDescription}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        )
    }
}