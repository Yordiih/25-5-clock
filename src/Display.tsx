import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import { DisplayState } from "./helpers";

interface DisplayProps {
    displayState: DisplayState;
    reset: () => void;
    startStop: (displayState: DisplayState) => void;
}

const Display: React.FC<DisplayProps> = ({
    displayState,
    reset,
    startStop,

}) => {
return (
    <div className="display">
        <h4 id="timer-label">{displayState.timeType}</h4>
        <span id="time-left" style={{ color: `${displayState.timeRunning ? "red" : "white"}`}}
        >
            {formatTime(displayState.time)}
        </span>
    
    <div>
        <button id="start_stop" onClick={() => startStop(displayState)}>
            {displayState.timeRunning ? <FaPause /> : <FaPlay /> }
        </button>

        <button id="reset" onClick={reset}>
            <FaUndo />
        </button>
    </div>
    </div>
    
);

};

function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default Display