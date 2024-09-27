from pydantic import BaseModel


class VideoReaction(BaseModel):
    video_id: str
    reaction: bool


class RecommendationRequest(BaseModel):
    user_id: str
    timestamp: str
    reactions: list[VideoReaction]
