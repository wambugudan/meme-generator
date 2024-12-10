import { useState } from "react"
import DisplayApiData from "./exercise/DisplayApiData"


export default function Main(){

    const obj = {
        top_text: "",
        bottom_text: "Si pite",
        imgUrl: "meme1.jpg",
    }

    const [memeItem, setMemeItem] = useState(obj)

    const handleChange = function(event){
        const {value} = event.currentTarget
        setMemeItem(prevState => ({
            ...prevState,
            top_text: value,
        }))
    }

    const handleChangeBottom = function(event){
        const {value} = event.currentTarget
        setMemeItem(prevState => ({
            ...prevState,
            bottom_text: value,
        }))
    }

    return(
        <div className="meme-body-container">
            <form action="">
                <div className="inputs">
                    <label htmlFor="top-text">Top Text</label>
                    <input type="text" value={memeItem.top_text} placeholder="Yaliyo ndwele" name="top-text" onChange={handleChange} />
                </div>

                <div className="inputs">
                    <label htmlFor="bottom-text">Botton Text</label>
                    <input type="text" value={memeItem.bottom_text} onChange={handleChangeBottom} placeholder="Si pite" name="bottom-text" />
                </div>
            </form>

            <div className="btn">
                <button>Get New Meme Image</button>
            </div>

            <div className="meme-image-container">
                <img src={memeItem.imgUrl} alt="" />
                <span className="top-text">{memeItem.top_text}</span>
                <span className="bottom-text">{memeItem.bottom_text}</span>
            </div>

            {/* Display Execise component */}

            <DisplayApiData />

        </div>
    )
}