import style from "./login.module.css";
import React from "react";
import logo from "../images/RNPLOGO.svg.png";
import google from "../images/google.png";
import apple from "../images/apple.png";
import facebook from "../images/facebook.png";


function Login({ onContinueClick, showLanguageSelect, LanguageSelect }){

    return(
        <>
        {/* <div className={style.container}> */}
           

            <div className={style.form}>
                <form action="">
                   
                    <fieldset>
                    <legend>Welcome back</legend>
                    <div className={style.box}>

                        <input className={style.input} type="text" placeholder="Username, email & phone number"/>
                        <input className={style.input} type="password" placeholder="Password"/>
                        
                        {/* reCapta to be added here */}
                        <button className={style.button}onClick={onContinueClick}>Continue</button><br />
                        <p className={style.signin}>Don't have an account? <a href="">Sign up</a></p>
                    </div>
                    <br />

                    <div className={style.or}>
                        <div className={style.rect1}></div>
                        <p>Or log in With</p>
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
            

        {/* </div> */}
        {/* {showLanguageSelect && <LanguageSelect />} */}

        
        
        </>
    )
}

export default Login