import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Web Developer", "Web Designer", "Technical Support"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/dejiCartoon.png" alt="Programmer Picture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Akindeji Lasisi</h1>
                    <h3>Freelance <span ref={textRef}/></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/22Down.png" alt="Arrow down" />
                </a>
            </div>
        </div>
    )
}
