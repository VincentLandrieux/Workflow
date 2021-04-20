import React, { useEffect, useState } from "react";
import {render} from "react-dom";


function App(){
    const [title, setTitle] = useState("Workflow");

    useEffect(function(){
        console.log("Hello World");
    }, []);

    ////
    //
    console.log("render");
    //
    ////
    return <>
        <h1>{title}</h1>
    </>
}


render(<App/>, document.getElementById('app'));