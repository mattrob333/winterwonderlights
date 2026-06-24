import json, urllib.request, urllib.error, sys, os

FAL_KEY = "dce7c5fa-05b8-4e6f-b9f2-03362632e4a5:9973cea0da523692a332109a512263e3"
HEADERS = {"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"}

prompts = [
    ("about", "A large beautiful southern estate mansion at dusk with professional holiday lighting. Warm white Christmas lights along every roofline, columns, and landscape trees. Elegant golden glow reflecting on the property. No snow. Premium residential holiday lighting installation photography, realistic, high resolution."),
    ("craftsman", "A cozy two-story craftsman home at twilight beautifully decorated with warm white Christmas lights along the roofline, around windows, and on front porch columns. Pathway lights leading to the door. Landscape lighting on trees and shrubs. Inviting warm glow. No snow. Professional holiday lighting photography, realistic, high resolution."),
    ("commercial", "A commercial shopping center at night with professional Christmas light installation. Warm white holiday lights on building facades, columns, and landscape trees. Elegant festive atmosphere. Storefronts with warm glow. No snow. Commercial holiday lighting photography, realistic, high resolution."),
    ("gallery1", "A colonial style home with elegant warm white Christmas lights outlining the roof, windows, and architectural features. Beautiful landscape lighting on mature trees. Twilight scene with golden glow. No snow. Professional holiday lighting portfolio photography, high resolution, realistic."),
    ("gallery2", "A modern home with sleek warm white holiday lighting. Clean lines, minimal design. Christmas lights along roofline and on modern landscape features. Twilight blue sky with warm light contrast. No snow. Professional photography, realistic."),
    ("gallery3", "A brick traditional home with colorful Christmas lights and warm white accents. Multi-color LED holiday lighting on roofline and landscaping. Joyful festive atmosphere. Evening scene. Professional holiday lighting photography, realistic."),
]

for i, (name, prompt) in enumerate(prompts):
    url = "https://fal.run/fal-ai/flux/dev"
    payload = {"prompt": prompt, "image_size": "landscape_4_3", "num_images": 1}
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            result = json.loads(resp.read())
            img_url = result["images"][0]["url"]
            print(f"✓ {name}: {img_url}")
    except urllib.error.HTTPError as e:
        print(f"✗ {name}: HTTP {e.code}: {e.read().decode()[:200]}")
    except Exception as e:
        print(f"✗ {name}: {e}")
