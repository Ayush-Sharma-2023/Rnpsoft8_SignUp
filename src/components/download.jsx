import style from "./download.module.css";
import kalingaVideo from "../images/kalinga_ai.mp4";


function download() {
  return (

    <>
    
      <div className={style.backgr}>
        <br />
        <br />
        <div className={style.Demo}>Download the video</div>
        <br />
        <div className={style.info}>
          
        Now you can also download the video in your own  <br />language. Hear out to the daily headlines in your <br /> own native language. 

          
        </div>
        <br />
        <br />

        <div className={style.video_container}>
          <video autoPlay loop muted controls className={style.video}>
            <source src={kalingaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>   
        </div>

        <button>Download Now</button>
        

        
      </div>
    </>
  );
}

export default download;
