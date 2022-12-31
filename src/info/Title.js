import React, { useState, useEffect } from "react";
import axios from "axios";

function Title() {

    const [title, getTitle] = useState("");
    const api = "";
        useEffect(() => {
            axios.get(`https://api.nasa.gov/planetary/apod?${api}`)
            .then(res => {
            getTitle(res.data.title);
            })
            .catch(err => console.log(err))
}, []);

return title;
}

export default Title;