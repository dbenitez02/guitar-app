import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';


export const GuitarBody = (props) => {

    const [strumDir, setStrumDir] = useState('down');

    function updateStrumDir(e) {
        setStrumDir(() => e.target.value === 'down' ? 'up': 'down')
    }

    return(
        <div className="guitar-body-container">
            <div className="guitar-body">
                <label
                    className="strum-dir-btn"
                    htmlFor="strum-dir">
                    {strumDir === 'down' ? <FaArrowDown /> : <FaArrowUp />}
                    <input
                        id="strum-dir"
                        type="checkbox"
                        name="strum-dir"
                        value={strumDir}
                        onChange={updateStrumDir}
                    />
                </label>
                <div className="body-strings">
                    <div className="body-string" id="body-string-5"></div>
                    <div className="body-string" id="body-string-4"></div>
                    <div className="body-string" id="body-string-3"></div>
                    <div className="body-string" id="body-string-2"></div>
                    <div className="body-string" id="body-string-1"></div>
                    <div className="body-string" id="body-string-0"></div>
                </div>
            </div>
        </div>
    );
}