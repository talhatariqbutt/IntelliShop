from pymongo import MongoClient
from passlib.context import CryptContext
from pydantic import BaseModel
from fastapi import HTTPException

# MongoDB setup
client = MongoClient("mongodb://localhost:27017")
db = client["intellishop_db"]
users_collection = db["users"]

# Password encryption setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# User models
class UserRegister(BaseModel):
    full_name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# Utility function to hash passwords
def hash_password(password: str):
    return pwd_context.hash(password)

# Utility function to verify passwords
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# Function to register a new user
def register_user(user: UserRegister):
    if not user.full_name.strip():
        raise HTTPException(status_code=400, detail="Full name is required")

    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = hash_password(user.password)
    new_user = {"full_name": user.full_name, "email": user.email, "password": hashed_password}
    result = users_collection.insert_one(new_user)

    return {"message": "User registered successfully", "user_id": str(result.inserted_id)}

# Function to login a user
# def login_user(user: UserLogin):
#     existing_user = users_collection.find_one({"email": user.email})
#     if not existing_user:
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     if not verify_password(user.password, existing_user["password"]):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     return {"message": "Login successful", "user_id": str(existing_user["_id"])}

def login_user(user: UserLogin):
    existing_user = users_collection.find_one({"email": user.email})
    if not existing_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    if not verify_password(user.password, existing_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    return {
        "message": "Login successful",
        "user_id": str(existing_user["_id"]),
        "full_name": existing_user["full_name"],  # Include full_name in the response
    }
