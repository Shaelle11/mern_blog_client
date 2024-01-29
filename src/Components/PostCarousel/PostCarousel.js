import React, { useState } from "react";

export default function PostCarousel({current}){
    const [activeSlide, setActiveSlide] = useState(0);
    return(
        <div>
         {current}
        </div>
    )
}