import os
import time
from openai import OpenAI
from dotenv import load_dotenv
import requests

# Load API key from .env
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Upload the plushie image
#reference_file = client.files.create(
#    file=open("da-boi.webp", "rb"),
#    purpose="vision"
#)

# Define the activities
activities = [
    "skiing on snowy mountains",
    "playing soccer",
    "cooking pancakes",
    "surfing a big wave",
    "reading a book on a bean bag"
]

# Create folder for images
os.makedirs("generated", exist_ok=True)

# Loop through activities
for i, activity in enumerate(activities, start=1):
    prompt = (
        "A 2D digital illustration of a stylized plush bee mascot, centered in frame. "
        "The bee is plump and spherical like a stuffed toy, with a soft, tactile surface and fabric texture. "
        "It has two short, fuzzy black antennae, two small rounded black arms, and black oval feet. "
        "Its body is made of alternating yellow and dark charcoal-black fuzzy fabric stripes, stitched in visible seams, like a hand-sewn plush. "
        "The face is large and friendly, with oversized glossy black oval eyes set wide apart, a tiny curved stitched smile, and no nose. "
        "It wears a distinct mustard-yellow ribbed knit beanie that is slightly oversized and slouched back, with a small black logo \"=}\" on the front of the hat. "
        "The beanie has visible fabric texture and folds.\n\n"
        f"The mascot is posed doing {activity}, with a joyful, animated, expressive gesture. It should appear mid-motion with a clean, readable silhouette. "
        "All elements must relate only to the activity — avoid background elements or scenery unless explicitly part of the action (e.g. skis, cape, guitar).\n\n"
        "The background is fully transparent (PNG-style, no background fill). The subject is completely isolated. "
        "No drop shadows unless extremely subtle and under the feet for grounding. No border, no environment, no text.\n\n"
        "Illustration style is modern vector-inspired, flat-to-semi-flat with subtle soft shading and specular highlights. "
        "Lines are clean, curves are smooth, and color palette is warm and developer-brand-friendly: mustard yellow, soft gold, black, and muted accents (red, blue) only if related to the activity.\n\n"
        "The plushie should be visually compatible with other developer mascots or marketing graphics used in promotional ticket systems (e.g. Launch Week cards). "
        "It must fit cleanly into a 1:1 or 4:5 card layout with visual balance, whitespace, and centered mass.\n\n"
        "Avoid extreme camera angles. Use a straight-on or slight 3/4 perspective for optimal framing. "
        "Lighting is clean and bright with smooth gradients. Ensure consistent rendering of textures (knit hat, plush body) and iconic visual identity. "
        "No visible background, watermark, or signature.\n\n"
        "The image must look consistent across different prompts describing similar scenes — this is a recurring character used in branded material."
    )

    print(f"[{i}/{len(activities)}] Generating: {activity} ...")
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
        response_format="url"
    )

    image_url = response.data[0].url

    # Download and save image
    image_data = requests.get(image_url).content
    filename = f"generated/boi-{i}.png"
    with open(filename, "wb") as f:
        f.write(image_data)

    print(f"Saved to: {filename}")
    time.sleep(1)  # prevent rate limiting
