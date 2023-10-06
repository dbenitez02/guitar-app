import { useState } from "react"
import { GuitarBody } from "./components/GuitarBody";
import { Fretboard } from "../Fretboard/Fretboard";

export const Guitar = () => {

    const [currFrets, setCurrentFrets] = useState([0, 0, 0, 0, 0, 0]);

    return(
        <div className="guitar">
            <GuitarBody currFrets={currFrets} />
            <Fretboard />
        </div>
    )
}

