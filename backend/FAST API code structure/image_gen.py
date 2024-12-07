import os
import base64
from gradio_client import Client
from PIL import Image as PILImage

# Setup Hugging Face token
os.environ['HF_TOKEN'] = 'your_hf_token_here'

# Initialize the client with the model you're using
client = Client("black-forest-labs/FLUX.1-schnell")

def generate_image_from_prompt(prompt):
    """
    Function to generate an image based on the provided prompt using the gradio client.
    Returns the image as a base64 encoded string.
    """
    try:
        # Generate the image with the specified prompt
        result = client.predict(
            prompt=prompt,
            seed=0,
            randomize_seed=True,
            width=1024,
            height=1024,
            num_inference_steps=4,
            api_name="/infer"
        )

        # The result is a tuple, the first element is the local file path
        image_path = result[0]

        # Convert the image to a base64 string
        with open(image_path, "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')

        return encoded_image
    
    except Exception as e:
        raise RuntimeError(f"Failed to generate image: {str(e)}")

