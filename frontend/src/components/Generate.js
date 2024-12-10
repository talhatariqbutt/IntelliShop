import React, { useState } from 'react';
import './Generate.css';
import axios from 'axios';

const GeneratePage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleEnterClick = async () => {
    if (prompt.trim() === '') {
      alert('Please enter a prompt');
    } else {
      try {
        const response = await axios.post('http://127.0.0.1:8000/generateImage/', {
          prompt: prompt
        });
        setGeneratedImage(response.data.image);  // Assuming `response.data.image` contains the base64 image
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
    setPrompt('');
  };

  return (
    <div className="generate-container">
      <div className="card">
        <h2>Generate Your Prompt</h2>
        <div className="input-container">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            className="prompt-input"
            placeholder="Enter your prompt here..."
          />
          <button className="enter-button" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      </div>
      
      {generatedImage && (
        <div className="image-container">
          <img src={`data:image/png;base64,${generatedImage}`} alt="Generated" className="generated-image" />
        </div>
      )}
    </div>
  );
};

export default GeneratePage;

// import React, { useState } from "react";
// import "./Generate.css";
// import axios from "axios";

// const GeneratePage = () => {
//   const [prompt, setPrompt] = useState("");
//   const [generatedImage, setGeneratedImage] = useState(null);
//   const [searchResults, setSearchResults] = useState([]); // State for search results

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handleEnterClick = async () => {
//     if (prompt.trim() === "") {
//       alert("Please enter a prompt");
//     } else {
//       try {
//         const response = await axios.post("http://127.0.0.1:8000/generateImage/", {
//           prompt: prompt,
//         });
//         setGeneratedImage(response.data.image); // Assuming response.data.image is the base64 string
//       } catch (error) {
//         console.error("Error generating image:", error);
//       }
//     }
//     setPrompt("");
//   };

//   const handleSearchClick = async () => {
//     if (!generatedImage) {
//       alert("No image generated to search");
//       return;
//     }
  
//     try {
//       // Prepare base64 payload without prefix for the backend
//       const base64Payload = generatedImage.split(",")[1];  // Remove the prefix
//       console.log("Sending Base64 Image:", base64Payload); // Debugging log
  
//       const response = await axios.post("http://127.0.0.1:8000/uploadImage/", {
//         base64_image: { image: base64Payload },
//       });
  
//       if (response.data.results) {
//         setSearchResults(response.data.results);
//       } else {
//         setSearchResults([]);
//       }
//     } catch (error) {
//       console.error("Error searching for results:", error.response?.data || error.message);
//     }
//   };
  
  

//   return (
//     <div className="generate-container">
//       <div className="card">
//         <h2>Generate Your Prompt</h2>
//         <div className="input-container">
//           <input
//             type="text"
//             value={prompt}
//             onChange={handleInputChange}
//             className="prompt-input"
//             placeholder="Enter your prompt here..."
//           />
//           <button className="enter-button" onClick={handleEnterClick}>
//             Generate
//           </button>
//         </div>
//       </div>

//       {generatedImage && (
//         <div className="image-container">
//           <img
//             src={`data:image/png;base64,${generatedImage}`}
//             alt="Generated"
//             className="generated-image"
//           />
//           <button className="search-button" onClick={handleSearchClick}>
//             Search for Results
//           </button>
//         </div>
//       )}

//       {searchResults.length > 0 && (
//         <div className="results-section">
//           <h3>Search Results</h3>
//           <div className="results-grid">
//             {searchResults.map((result, index) => (
//               <div key={index} className="result-item">
//                 <img
//                   src={result.image_url}
//                   alt={`Result ${index + 1}`}
//                   className="result-image"
//                 />
//                 <h4>{result.product_name || "No Name Available"}</h4>
//                 <p>Brand: {result.brand || "Unknown"}</p>
//                 <p>Price: {result.price || "N/A"}</p>
//                 <a
//                   href={result.product_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Product
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeneratePage;
