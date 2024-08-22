import React from "react";
import FadeInSection from "./FadeInSection";

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
                                        <video preload="none" className="video-file" controls>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-public-en.mp4' type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video preload="none" className="video-file" controls>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-ua.mp4' type="video/mp4" /> 
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
                                        <video preload="none" className="video-file" controls>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-en.mp4' type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video preload="none" className="video-file" controls>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-ua.mp4' type="video/mp4" /> 
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