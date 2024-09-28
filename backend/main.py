from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
from database import get_video_by_id
from fastapi import FastAPI
from rec import recommender
from schema import RecommendationRequest, RecommendationResponse, RecommendedVideo
from fastapi import HTTPException

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешить доступ только с вашего React приложения
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы (GET, POST, и т.д.)
    allow_headers=["*"],  # Разрешить все заголовки
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/reactions")
async def handle_recommendation(request: RecommendationRequest) -> RecommendationResponse:
    try:
        recommended_videos = [
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
           "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
           "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
    ]
        return {"recommended_videos": recommended_videos}
    except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))


@app.post("/recommend")
async def handle_recommendation(request: RecommendationRequest) -> RecommendationResponse:
    try:
        recommended_videos = [
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
           "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
           "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
         {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
        {
           "title": "Название видео",
            "timestamp": "2024-09-28T12:00:00",
            "channel": "Название канала",
            "description": "Описание видео",
            "userReaction": 0,
        },
    ]
        return {"recommended_videos": recommended_videos}
    except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))
