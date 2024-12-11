import { useEffect, useState } from "react"

export default function WinndowWith(){

    const [show, setShow] = useState(true)

    const [windwoWidth, setWindowWidth] = useState(window.innerWidth)


    const toggle = function (){
        setShow(prevState => !prevState)
    }

    useEffect(() => {
        const watchWindowWidth = function(){
            console.log("resized")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWindowWidth)
            
        return function() {
            console.log(" Cleaning up ...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    },[])

    return(
        <>
            <h1>window size</h1>
            <button onClick={toggle}>Show Component</button>
            {show && <h3>The width is: {windwoWidth}</h3>}
        </>
    )
}