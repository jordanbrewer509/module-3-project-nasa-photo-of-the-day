import React, { useState, useEffect } from "react";
import axios from "axios";

function Description() {
    const [ desc, getDesc ] = useState("");
        useEffect(() => {
            axios.get("https://api.nasa.gov/planetary/apod?", {
                params: {
                    api_key: "DEMO_KEY",
                },
            })
            .then(res => {
                console.log(res.data); 
                getDesc(res.data.explanation);                   
            })
            .catch(err => console.log(err));
        }, []);

    return desc;
    }

export default Description;
