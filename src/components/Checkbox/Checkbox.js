import "./Checkbox.css";
import {useRef, useState} from "react";
import CheckedIcon from "../../assets/svg/checked.svg";

const Checkbox = ({id, handleClick, isChecked}) => {

    return (
        <>
            <label id="checkmark">
                <input onChange={handleClick} id={id} type="checkbox" className="item-hidden" checked={isChecked}/>
                <span className="checkbox-label ">
                    <img src={CheckedIcon} alt="" className="checked-icon" style={{pointerEvents: "none"}}/>
                </span>
            </label>
        </>

    );
}

export default Checkbox;
