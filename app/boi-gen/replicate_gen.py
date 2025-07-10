import os
import replicate
from PIL import Image
import requests
from io import BytesIO
from dotenv import load_dotenv

# Reference image URL
REFERENCE_IMAGE_URL = 'https://raw.githubusercontent.com/matijasos/boi/main/boi-2d.png'
# Output directory
OUTPUT_DIR = 'generated'

# Example activities (replace or extend as needed)
ACTIVITIES = [
    "A mascot in the reference image, looking like a rock star, holding a mic in a characteristic rock star pose. Isolated on a plain white background",
    "A mascot in the reference image, looking like a police officer, holding a stop sign and directing traffic. Isolated on a plain white background",
    "A mascot in the reference image, looking like a chef, holding a frying pan and flipping a pancake. Isolated on a plain white background",
    "A mascot in the reference image, looking like a scientist, holding a bubbling test tube and wearing safety goggles. Isolated on a plain white background",
    "A mascot in the reference image, looking like a painter, holding a palette and painting on a canvas. Isolated on a plain white background",
    "A mascot in the reference image, looking like a soccer player, kicking a soccer ball in mid-action. Isolated on a plain white background",
    "A mascot in the reference image, looking like a magician, holding a magic wand and pulling a rabbit from a hat. Isolated on a plain white background",
    "A mascot in the reference image, looking like a firefighter, holding a hose and spraying water. Isolated on a plain white background",
    "A mascot in the reference image, looking like a gardener, holding a watering can and watering flowers. Isolated on a plain white background",
    "A mascot in the reference image, looking like a photographer, holding a camera and taking a picture. Isolated on a plain white background",
]

# Base prompt for the mascot
BASE_PROMPT = (
    "Cute plush bee mascot with a round, unified body and head shape (not separated), "
    "wearing a mustard-yellow knit beanie with a black =} logo patch, [doing activity]. "
    "Stylized 2D illustration with thick outlines and soft shading, cartoonish proportions, "
    "friendly face with big black eyes and a small smile. Isolated on a plain white background, "
    "centered character only, no photorealism"
)

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load Replicate API token
load_dotenv()
REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')
if not REPLICATE_API_TOKEN:
    raise EnvironmentError('Please set the REPLICATE_API_TOKEN environment variable.')

# Initialize Replicate client
client = replicate.Client(api_token=REPLICATE_API_TOKEN)

# Model name
MODEL = "black-forest-labs/flux-kontext-pro"

for i, activity in enumerate(ACTIVITIES, 1):
    try:
        prompt = activity
        print(f"Generating image {i}: {prompt}")

        # Run the model
        output = client.run(
            MODEL,
            input={
                "prompt": prompt,
                "input_image": REFERENCE_IMAGE_URL,
                "output_format": "png"
            }
        )
        out_path_with_bg = os.path.join(OUTPUT_DIR, f"boi-{i}-with-bg.png")
        with open(out_path_with_bg, "wb") as file:
            file.write(output.read())
        print(f"Saved with background: {out_path_with_bg}")

        # Remove background using rembg
        from rembg import remove
        from PIL import Image
        input_image = Image.open(out_path_with_bg)
        output_image = remove(input_image)
        out_path = os.path.join(OUTPUT_DIR, f"boi-{i}.png")
        output_image.save(out_path)
        print(f"Background removed and saved as: {out_path}")
    except Exception as e:
        print(f"Error generating image {i} for activity '{activity}': {e}")
        continue
