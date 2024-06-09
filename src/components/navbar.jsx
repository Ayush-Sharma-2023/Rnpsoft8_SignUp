import style from "./navbar.module.css"
import React, { useRef } from 'react';
import "./navbar.css"
function Navbar() {

    return (<>
        <div className={style.navbar}>
            <div className={style.rnp_logo}></div>
            <div className={style.contact_info}>
                <div className={`${style.contact_info_content} home`}><p>Home</p></div>
            </div>
            <div className={style.profile}>
                <div className={style.profile_img}></div>
                <button className={style.user_details}></button>
            </div>

        </div>
    </>)
}

export default Navbar;