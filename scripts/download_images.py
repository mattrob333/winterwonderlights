import urllib.request, os

imgs = [
    ("about-section.jpg", "https://v3b.fal.media/files/b/0a9f9d27/dU41tKtY6YcDoyLHT5LDO.jpg"),
    ("craftsman-home.jpg", "https://v3b.fal.media/files/b/0a9f9d27/gUOLFvekCy_Q1BCoEPYKc.jpg"),
    ("commercial-lighting.jpg", "https://v3b.fal.media/files/b/0a9f9d27/2pBRnWEf3L07o7RfaF86z.jpg"),
    ("gallery-1.jpg", "https://v3b.fal.media/files/b/0a9f9d28/96mFjF-9VtH96__TrVouM.jpg"),
    ("gallery-2.jpg", "https://v3b.fal.media/files/b/0a9f9d30/ohs5xDlzjs2ddB09VzTm4.jpg"),
    ("gallery-3.jpg", "https://v3b.fal.media/files/b/0a9f9d28/QORrM8BG6BFCDNcJVpTf7.jpg"),
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
