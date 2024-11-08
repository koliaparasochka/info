import { useNavigate } from 'react-router-dom';
import React from "react";

class FourOhFourPage extends React.Component {
    translate;

    constructor(props) {
        super(props);

        this.translate = this.props.content;
    }

    componentDidUpdate() {
        this.checkTranslate();
    }

    render() {
        return (
            <div className="page-four-of-four-content">
                <div className="page-four-of-four-content-section">
                    <div className="label">404</div>
                    <div className="text">
                        {this.translate.error404}
                    </div>
                    <div className='four-of-four-footer-block'>
                        <button className="back-button" onClick={() => this.props.navigate(-1)}>{this.translate.backBtn}</button>
                    </div>
                </div>
            </div>
        )
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
}

export default function FourOhFour(props) {
    const navigate = useNavigate();

    return <FourOhFourPage content={props.content} navigate={navigate} />
}