import styles from "../styles/shopApp.module.css";
import logo from "../images/droppe-logo.png";
import * as React from "react";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={['container', styles.headerImageWrapper].join(' ')}>
                <img src={logo} className={styles.headerImage}  alt={'header-logo'}/>
            </div>
        </div>
    )
}

export default Header;
