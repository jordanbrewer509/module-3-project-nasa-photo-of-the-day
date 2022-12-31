import React, { useState, useEffect } from "react";
import axios from "axios";

function Description() {
    const [ desc, getDesc ] = useState("");
    const api = "";
        useEffect(() => {
            axios.get(`https://api.nasa.gov/planetary/apod?${api}`)
            .then(res => {
                getDesc(res.data.explanation);                   
            })
            .catch(err => console.log(err));
        }, []);

    return desc;
    }

export default Description;
