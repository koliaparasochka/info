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

    componentDidMount() {
        this.lazyLoading();
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

    lazyLoading() {
        document.addEventListener("DOMContentLoaded", function() {
            var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
          
            if ("IntersectionObserver" in window) {
              var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(video) {
                  if (video.isIntersecting) {
                    for (var source in video.target.children) {
                      var videoSource = video.target.children[source];
                      if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                        videoSource.src = videoSource.dataset.src;
                      }
                    }
          
                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                  }
                });
              });
          
              lazyVideos.forEach(function(lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
              });
            }
          });
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
                                        <video className="lazy video-file" playsinline preload="none" controls poster='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-public-en.PNG'>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-public-en.mp4' type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video className="lazy video-file" playsinline preload="none" controls poster='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-public-ua.PNG'>
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
                                        <video className="lazy video-file" playsinline preload="none" controls poster='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-en.PNG'>
                                            <source src='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-en.mp4' type="video/mp4" /> 
                                        </video>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <video className="lazy video-file" playsinline preload="none" controls poster='https://nicksoft2020info.blob.core.windows.net/nicksoft2020info/Eden2012-management-ua.PNG'>
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