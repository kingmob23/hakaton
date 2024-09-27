from database import get_all_video_ids, get_video_by_id


async def recommender(user_id: str, video_id: str, timestamp: str) -> list[str]:

    print(f"{user_id=}")
    print(f"video watched: {await get_video_by_id(video_id)}")
    print(f"at {timestamp}")
    all_video_ids = await get_all_video_ids()
    print(f"{all_video_ids=}")
    return all_video_ids
