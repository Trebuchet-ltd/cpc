import "./Checkbox.css";
import {useRef, useEffect} from "react";
import CheckedIcon from "../../assets/svg/checked.svg";

const Checkbox = ({id, handleClick, isChecked}) => {
    
    const checkboxRef = useRef(null);

    useEffect(() => {

    })


    return (
        <>
            <label id="checkmark" className="pointer" htmlFor={id}>
                <input onChange={handleClick} id={id} name={id} type="checkbox" className="item-hidden" checked={isChecked} ref={checkboxRef}/>
                <span className="checkbox-label ">
                    <img src={CheckedIcon} alt="" className="checked-icon" style={{pointerEvents: "none"}}/>
                </span>
            </label>
        </>

    );
}

export default Checkbox;
