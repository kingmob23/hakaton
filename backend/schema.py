from pydantic import BaseModel


class VideoReaction(BaseModel):
    video_id: str
    reaction: bool


class RecommendationRequest(BaseModel):
    user_id: str
    timestamp: str
    reactions: list[VideoReaction]

class RecommendedVideo(BaseModel):
    title: str
    timestamp: str
    channel: str 
    description: str
    like: str 
    dislike: str
class RecommendationResponse(BaseModel):
    recommended_videos: list[RecommendedVideo]