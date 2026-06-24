import urllib.request, os

imgs = [
    ("gallery-4.jpg", "https://v3b.fal.media/files/b/0a9f9ec9/JXw9fRPCpeaFtMg9Hvxg9.jpg"),
    ("gallery-5.jpg", "https://v3b.fal.media/files/b/0a9f9ec9/OHqVdVKBh5-oI_goeKGi6.jpg"),
    ("gallery-6.jpg", "https://v3b.fal.media/files/b/0a9f9ed2/fcwSXk7LPHRnPompgvs9J.jpg"),
]

dest = r"C:\Users\mrobe\Documents\Projects\wwlights-tmp\public\images"
for name, url in imgs:
    path = os.path.join(dest, name)
    try:
        urllib.request.urlretrieve(url, path)
        size = os.path.getsize(path)
        print(f"✓ {name} ({size} bytes)")
    except Exception as e:
        print(f"✗ {name}: {e}")
