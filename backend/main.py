from rec import recomender

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/recomend")
def handle_recomend():
    recomender()
    return

