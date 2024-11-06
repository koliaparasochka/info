import React from "react";
import FadeInSection from "../components/FadeInSection";

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

    componentDidMount() {
        window.scrollTo(0, 0);
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
// - <a className="project-link" href="https://eden-2012.onrender.com/" target="_blank">{this.translate.link}</a>.
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
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/H5iFAlNlYL0?si=jhez1jkJMTYfbrNU" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/9xMh28EJlz0?si=q3iR--OXkPzSlLqj" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.eden2012WebsiteBusinessCardDescription}</p>
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
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/U5umz6aDpPI?si=muxYylurSIm7nluC" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/om3HByi2KPo?si=kb9-Tngurk5BE9ra" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.eden2012ManagementDescription}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className='project-block'>
                        <FadeInSection>
                            <div className='project-title'>
                                {this.translate.justMusic}
                            </div>
                            <div className="project-content">
                                <div className='project-video'>
                                    { 
                                        this.state.language === 'en' && 
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/DYemWhmI0CU?si=Mvdsq-rYzxbdSZGT" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <iframe className="video-file" 
                                            src="https://www.youtube.com/embed/wSMWlNoiCkQ?si=HN3bGO5-RLSSqUvO" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.justMusicDescription} <a className="project-link" href="https://play.google.com/store/apps/details?id=com.anonymous.JustMusic&pli=1" target="_blank">Google play market</a>.</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        )
    }
}