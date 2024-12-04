# import os
# from fastapi import FastAPI, File, UploadFile, HTTPException
# from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
# from PIL import Image
# import io
# from Searching import process_image
# from user import register_user, login_user, User  # Import user-related functions
# from pydantic import BaseModel
# from image_gen import generate_image_from_prompt

# app = FastAPI()

# # CORS configuration
# origins = [
#     "http://localhost:3000",  # Adjust this to your frontend's URL
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],  # Allow all HTTP methods
#     allow_headers=["*"],  # Allow all headers
# )
# @app.get("/")
# async def root():
#     return {"message": "FastAPI is working!"}

# UPLOAD_DIRECTORY = "uploads/"

# @app.post("/uploadImage/")
# async def upload_image(image: UploadFile = File(...)):
#     try:
#         # Ensure the uploads directory exists
#         if not os.path.exists(UPLOAD_DIRECTORY):
#             os.makedirs(UPLOAD_DIRECTORY)

#         # Save the uploaded file to the uploads directory
#         file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
#         with open(file_location, "wb") as buffer:
#             buffer.write(await image.read())

#         # Open the saved image file
#         image_pil = Image.open(file_location)
#         width, height = image_pil.size

#         # Process the image using the process_image function from Searching.py
#         # Now we pass the file path instead of the image object
#         results = process_image(file_location)  # Assuming process_image accepts the file path

#         # Return the results to the frontend
#         return {
#             "message": "Image processed successfully",
#             "width": width,
#             "height": height,
#             "results": results,
#             "file_path": file_location  # Optional: return the file path as well
#         }
#     except Exception as e:
#         # Handle any errors that may occur
#         raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

# # User registration route
# @app.post("/user/register")
# async def register(user: User):
#     return register_user(user)

# # User login route
# @app.post("/user/login")
# async def login(user: User):
#     return login_user(user)

# # Define a Pydantic model for the prompt request
# class PromptRequest(BaseModel):
#     prompt: str

# @app.post("/generateImage/")
# async def generate_image(request: PromptRequest):
#     """
#     FastAPI route to generate image based on the provided prompt.
#     """
#     try:
#         # Call the image generation logic from image_gen.py
#         generated_image = generate_image_from_prompt(request.prompt)
#         return {"image": generated_image}

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")


import os
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from Searching import process_image
from user import register_user, login_user, User
from pydantic import BaseModel
from image_gen import generate_image_from_prompt # Import the save_image function

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:3000",  # Adjust this to your frontend's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIRECTORY = "uploads/"

@app.get("/")
async def root():
    return {"message": "FastAPI is working!"}

@app.post("/uploadImage/")
async def upload_image(image: UploadFile = File(...)):
    try:
        # Ensure the uploads directory exists
        if not os.path.exists(UPLOAD_DIRECTORY):
            os.makedirs(UPLOAD_DIRECTORY)

        # Save the uploaded file to the uploads directory
        file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
        with open(file_location, "wb") as buffer:
            buffer.write(await image.read())

        # Open the saved image file
        image_pil = Image.open(file_location)
        width, height = image_pil.size

        # Process the image using the process_image function from Searching.py
        results = process_image(file_location)

        # Return the results to the frontend
        return {
            "message": "Image processed successfully",
            "width": width,
            "height": height,
            "results": results,
            "file_path": file_location
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

# import base64

# @app.post("/uploadImage/")
# async def upload_image(image: str):
#     try:
#         # Ensure the uploads directory exists
#         if not os.path.exists(UPLOAD_DIRECTORY):
#             os.makedirs(UPLOAD_DIRECTORY)

#         # Decode the base64 image
#         image_data = base64.b64decode(image)

#         # Generate a unique filename
#         filename = f"generated_image_{int(time.time())}.png"  # Change as needed
#         file_location = os.path.join(UPLOAD_DIRECTORY, filename)

#         # Save the decoded image data to the uploads directory
#         with open(file_location, "wb") as buffer:
#             buffer.write(image_data)

#         # Return the path or success message
#         return {"message": "Image processed successfully", "file_path": file_location}

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

# User registration route
@app.post("/user/register")
async def register(user: User):
    return register_user(user)

# User login route
@app.post("/user/login")
async def login(user: User):
    return login_user(user)

# Define a Pydantic model for the prompt request
class PromptRequest(BaseModel):
    prompt: str

@app.post("/generateImage/")
async def generate_image(request: PromptRequest):
    """
    FastAPI route to generate image based on the provided prompt.
    """
    try:
        # Call the image generation logic from image_gen.py
        generated_image_path = generate_image_from_prompt(request.prompt)

        return {"image": generated_image_path}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

# @app.post("/saveGeneratedImage/")
# async def save_generated_image(request: PromptRequest):
#     """
#     FastAPI route to save the generated image and perform a search.
#     """
#     try:
#         generated_image_path = generate_image_from_prompt(request.prompt)

#         # Save the generated image to the uploads directory
#         saved_image_path = save_image(generated_image_path)

#         # Perform the search functionality on the saved image
#         results = process_image(saved_image_path)  # Assuming process_image accepts the file path

#         return {
#             "image": saved_image_path,
#             "results": results
#         }

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error saving generated image: {str(e)}")
