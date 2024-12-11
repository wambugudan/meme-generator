import { useEffect, useState } from "react"
// import DisplayApiData from "./exercise/DisplayApiData"
// import WinndowWith from "./exercise/WinndowWidth"


export default function Main(){

    // create object of items to be displayed
    const obj = {
        top_text: "Yaliyo ndwele",
        bottom_text: "Si pite",
        imgUrl: "meme1.jpg",
    }

    // initializing state variables
    const [memeItem, setMemeItem] = useState(obj)

    const [allMemes, setAllMemes] = useState([])
 

    // Fetching memes from api using useEffect
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    // function to update top text on the image
    const handleChange = function(event){
        const {value} = event.currentTarget
        setMemeItem(prevState => ({
            ...prevState,
            top_text: value,
        }))
    }


    // function to update bottom text on the image
    const handleChangeBottom = function(event){
        const {value} = event.currentTarget
        setMemeItem(prevState => ({
            ...prevState,
            bottom_text: value,
        }))
    }


    // Get Random Image function 
    const getRandomImage = function(){

        // Generate random image 
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomImage = allMemes[randomIndex].url


        // update state with the random image
        setMemeItem(prevState => ({
            ...prevState,
            imgUrl: randomImage 
        }))
        
    }

    return(
        <div className="meme-body-container">
            <form action="">
                <div className="inputs">
                    <label htmlFor="top-text">Top Text</label>
                    <input type="text" value={memeItem.top_text} placeholder="Yaliyo ndwele" id ="top-text" name="top-text" onChange={handleChange} />
                </div>

                <div className="inputs">
                    <label htmlFor="bottom-text">Botton Text</label>
                    <input type="text" value={memeItem.bottom_text} onChange={handleChangeBottom} placeholder="Si pite" id="bottom-text" name="bottom-text" />
                </div>
            </form>

            <div className="btn">
                <button onClick={getRandomImage}>Get New Meme Image</button>
            </div>

            <div className="meme-image-container">
                <img src={memeItem.imgUrl} alt="" />
                <span className="top-text">{memeItem.top_text}</span>
                <span className="bottom-text">{memeItem.bottom_text}</span>
            </div>

            {/* Display Execise component */}

            {/* <DisplayApiData /> */}
            {/* <WinndowWith /> */}

        </div>
    )
}