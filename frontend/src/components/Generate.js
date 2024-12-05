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

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Generate.css';

// const GeneratePage = () => {
//     const [prompt, setPrompt] = useState('');
//     const [generatedImage, setGeneratedImage] = useState('');
//     const [error, setError] = useState('');

//     const handlePromptChange = (e) => {
//         setPrompt(e.target.value);
//     };

//     const handleGenerateImage = async () => {
//         setError('');
//         try {
//             const response = await axios.post('http://localhost:8000/generateImage/', { prompt });
//             setGeneratedImage(response.data.image);
//         } catch (err) {
//             setError('Failed to generate image. Please try again.');
//             console.error(err);
//         }
//     };

//     const handleSaveImage = async () => {
//         if (!generatedImage) {
//             setError('No image to save.');
//             return;
//         }
//         try {
//             const response = await axios.post('http://localhost:8000/uploadImage/', {
//                 image: generatedImage,
//             });
//             alert('Image saved successfully!');
//         } catch (err) {
//             setError('Failed to save image. Please try again.');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="generate-container">
//             <div className="card">
//                 <h2>Generate Image</h2>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         className="prompt-input"
//                         value={prompt}
//                         onChange={handlePromptChange}
//                         placeholder="Enter your prompt"
//                     />
//                     <button className="enter-button" onClick={handleGenerateImage}>
//                         Generate
//                     </button>
//                 </div>
//                 {error && <p className="error-message">{error}</p>}
//                 {generatedImage && (
//                     <div className="image-container">
//                         <img
//                             src={`data:image/png;base64,${generatedImage}`}
//                             alt="Generated"
//                             className="generated-image"
//                         />
//                         <button className="save-button" onClick={handleSaveImage}>
//                             Save Image
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default GeneratePage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Generate.css';

// const GeneratePage = () => {
//     const [prompt, setPrompt] = useState('');
//     const [generatedImage, setGeneratedImage] = useState('');
//     const [error, setError] = useState('');

//     const handlePromptChange = (e) => {
//         setPrompt(e.target.value);
//     };

//     const handleGenerateImage = async () => {
//         setError('');
//         try {
//             const response = await axios.post('http://localhost:8000/generateImage/', { prompt });
//             setGeneratedImage(response.data.image);
//         } catch (err) {
//             setError('Failed to generate image. Please try again.');
//             console.error(err);
//         }
//     };

//     const handleSaveImage = async () => {
//         if (!generatedImage) {
//             setError('No image to save.');
//             return;
//         }
//         try {
//             // Send the base64 image string to the backend to save
//             const response = await axios.post('http://localhost:8000/uploadImage/', {
//                 image: generatedImage,
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             alert('Image saved successfully!');
//         } catch (err) {
//             setError('Failed to save image. Please try again.');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="generate-container">
//             <div className="card">
//                 <h2>Generate Image</h2>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         className="prompt-input"
//                         value={prompt}
//                         onChange={handlePromptChange}
//                         placeholder="Enter your prompt"
//                     />
//                     <button className="enter-button" onClick={handleGenerateImage}>
//                         Generate
//                     </button>
//                 </div>
//                 {error && <p className="error-message">{error}</p>}
                
//                 {/* Display the generated image if it exists */}
//                 {generatedImage && (
//                     <div className="image-container">
//                         <img
//                             src={`data:image/png;base64,${generatedImage}`}
//                             alt="Generated"
//                             className="generated-image"
//                         />
//                         <button className="save-button" onClick={handleSaveImage}>
//                             Save Image
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default GeneratePage;
