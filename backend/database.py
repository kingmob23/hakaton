import asyncio
import hashlib

import toml
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi

config = toml.load("config.toml")

mongodb_config = config["mongodb"]
uri = mongodb_config["uri"]
certificate_path = mongodb_config["certificate_path"]


client = AsyncIOMotorClient(
    uri, server_api=ServerApi("1"), tls=True, tlsCertificateKeyFile=certificate_path
)

database = client.video_recommendations
video_collection = database.get_collection("videos")
user_collection = database.get_collection("users")


async def test_connection():
    try:
        await client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
    try:
        collections = await database.list_collection_names()
        print("Connection successful! Collections in the database:", collections)
    except Exception as e:
        print("Connection failed:", str(e))


async def add_video(video_id: str, title: str):
    video_document = {"video_id": video_id, "title": title}
    try:
        await video_collection.insert_one(video_document)
        print(f"Successfully added video: {title}")
    except Exception as e:
        print(f"Error adding video {title}: {e}")


async def get_all_video_ids() -> list:
    try:
        video_ids = await video_collection.distinct("video_id")
        return video_ids
    except Exception as e:
        print(f"Error fetching all video IDs: {e}")
        return []


async def get_video_by_id(video_id: str):
    try:
        video = await video_collection.find_one({"video_id": video_id}, {"_id": 0})
        if video:
            return video
        print(f"Video with ID {video_id} not found.")
    except Exception as e:
        print(f"Error fetching video by ID {video_id}: {e}")
    return None


async def generate_video_id(title: str) -> str:
    """Generate a video ID by hashing the title"""
    return hashlib.md5(title.encode()).hexdigest()


async def populate_db_with_dummy_videos():
    titles = ["Cool video", "ASCII Art", "Funny Turtles"]
    tasks = []

    for title in titles:
        video_id = await generate_video_id(title)
        tasks.append(add_video(video_id, title))

    await asyncio.gather(*tasks)
    print("Dummy videos added to the database.")


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(test_connection())
    loop.run_until_complete(populate_db_with_dummy_videos())
