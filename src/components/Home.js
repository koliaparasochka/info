import '../images/home-image.jpg'
import { PiCodeFill } from 'react-icons/pi';
import { BsServer } from 'react-icons/bs';
import { BiSolidServer } from 'react-icons/bi';
import FadeInSection from './FadeInSection';

function Home(props) {
    const translate = props.content;

    return (
        <div>
            <div id="home" className='presentation fade-text'>
                <div className='presentation-text'>{props.content.presentationText}</div>
            </div>

            <div id="services" className="services-section">
                <div className="services-title">
                    {translate.servicesTitle}
                </div>
                <div className='services-list'>
                    <div className='service-block'>
                        <FadeInSection direction="fade-right">
                            <div className='service-header'>
                                <PiCodeFill className='service-icon' /> 
                                <div>{translate.frontEndServiceTitle}</div>
                            </div>
                            <div className='service-description'>
                                <p>{translate.frontEndServiceInfo1}</p>
                                <p>{translate.frontEndServiceInfo2}</p>
                                <p>{translate.frontEndServiceInfo3}</p>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className='service-block'>
                        <FadeInSection direction="fade-left">
                            <div className='service-header'>
                                <BiSolidServer className='service-icon' /> 
                                <div>{translate.backEndServiceTitle}</div>
                            </div>
                            <div className='service-description'>
                                <p>{translate.backEndServiceInfo1}</p>
                                <p>{translate.backEndServiceInfo2}</p>
                                <p>{translate.backEndServiceInfo3}</p>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className='service-block'>
                        <FadeInSection direction="fade-right">
                            <div className='service-header'>
                                <BsServer className='service-icon' /> 
                                <div>{translate.databaseServiceTitle}</div>
                            </div>
                            <div className='service-description'>
                                <p>{translate.databaseServiceInfo1}</p>
                                <p>{translate.databaseServiceInfo2}</p>
                                <p>{translate.databaseServiceInfo3}</p>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;