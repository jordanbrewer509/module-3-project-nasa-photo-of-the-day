import axios from "axios";
import React, { useState, useEffect } from "react";

function Photo() {

    const [photos, getPhotos] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?", {
            params: {
                api_key: "DEMO_KEY",
            },
        })
        .then(res => {
            getPhotos(res.data.hdurl);
        })
        .catch(err => console.log(err))
    }, []);

    return photos;
}

export default Photo;