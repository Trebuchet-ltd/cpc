import "./Checkbox.css";
import {useState} from "react";
import CheckedIcon from "../../assets/svg/checked.svg";

const Checkbox = ({check}) => {
    const [checkedd, setChecked] = useState(true);

    // function changeState() {
    //     setChecked((check) => !check);
    // }

    return (
        <>
            <label id="checkmark" for="checkbox" onClick={() => setChecked(false)}>
                <input onClick={(e) => check(e)}  id="checkbox" type="checkbox" className="item-hidden"/>
                <span className="checkbox-label">
                    <img src={(checkedd) ? CheckedIcon : " "} alt="" className="checked-icon"/>
                </span>
            </label>
        </>

    );
}

export default Checkbox;
