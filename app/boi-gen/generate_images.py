import os
import time
import requests
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")
HEADERS = {
    "Authorization": f"Bearer {API_KEY}"
}

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

# Generate images using edits endpoint
for i, activity in enumerate(activities, start=1):
    print(f"\n--- Activity {i}/{len(activities)}: {activity} ---")
    print("Preparing prompt...")

    prompt = (
        f"A 2D digital illustration of a cute plush bee mascot from the reference image, "
        f"wearing a mustard yellow beanie with a minimalist black '=}}' logo on it. "
        f"The plushie is {activity}, in a cheerful, playful pose. "
        "No background — transparent PNG-style image with clean edges. "
        "Isolated character, centered in frame. "
        "Soft shadows under the plushie if needed for realism. "
        "Illustration style is clean, semi-flat with soft shading, designed to fit into a modern UI card layout. "
        "No text, no border, no scenery."
    )

    print("Opening reference image...")
    with open("ref/da-boi.png", "rb") as image_file:  # Make sure this is a PNG!
        print("Sending request to OpenAI edits endpoint...")
        edit_resp = requests.post(
            "https://api.openai.com/v1/images/edits",
            headers=HEADERS,
            files={
                "image": image_file,
                # "mask": open("path/to/mask.png", "rb")  # Optional: add a mask if you want to edit only part of the image
            },
            data={
                "prompt": prompt,
                "n": 1,
                "size": "1024x1024",
                "response_format": "url"
            }
        )

    print(f"Response status code: {edit_resp.status_code}")
    print(f"Response text: {edit_resp.text[:300]}{'...' if len(edit_resp.text) > 300 else ''}")

    # Parse and save image
    try:
        image_url = edit_resp.json()["data"][0]["url"]
        print(f"Image URL: {image_url}")
        print("Downloading image...")
        image_data = requests.get(image_url).content
        filename = f"generated/boi-{i}.png"
        with open(filename, "wb") as f:
            f.write(image_data)
        print(f"Saved to: {filename}")
    except Exception as e:
        print("Failed to generate or save image:", edit_resp.text)
        print("Exception:", e)

    print("Sleeping for 1 second to respect rate limits...")
    time.sleep(1)  # be kind to the rate limiter
