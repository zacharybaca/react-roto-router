/* eslint-disable react/prop-types */
import "./main.css";

export default function Main(props) {
    return (
        <div id="main-container">
            {props.children}
        </div>
    )
}