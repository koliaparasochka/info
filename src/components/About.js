import FadeInSection from "./FadeInSection";

function About(props) {
    const translate = props.content;

    return (
        <div>
            <div id="about" className="about-section">
                <FadeInSection>
                    <div className="about-title">{translate.aboutTitle}</div>
                    <p className="about-description fade-text">
                        {translate.about1}      
                    </p>
                    <p className="about-description fade-text">
                        {translate.about2}
                    </p>
                    <p className="about-description fade-text">
                        {translate.about3}
                    </p>
                    <p className="about-description fade-text">
                        {translate.about4}
                    </p>
                </FadeInSection>
            </div>
            <div id="about" className="about-section-ceo">
                <FadeInSection direction="fade-bottom">
                    <p className="about-description fade-text">
                        {translate.aboutCEO}      
                    </p>
                </FadeInSection>
            </div>
        </div>
    )
}

export default About;