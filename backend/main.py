from database import get_video_by_id
from fastapi import FastAPI
from pydantic import BaseModel
from rec import recommender

app = FastAPI()


class RecommendationRequest(BaseModel):
    user_id: str
    video_id: str
    timestamp: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/recommend")
async def handle_recommendation(request: RecommendationRequest):
    recommended_video_ids = await recommender(
        user_id=request.user_id, video_id=request.video_id, timestamp=request.timestamp
    )
    recommended_videos = []
    for vid in recommended_video_ids:
        video = await get_video_by_id(vid)
        if video:
            recommended_videos.append(video)
    print(recommended_videos)
    return {"recommended_videos": recommended_videos}
