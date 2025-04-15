import './App.css';
import { useState, useEffect } from 'react';
/*import ProductCard from './ProductCard';  // Import the ProductCard component*/ //test
import SearchBar from './components/SearchBar';  // Import the SearchBar component
import ImageGrid from './components/ImageGrid';  // Import the ImageGrid component
import Lightbox from './components/Lightbox';  // Import the Lightbox component

function App() {
  // State hooks for various functionalities in the app
  const [searchTerm, setSearchTerm] = useState('');  // State to store the search term
  const [imagesFromAPI, setImagesFromAPI] = useState([]);  // State to store fetched images from the API
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);  // State to control the lightbox visibility
  const [currentImage, setCurrentImage] = useState(null);  // State to store the current image being viewed in the lightbox
  const [isDarkMode, setIsDarkMode] = useState(false);  // State to toggle between dark and light mode

  // List of allowed keywords for searching
  const allowedKeywords = ["skincare", "makeup", "beauty", "skin"];

  // Function to handle changes in the search input field
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Function to handle the click event on an image (opens the lightbox)
  const handleImageClick = (image) => {
    setCurrentImage(image);  // Set the clicked image as the current image
    setIsLightboxOpen(true);  // Open the lightbox
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);  // Close the lightbox
    setCurrentImage(null);  // Reset the current image
  };

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);  // Switch between dark and light mode
  };

  // useEffect hook to fetch images when the search term changes
  useEffect(() => {
    // Only fetch images if the search term is valid and matches the allowed keywords
    if (searchTerm && allowedKeywords.includes(searchTerm.toLowerCase())) {
      fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=SVs3gJKBJJ3eNNaaWcnX2oM6tYUsHgJLO9sSf8d1rbs`)
        .then(res => res.json())
        .then(data => setImagesFromAPI(data.results))  // Set the fetched images to the state
        .catch(err => console.error(err));  // Handle errors if any
    } else if (searchTerm) {
      setImagesFromAPI([]);  // Clear images if the search term doesn't match any allowed keywords
    }
  }, [searchTerm, allowedKeywords]);  // Run this effect whenever the search term changes

  // Example static product data (can be dynamic in the future)
  const products = [
    { image: '/pictures/cream.avif', name: 'Cream' },
    { image: '/pictures/face.avif', name: 'Glow' },
    { image: '/pictures/beauty.avif', name: 'Beauty' },
    { image: '/pictures/masque.avif', name: 'Patch' },
    { image: '/pictures/outils.avif', name: 'Gua sha' },
    { image: '/pictures/portrait.avif', name: 'Mask' },
    { image: '/pictures/mains.avif', name: 'Hands' },
    { image: '/pictures/palette.jpg', name: 'Makeup' },
    { image: '/pictures/portrait2.avif', name: 'Skin' },
    { image: '/pictures/fond.png', name: 'Fond' },
  ];

  // Filter the products based on the search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())  // Case-insensitive filtering
  );

  return (
    <div className={`gallery-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Title and subtitle */}
      <h1 className="title">Beauty Gallery</h1>
      <p className="subtitle">Let yourself glow through the lens of beauty.</p>

      {/* Search bar component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <p className="searchinfo">(Try these keywords: Skincare, Makeup, Beauty, Skin)</p>

      {/* Image grid component */}
      <ImageGrid
        images={searchTerm ? imagesFromAPI : filteredProducts}  // Display either API images or filtered products
        handleImageClick={handleImageClick}  // Handle image clicks to open the lightbox
        noImagesMessage={searchTerm ? "No images found" : "No products found"}  // Display message if no images are found
      />

      {/* Dark/light mode toggle button */}
      <div className="theme-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Lightbox component (only visible if the lightbox is open) */}
      {isLightboxOpen && <Lightbox currentImage={currentImage} closeLightbox={closeLightbox} />}

      {/* Footer */}
      <footer className="signature">Amanie</footer>
    </div>
  );
}

export default App;
