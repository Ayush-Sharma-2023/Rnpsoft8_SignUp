import style from "./SignUp.module.css";
import React from "react";
import logo from "../images/RNPLOGO.svg.png";
import google from "../images/google.png";
import apple from "../images/apple.png";
import facebook from "../images/facebook.png";


function Signup({ onContinueClick, showLanguageSelect, LanguageSelect }){

    return(
        <>
        <div className={style.container}>
            {/* <div className={style.logo}>
                <img src={logo} alt="NO TEXT " />
            </div> */}

            <div className={style.form}>
                <form action="">
                   
                    <fieldset>
                    <legend>Sign up</legend>
                    <div className={style.box}>

                        <input className={style.input} type="text" placeholder="Username, email & phone number"/>
                        <input className={style.input} type="password" placeholder="Password"/>
                        <input className={style.input} type="password" placeholder="Confirn Password"/>
                        <button className={style.button}onClick={onContinueClick}>Continue</button><br /><br />
                        <p className={style.signin}>Already have an account? <a href="">Sign in</a></p>
                    </div>
                    <br />
                    <br />


                    <div className={style.or}>
                        <div className={style.rect1}></div>
                        <p>Or Sign up With</p>
                        <div className={style.rect2}></div>

                    </div>
                    <div className={style.logos}>
                    <div className={style.logo1}></div>
                    <div className={style.logo2}></div>
                    <div className={style.logo3}></div>

                        
                    </div>




                    </fieldset>
                </form>
            </div>
            

        </div>
        {/* {showLanguageSelect && <LanguageSelect />} */}

        
        
        </>
    )
}

export default Signup