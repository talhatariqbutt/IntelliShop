from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image
from Searching import process_image
from user import register_user, login_user, UserRegister, UserLogin, hash_password, verify_password
from pydantic import BaseModel
from image_gen import generate_image_from_prompt
import os
import jwt
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from pymongo import MongoClient

# MongoDB setup
client = MongoClient("mongodb://localhost:27017")
db = client["intellishop_db"]
users_collection = db["users"]


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

# JWT Configuration
SECRET_KEY = "my_secret_key"  # Change this to a secure secret key
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Token expires after 30 minutes

# OAuth2PasswordBearer for fastapi security
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Utility function to create an access token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Utility function to verify the access token
def verify_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload  # Returns the decoded payload (user info)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

# Root endpoint
@app.get("/")
async def root():
    return {"message": "FastAPI is working!"}

# Image upload endpoint
@app.post("/uploadImage/")
async def upload_image(image: UploadFile = File(...)):
    try:
        if not os.path.exists(UPLOAD_DIRECTORY):
            os.makedirs(UPLOAD_DIRECTORY)

        file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
        with open(file_location, "wb") as buffer:
            buffer.write(await image.read())

        results = process_image(file_location)

        return {
            "message": "Image processed successfully",
            "results": results,
            "file_path": file_location,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

# User registration endpoint
@app.post("/user/register")
async def register(user: UserRegister):
    return register_user(user)

# User login endpoint (returns JWT token)
@app.post("/user/login")
async def login(user: UserLogin):
    existing_user = users_collection.find_one({"email": user.email})
    if not existing_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    if not verify_password(user.password, existing_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # Create a JWT token with the user's email (sub = subject)
    access_token = create_access_token(data={"sub": existing_user["email"]})

    return {
        "message": "Login successful",
        "access_token": access_token,
        "user_id": str(existing_user["_id"]),
        "full_name": existing_user["full_name"],  # Ensure this is included
    }
# Generate image endpoint
class PromptRequest(BaseModel):
    prompt: str

@app.post("/generateImage/")
async def generate_image(request: PromptRequest):
    try:
        generated_image_path = generate_image_from_prompt(request.prompt)
        return {"image": generated_image_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

# Protected route for user's wishlist (requires JWT token)
@app.get("/user/wishlist")
async def get_user_wishlist(token: str = Depends(oauth2_scheme)):
    user_info = verify_access_token(token)  # Decode the token and get user info
    
    # Use user_info to get the user’s wishlist from the database
    user_email = user_info["sub"]
    user = users_collection.find_one({"email": user_email})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Return the user's wishlist (assuming the wishlist is stored in the "wishlist" field)
    return user.get("wishlist", [])

# Update user's wishlist (add/remove items) (requires JWT token)
@app.put("/user/wishlist/update")
async def update_user_wishlist(updated_wishlist: list, token: str = Depends(oauth2_scheme)):
    user_info = verify_access_token(token)  # Decode the token and get user info
    user_email = user_info["sub"]

    # Fetch user from the database
    user = users_collection.find_one({"email": user_email})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Update the user's wishlist
    users_collection.update_one(
        {"email": user_email},
        {"$set": {"wishlist": updated_wishlist}}  # Replace the wishlist with the updated one
    )
    
    return {"message": "Wishlist updated successfully", "wishlist": updated_wishlist}
