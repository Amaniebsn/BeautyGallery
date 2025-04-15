// Lightbox.js
import React from 'react';

function Lightbox({ currentImage, closeLightbox }) {
  return (
    // Lightbox container - this div acts as the overlay
    <div className="lightbox" onClick={closeLightbox}>
      {/* Lightbox content - this div contains the image and close button */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* The image displayed in the lightbox */}
        <img src={currentImage} alt="lightbox" />
        
        {/* Close button to exit the lightbox */}
        <button className="close-button" onClick={closeLightbox}>X</button>
      </div>
    </div>
  );
}

export default Lightbox;
