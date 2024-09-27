from database import get_video_by_id
from fastapi import FastAPI
from pydantic import BaseModel
from rec import recommender

app = FastAPI()


class VideoReaction(BaseModel):
    video_id: str
    reaction: bool


class RecommendationRequest(BaseModel):
    user_id: str
    timestamp: str
    reactions: list[VideoReaction]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/recommend")
async def handle_recommendation(request: RecommendationRequest):
    recommended_video_ids = await recommender(
        user_id=request.user_id,
        reactions=request.reactions,  # Передаем список реакций
        timestamp=request.timestamp,
    )

    recommended_videos = []
    for vid in recommended_video_ids:
        video = await get_video_by_id(vid)
        if video:
            recommended_videos.append(video)

    print(recommended_videos)
    return {"recommended_videos": recommended_videos}
