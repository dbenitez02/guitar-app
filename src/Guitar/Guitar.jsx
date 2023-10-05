import { useState } from "react"
import { GuitarBody } from "./components/GuitarBody";

export const Guitar = () => {

    const [currFrets, setCurrentFrets] = useState([0, 0, 0, 0, 0, 0]);

    return(
        <div className="guitar">
            <GuitarBody currFrets={currFrets} />
        </div>
    )
}

