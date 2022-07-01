import styles from "../styles/shopApp.module.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import * as React from "react";

const TopSection = () => {
    return (
        <section
            className={['container', styles.main].join(' ')}
            style={{margin: '50px inherit', display: 'flex', justifyContent: 'space-evenly'}}
        >
            <img src={img1} style={{maxHeight: "15em", display: 'block'}}  alt={'img1'}/>
            <img src={img2} style={{maxHeight: "15rem", display: 'block'}}  alt={'img2'}/>
        </section>
    )
}

export default TopSection;
