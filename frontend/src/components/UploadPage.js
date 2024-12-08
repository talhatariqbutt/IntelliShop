// import React, { useState } from 'react';
// import axios from 'axios'; 
// import './UploadPage.css';

// const UploadPage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDragActive, setIsDragActive] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [results, setResults] = useState([]); // State to store results

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragActive(false);
//     const file = event.dataTransfer.files[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragActive(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragActive(false);
//   };

//   const handleUploadClick = async () => {
//     if (!selectedFile) return;

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/uploadImage/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Handle the response from the backend
//       setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);
//       console.log(response.data); // Log the response data (includes width, height, results)

//       // Extract and update results from the nested structure in the backend response
//       if (response.data.results && response.data.results.results) {
//         setResults(response.data.results.results); // Access nested `results.results`
//       } else {
//         setResults([]); // Clear results if no data is returned
//       }

//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setUploadStatus('Error uploading file.');
//       setResults([]); // Clear results on error
//     } finally {
//       setSelectedFile(null); // Reset selected file
//     }
//   };

//   const handleCancelClick = () => {
//     setSelectedFile(null);
//     setUploadStatus('');
//     setResults([]);
//   };

//   return (
//     <section className="upload-section">
//       <h2>Upload Your Image</h2>
//       <div
//         className={`upload-area ${isDragActive ? 'active' : ''}`}
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//       >
//         <div className="upload-content">
//           {selectedFile ? (
//             <>
//               <p className="file-name">Selected File: {selectedFile.name}</p>
//               <div className="action-buttons">
//                 <button className="upload-button" onClick={handleUploadClick}>
//                   Upload
//                 </button>
//                 <button className="cancel-button" onClick={handleCancelClick}>
//                   Cancel
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <p className="upload-instructions">Drag & Drop your image here</p>
//               <p className="upload-or">or</p>
//               <input
//                 type="file"
//                 id="fileUpload"
//                 className="file-input"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="fileUpload" className="upload-button">
//                 Browse File
//               </label>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Display upload status */}
//       {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

//       {/* Display results */}
//       {results.length > 0 && (
//         <div className="results-section">
//           <h3>Search Results</h3>
//           <div className="results-grid">
//             {results.map((result, index) => (
//               <div key={index} className="result-item">
//                 <img src={result.image_url} alt={`Result ${index + 1}`} className="result-image" />
//                 {<p className="result-distance">Distance: {result.distance.toFixed(2)}</p>}
//                 <a href={result.product_url} target="_blank" rel="noopener noreferrer">
//                   View Product
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };


// export default UploadPage;


import React, { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [results, setResults] = useState([]); // State to store results

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

      console.log(response.data.results.results);

      // Handle the response from the backend
      setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);
      console.log(response.data); // Log the response data (includes width, height, results)

      // Extract and update results from the nested structure in the backend response
      if (response.data.results && response.data.results.results) {
        setResults(response.data.results.results); // Access nested `results.results`
      } else {
        setResults([]); // Clear results if no data is returned
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file.');
      setResults([]); // Clear results on error
    } finally {
      setSelectedFile(null); // Reset selected file
    }
  };

  const handleCancelClick = () => {
    setSelectedFile(null);
    setUploadStatus('');
    setResults([]);
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

      {/* Display upload status */}
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

      {/* Display results */}
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
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default UploadPage;
