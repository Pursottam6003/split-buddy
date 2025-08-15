from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from paddleocr import PaddleOCR
import base64
import io
from PIL import Image
import uvicorn

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
ocr = PaddleOCR(use_angle_cls=True, lang='en')

@app.post("/ocr")
async def ocr_endpoint(request: Request):
    data = await request.json()
    image_b64 = data.get("image")
    if not image_b64:
        return {"text": ""}
    try:
        header, b64data = image_b64.split(",", 1)
        img_bytes = base64.b64decode(b64data)
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
        result = ocr.ocr(img, cls=True)
        text = "\n".join([line[1][0] for line in result[0]])
        return {"text": text}
    except Exception as e:
        return {"text": "Error: " + str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
