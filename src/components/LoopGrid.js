import React, {useState} from 'react';
import Loop from "./Loop";
import './LoopGrid.css';
import FutureBeats from "../assets/120_future_funk_beats_25.mp3";
import Stutter from "../assets/120_stutter_breakbeats_16.mp3";
import BassWarwick from "../assets/bass_warwick.mp3";
import CountrySlide from "../assets/country_slide.mp3";
import StompySlosh from "../assets/FUD_120_StompySlosh.mp3";
import Tanggu from "../assets/GrooveB_120bpm_Tanggu.mp3";
import MazePolitics from "../assets/MazePolitics_120_Perc.mp3";
import PAS3Groove from "../assets/PAS3GROOVE1.03B.mp3";
import SilentStar from "../assets/SilentStar_120_Em_OrganSynth.mp3";

const LoopGrid = () => {

    const [future] = useState(new Audio(FutureBeats));
    const [stutter] = useState(new Audio(Stutter));
    const [bass] = useState(new Audio(BassWarwick));
    const [country] = useState(new Audio(CountrySlide));
    const [stompy] = useState(new Audio(StompySlosh));
    const [tanggu] = useState(new Audio(Tanggu));
    const [maze] = useState(new Audio(MazePolitics));
    const [groove] = useState(new Audio(PAS3Groove));
    const [star] = useState(new Audio(SilentStar));

    const Loops = [
        {
            title: 'Future Beats',
            audio: future,
        },
        {
            title: 'Stutter BreakBeats',
            audio: stutter,
        },
        {
            title: 'Bass Warwick',
            audio: bass,
        },
        {
            title: 'Country Slide',
            audio: country,
        },
        {
            title: 'Stompy Slosh',
            audio: stompy,
        },
        {
            title: 'Tanggu',
            audio: tanggu,
        },
        {
            title: 'Maze Politics',
            audio: maze,
        },
        {
            title: 'PAS3 Groove',
            audio: groove,
        },
        {
            title: 'Silent Star',
            audio: star,
        },
    ];

    const [isPlaying, setPlaying] = useState(null);

    const stopLoop = (loop) => {
        for(let i = 0; i < Loops.length; i++) {
            if(Loops[i].title === loop)
                Loops[i].audio.pause();
        }
    }

    const playLoop = (loop) => {
        for (let i = 0; i < Loops.length; i++)
            if (Loops[i].title === loop)
                Loops[i].audio.play();
    }

    const gridPlay = (loop) => {
        if(isPlaying === loop) {
            stopLoop(isPlaying);
            setPlaying(null);
        }
        else if(isPlaying != null) {
            stopLoop(isPlaying);
            setPlaying(loop);
            playLoop(loop);
        }
        else {
            setPlaying(loop);
            playLoop(loop);
        }
    }

    return (
        <grid className ="buttons">
            {Loops.map(loop =>
                <Loop
                    title={loop.title}
                    play={gridPlay}
                    isPlaying={loop.title === isPlaying}
                />
                    )}
        </grid>
    );
}

export default LoopGrid;