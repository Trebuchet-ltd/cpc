import "./Alertbox.css";
import {toast} from 'react-toastify';

/*Importing requires icons from assets */
import infoIcon from "../../assets/svg/info-icon.svg";
import errorIcon from "../../assets/svg/error-icon.svg";
import successIcon from "../../assets/svg/success-icon.svg";


export const alertbox = ({text, type="info"} = {}) => {
    toast(<Alertbox type={type} text={text} />);
}

const Alertbox = ({type, text}) => {
    let icon = null;
    let color = null;

    switch(type) {
        case "info": 
            icon = infoIcon;
            color = "color-info";
            break;

        case "error":
            icon = errorIcon;
            color = "color-error";
            break;

        case "success":
            icon = successIcon;
            color = "color-success";
            break;

        default:
            icon = infoIcon;

    }

    return(
        <>
            <div className="alertbox">
                <figure className={color}>
                    <img src={icon} alt="icon" />
                </figure>
                <p>{text}</p>

            </div>
        </>
    );
}

export default Alertbox;
