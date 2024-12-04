# from pymongo import MongoClient
# from passlib.context import CryptContext
# from pydantic import BaseModel
# from fastapi import HTTPException

# # MongoDB setup
# client = MongoClient("mongodb://localhost:27017")
# db = client["intellishop_db"]
# users_collection = db["users"]

# # Password encryption setup
# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# # User model
# class User(BaseModel):
#     email: str
#     password: str

# # Utility function to hash passwords
# def hash_password(password: str):
#     return pwd_context.hash(password)

# # Utility function to verify passwords
# def verify_password(plain_password: str, hashed_password: str):
#     return pwd_context.verify(plain_password, hashed_password)

# # Function to register a new user
# def register_user(user: User):
#     existing_user = users_collection.find_one({"email": user.email})
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     hashed_password = hash_password(user.password)
#     new_user = {"email": user.email, "password": hashed_password}
#     result = users_collection.insert_one(new_user)

#     return {"message": "User registered successfully", "user_id": str(result.inserted_id)}

# # Function to login a user
# def login_user(user: User):
#     existing_user = users_collection.find_one({"email": user.email})
#     if not existing_user:
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     if not verify_password(user.password, existing_user["password"]):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     return {"message": "Login successful", "user_id": str(existing_user["_id"])}

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
from passlib.context import CryptContext

# MongoDB setup
client = MongoClient("mongodb://localhost:27017")
db = client.intellishop_db
users_collection = db.users

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Pydantic models
class User(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str

class UserInDB(User):
    hashed_password: str

# FastAPI router
router = APIRouter()

@router.post("/register")
def register_user(user: User):
    # Check if the email is already registered
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    try:
        # Hash the user's password
        hashed_password = hash_password(user.password)

        # Create a new user document
        new_user = {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "password": hashed_password,
        }

        # Insert into the database
        result = users_collection.insert_one(new_user)

        return {
            "message": "User registered successfully",
            "user_id": str(result.inserted_id),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Registration failed: {str(e)}")

@router.post("/login")
def login_user(email: EmailStr, password: str):
    # Find the user by email
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # Verify the password
    if not verify_password(password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    return {
        "message": "Login successful",
        "user": {
            "first_name": user["first_name"],
            "last_name": user["last_name"],
            "email": user["email"],
        },
    }
