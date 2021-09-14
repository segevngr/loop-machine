import './Loop.css';
import pause from '../assets/pause.png';
import play from '../assets/play.png';

function Loop(props) {

    const playSong = () => {
        props.play(props.title);
    };

    return (
        <div className='button'>
            <div className='button__song'>{props.title}</div>
            <img className='button__play' src={!props.isPlaying? play : pause} onClick={playSong}/>
        </div>
    );
}

export default Loop;