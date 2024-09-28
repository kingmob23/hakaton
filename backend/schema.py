from pydantic import BaseModel


class VideoReaction(BaseModel):
    video_id: str
    reaction: int 


class RecommendationRequest(BaseModel):
    user_id: str
    timestamp: str
    reactions: list[VideoReaction]

class RecommendedVideo(BaseModel):
    title: str
    timestamp: str
    channel: str 
    description: str
    userReaction: int
class RecommendationResponse(BaseModel):
    recommended_videos: list[RecommendedVideo]