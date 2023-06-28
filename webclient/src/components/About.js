import FadeInSection from "./FadeInSection";

function About(props) {
    const translate = props.content;

    return (
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
    )
}

export default About;