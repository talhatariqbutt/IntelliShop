from fastapi import FastAPI, File, UploadFile, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image
from Searching import process_image
from user import register_user, login_user, UserRegister, UserLogin
from pydantic import BaseModel
from image_gen import generate_image_from_prompt
# from availability import check_sizes 
import os

app = FastAPI()

# CORS configuration
origins = ["http://localhost:3000"]
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
        if not os.path.exists(UPLOAD_DIRECTORY):
            os.makedirs(UPLOAD_DIRECTORY)

        file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
        with open(file_location, "wb") as buffer:
            buffer.write(await image.read())

        # image_pil = Image.open(file_location)
        # width, height = image_pil.size
        results = process_image(file_location)

        return {
            "message": "Image processed successfully",
            # "width": width,
            # "height": height,
            "results": results,
            "file_path": file_location,
        }
        return JSONResponse(content=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.post("/user/register")
async def register(user: UserRegister):
    return register_user(user)

@app.post("/user/login")
async def login(user: UserLogin):
    return login_user(user)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/generateImage/")
async def generate_image(request: PromptRequest):
    try:
        generated_image_path = generate_image_from_prompt(request.prompt)
        return {"image": generated_image_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

# @app.get("/checkAvailability/")
# async def check_availability(product_url: str = Query(..., description="URL of the product")):
#     """
#     Check the availability of product sizes for the given product URL.
#     """
#     try:
#         sizes_info = check_sizes(product_url)
#         return {"availability": sizes_info}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# from fastapi import FastAPI, File, UploadFile, HTTPException, Query, Form, Body
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import JSONResponse
# from pydantic import BaseModel
# from PIL import Image
# from io import BytesIO
# import base64
# from Searching import process_image
# from user import register_user, login_user, UserRegister, UserLogin
# from image_gen import generate_image_from_prompt
# import os

# app = FastAPI()

# # CORS configuration
# origins = ["http://localhost:3000"]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# UPLOAD_DIRECTORY = "uploads/"


# @app.get("/")
# async def root():
#     return {"message": "FastAPI is working!"}


# class Base64ImageRequest(BaseModel):
#     image: str  # Base64-encoded image


# @app.post("/uploadImage/")
# async def upload_image(
#     image: UploadFile = None, base64_image: dict = Body(...)
# ):
#     try:
#         if image:
#             # Handle file upload
#             if not os.path.exists(UPLOAD_DIRECTORY):
#                 os.makedirs(UPLOAD_DIRECTORY)

#             file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
#             with open(file_location, "wb") as buffer:
#                 buffer.write(await image.read())
#             results = process_image(file_location)

#         elif base64_image:
#             image_data = base64.b64decode(base64_image["image"])  # Decoding the base64 string
#             image_pil = Image.open(BytesIO(image_data))  # Convert bytes to image
#             file_location = os.path.join(UPLOAD_DIRECTORY, "generated_image.png")
#             image_pil.save(file_location)  # Save the image

#             # Process the image with your existing logic
#             results = process_image(file_location)

#             return {
#                 "message": "Image processed successfully",
#                 "results": results,
#                 "file_path": file_location,
#             }

#         raise HTTPException(status_code=400, detail="No image provided")

#     except Exception as e:
#         print(f"Error: {e}")  # Log error for debugging
#         raise HTTPException(status_code=500, detail=f"Error processing image: {e}")

# @app.post("/user/register")
# async def register(user: UserRegister):
#     return register_user(user)


# @app.post("/user/login")
# async def login(user: UserLogin):
#     return login_user(user)


# class PromptRequest(BaseModel):
#     prompt: str


# @app.post("/generateImage/")
# async def generate_image(request: PromptRequest):
#     try:
#         generated_image_path = generate_image_from_prompt(request.prompt)
#         return {"image": generated_image_path}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")
