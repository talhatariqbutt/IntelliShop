import React from 'react';
import UploadPage from '../components/UploadPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Upload = () => {
  return (
    <div className="upload-page-container">
    <Navbar />
      <UploadPage />
      <Footer />
    </div>
  );
};

export default Upload;

// import React, { useState } from 'react';

// const UploadPage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);  // For storing the uploaded file
//   const [results, setResults] = useState(null);            // For storing backend results
//   const [uploading, setUploading] = useState(false);       // To handle the loading state
//   const [error, setError] = useState(null);                // For error handling

//   // Handle file selection from input
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);  // Set the selected file in state
//     setResults(null);  // Clear previous results
//     setError(null);    // Clear previous errors
//   };

//   // Handle the image upload to the backend
//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setError('Please select a file before uploading.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);  // Append the selected file to FormData

//     try {
//       setUploading(true);  // Start the loading state

//       // Send the file to the backend
//       const response = await fetch('http://localhost:8000/uploadImage/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }

//       // Get the JSON response from the backend
//       const data = await response.json();
//       setResults(data.results);  // Store the backend results in state
//       setUploading(false);  // Stop the loading state
//     } catch (err) {
//       console.error(err);
//       setError('Error uploading the image.');  // Handle any errors
//       setUploading(false);  // Stop the loading state
//     }
//   };

//   return (
//     <div className="upload-page">
//       <h2>Upload Your Image</h2>

//       <div className="upload-container">
//         {/* File Input */}
//         <input type="file" onChange={handleFileChange} />
        
//         {/* Upload Button */}
//         <button onClick={handleUpload} disabled={uploading}>
//           {uploading ? 'Uploading...' : 'Upload Image'}
//         </button>
//       </div>

//       {/* Display Error if any */}
//       {error && <p className="error-message">{error}</p>}

//       {/* Display Results */}
//       {results && (
//         <div className="results-container">
//           <h3>Results from Backend:</h3>
//           <ul>
//             {results.map((result, index) => (
//               <li key={index}>{result}</li>  // Display each result from the backend
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadPage;
