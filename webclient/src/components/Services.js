import { FaTruckMoving, FaTractor } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import FadeInSection from './FadeInSection';

function Services(props) {
    const translate = props.content;

    return (
        <div id="services" className="services-section">
            <div className="services-title">
                {translate.servicesTitle}
            </div>
            <div className='services-list'>
                <div className='service-block'>
                    <FadeInSection direction="fade-right">
                        <FaTractor className='service-icon'/>
                        <div className='service-label'>
                            {translate.landCultivationTitle}
                        </div>
                        <hr className='horizontal-line'/>
                        <div className='service-description'>
                            {translate.landCultivationDescription}
                        </div>
                    </FadeInSection>
                </div>
                <div className='service-block'>
                    <FadeInSection direction="fade-right">
                        <GiWheat className='service-icon'/>
                        <div className='service-label'>
                            {translate.agriculturalProductionTitle}
                        </div>
                        <hr className='horizontal-line'/>
                        <div className='service-description'>
                            {translate.agriculturalProductionDescription}
                        </div>
                    </FadeInSection>
                </div>
                <div className='service-block'>
                    <FadeInSection direction="fade-right">
                        <FaTruckMoving className='service-icon'/>
                        <div className='service-label'>
                            {translate.freightTitle}
                        </div>
                        <hr className='horizontal-line'/>
                        <div className='service-description'>
                            {translate.freightDescription}
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
}

export default Services;