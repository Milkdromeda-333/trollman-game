import Logo from "../assets/troll.gif";
import AudioPlay from "../assets/audio.png";
import AudioMute from "../assets/mute-audio.png";
import { useState } from "react";

export default function Navbar() {

    const [isAudioOn, setIsAudioOn] = useState(true);
    const handleClick = () => {
        setIsAudioOn(prev => !prev);
    };

    return (
        <nav>
            <div>
                <img src={Logo} alt="logo" />
                TROLLMAN
            </div>

            {/* this may need to made more accessable */}
            <img src={isAudioOn ? AudioPlay : AudioMute} alt="audio setting" className="audio-icon" onClick={handleClick} />
        </nav>
    );
}