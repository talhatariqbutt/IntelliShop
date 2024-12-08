import React, { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';
import { useWishlist } from './WishlistContext'; // Import the custom hook

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [results, setResults] = useState([]);
  const { addToWishlist } = useWishlist(); // Get addToWishlist function

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragActive(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleUploadClick = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/uploadImage/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);

      if (response.data.results && response.data.results.results) {
        setResults(response.data.results.results);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file.');
      setResults([]);
    } finally {
      setSelectedFile(null);
    }
  };

  const handleCancelClick = () => {
    setSelectedFile(null);
    setUploadStatus('');
    setResults([]);
  };

  const handleAddToWishlist = (product) => {
    console.log(product);  // Debugging log
    addToWishlist(product);  // Add product to wishlist using context
  };

  return (
    <section className="upload-section">
      <h2>Upload Your Image</h2>
      <div
        className={`upload-area ${isDragActive ? 'active' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="upload-content">
          {selectedFile ? (
            <>
              <p className="file-name">Selected File: {selectedFile.name}</p>
              <div className="action-buttons">
                <button className="upload-button" onClick={handleUploadClick}>
                  Upload
                </button>
                <button className="cancel-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="upload-instructions">Drag & Drop your image here</p>
              <p className="upload-or">or</p>
              <input
                type="file"
                id="fileUpload"
                className="file-input"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="upload-button">
                Browse File
              </label>
            </>
          )}
        </div>
      </div>

      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

      {results.length > 0 && (
        <div className="results-section">
          <h3>Search Results</h3>
          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <img src={result.image_url} alt={`Result ${index + 1}`} className="result-image" />
                <h4 className="result-title">{result.product_name || "No Name Available"}</h4>
                <p className="result-brand">Brand: {result.brand || "Unknown"}</p>
                <p className="result-price">Price: {result.price || "N/A"}</p>
                <a href={result.product_url} target="_blank" rel="noopener noreferrer" className="result-link">
                  View Product
                </a>
                <button onClick={() => {
                  console.log(result); // Log result to check structure
                  handleAddToWishlist(result);
                }} className="add-to-wishlist-button">
                  Add to Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default UploadPage;
