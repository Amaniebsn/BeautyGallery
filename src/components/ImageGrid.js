// ImageGrid.js
import React from 'react';

function ImageGrid({ images, handleImageClick, noImagesMessage }) {
  return (
    // Container for the image grid
    <div className="grid">
      {/* Check if there are any images available to display */}
      {images.length > 0 ? (
        // If there are images, display each one
        images.map((image, index) => (
          <img
            key={index}  // Each image should have a unique key
            src={image.urls ? image.urls.small : image.image}  // Handle Unsplash API and local images
            alt={`image-${index}`}  // Alt text for the image
            onClick={() => handleImageClick(image.urls ? image.urls.full : image.image)}  // When the image is clicked, open it in the lightbox
          />
        ))
      ) : (
        // If no images are available, display a message
        <p>{noImagesMessage}</p>
      )}
    </div>
  );
}

export default ImageGrid;
