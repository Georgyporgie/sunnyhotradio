import os
import urllib.parse

# Mapping of MP3 files to their respective base URLs
file_base_urls = {
    "Miami Funk Machine - Hollywood.mp3": "https://dancemusic06.netlify.app/",
    "Another Song - Example.mp3": "https://anothermusicplatform.netlify.app/",
    "Yet Another Song - Example.mp3": "https://yetanothermusicplatform.netlify.app/"
}

# Directory containing your MP3 files
directory = "/path/to/your/mp3/files"

# Generate URLs for each file
urls = []
for file_name, base_url in file_base_urls.items():
    encoded_path = urllib.parse.quote(base_url + file_name, safe=':/')
    urls.append(encoded_path)

# Print the URLs
for url in urls:
    print(url)
