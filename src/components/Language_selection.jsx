import "./Language_selection.css"
import style from "./Language_selection.module.css"


function LanguageSelect(goToDownload) {
    return (
        <>
            <div className={style.container}>
                <center><p className={style.heading}>Select the language</p>
                    <form action="index.html">
                        <div className={style.all_lang}>
                            <div className={style.all_lang_containers}>
                                <input type="radio" id="Odia" name="language" value="Odia" />
                                <label for="Odia">Odia</label>
                            </div>
                            <div className={style.all_lang_containers}>
                                <input type="radio" id="English" name="language" value="English" />
                                <label for="English">English</label>
                            </div>
                            <div className={style.all_lang_containers}>
                                <input type="radio" id="Hindi" name="language" value="Hindi" />
                                <label for="Hindi">Hindi</label>
                            </div>
                        </div>
                        <textarea id="txtArea" rows="5" cols="55" placeholder="Enter the text"></textarea>
                        <input type="file" id="custom-file-upload" />
                        <label for="custom-file-upload" className="chooseFiles">Choose Files</label>
                        <input type="submit" value="NEXT" onClick={goToDownload}/>
                    </form>
                </center>
                <div className={style.eclipse}></div>
            </div>
        </>
    )
}

export default LanguageSelect;