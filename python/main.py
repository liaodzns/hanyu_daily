from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from level import Level

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    # Define your request data model here
    level: str

level_instances = {}  # Store instances of Level to maintain state across requests

def get_level_instance(level_name: str):
    if level_name not in level_instances:
        level_instances[level_name] = Level(level_name)
    return level_instances[level_name]


@app.post("/api/generate-word")
def generate(data: RequestData):
    # Perform your backend functionality here
    print(level_instances)
    level_instance = get_level_instance(data.level)
    word = level_instance.newSelection()
    if not word: 
        raise HTTPException(status_code=404, detail="No words found in the specified level")
    return word

@app.post("/api/reset-chosen")
def reset_chosen(data: RequestData):
    level_instance = get_level_instance(data.level)
    level_instance.reset_chosen()
    return {"message": "Reset successful"}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
