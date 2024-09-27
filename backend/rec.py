import polars as pl
from database import get_all_video_ids, get_video_by_id


async def recommender(user_id: str, video_id: str, timestamp: str) -> list[str]:

    print(f"{user_id=}")
    print(f"video watched: {await get_video_by_id(video_id)}")
    print(f"at {timestamp}")
    all_video_ids = await get_all_video_ids()
    print(f"{all_video_ids=}")
    return all_video_ids


logs_df_1 = pl.read_parquet("data/logs_df_2024-08-05.parquet")
logs_df_2 = pl.read_parquet("data/logs_df_2024-08-06.parquet")
video_stat = pl.read_parquet("data/video_stat.parquet")

logs_df = pl.concat([logs_df_1, logs_df_2])

merged_df = logs_df.join(video_stat, on="video_id", how="left")

print(merged_df)
