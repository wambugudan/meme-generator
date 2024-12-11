import { useEffect, useState } from "react";

const DisplayApiData = function(){

    const [swData, setSwData] = useState(null)
    const [count, setCount] = useState(1)



    useEffect(() => {
   
    // Fetch Data from API
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setSwData(data))

        console.log("Side effect")
    },[count])


    console.log("renderred")

    const handleCount = function (){
        setCount(prevCount => prevCount + 1)
    } 

    return(
        <>
            <pre>{JSON.stringify(swData, null, 2)}</pre>
            <h1>Character: {count}</h1>
            <button onClick={handleCount}>Get Next Character</button>
        </>
    )
}

export default DisplayApiData;