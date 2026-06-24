import json, urllib.request, urllib.error, sys, os

FAL_KEY = "dce7c5fa-05b8-4e6f-b9f2-03362632e4a5:9973cea0da523692a332109a512263e3"
HEADERS = {"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"}

prompts = [
    ("gallery-4", "A grand entrance to a residential neighborhood at night with multiple homes decorated with warm white Christmas lights. Elegant archway entrance with lit trees lining the street. Beautiful professional holiday lighting. Twilight sky. No snow. Professional photography, realistic."),
    ("gallery-5", "A historic brick building with white columns, beautifully decorated with warm holiday lights strung along the front facade and columns. Commercial property Christmas lighting. Evening dusk with golden light glow. Professional photography, realistic, no snow."),
    ("gallery-6", "A wide porch of a southern style home decorated with warm white Christmas lights wrapped around every column and along the porch railing. Wreath on the front door with lights. Cozy, elegant, welcoming. Twilight. No snow. Professional holiday lighting photography."),
]

for name, prompt in prompts:
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
