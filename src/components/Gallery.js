import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
    return (
        <div id="gallery" className="testimonials">
            <h1>GALLERY</h1>
            <div className="container">
             <div className="testimonials-content">

             <GalleryCarousel />
             </div>
                
            </div>
        </div>
    )
}

export default Gallery;
