from datetime import datetime

from database import get_video_by_id
from fastapi import FastAPI
from rec import recommender
from schema import RecommendationRequest

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/recommend")
async def handle_recommendation(request: RecommendationRequest):
    # recommended_video_ids = await recommender(
    #     user_id=request.user_id,
    #     reactions=request.reactions,  # Передаем список реакций
    #     timestamp=request.timestamp,
    # )

    # recommended_videos = []
    # for vid in recommended_video_ids:
    #     video = await get_video_by_id(vid)
    #     if video:
    #         recommended_videos.append(video)

    # print(recommended_videos)
    recommended_videos = [
        {
            "title": "pes patron",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron2",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron3",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron4",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron5",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron6",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron7",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron8",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron9",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
        {
            "title": "pes patron10",
            "category_id": "Мультфильмы",
            "description": "сергий против нечисти смотреть",
            "v_pub_datetime": datetime(2024, 6, 15),
        },
    ]
    return {"recommended_videos": recommended_videos}
