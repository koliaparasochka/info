import '../images/home-image.jpg'

function Home(props) {
    return (
        <div id="home" className='presentation fade-text'>
            <div className='presentation-text'>{props.content.presentationText}</div>
        </div>
    );
}

export default Home;