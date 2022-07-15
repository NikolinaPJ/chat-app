import "./Icon.styles.scss";

import { ReactComponent as IconSend } from "../../assets/Vector.svg";

export function Icon(props) {
    switch (props.type){
        case 'send' : return <IconSend className="icon" />;
        default: return null;
    }

}