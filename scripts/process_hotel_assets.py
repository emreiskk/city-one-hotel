import os
import sys
import shutil
import subprocess
import json
import unicodedata

source_dir = 'otel görselleri'
dest_base = 'public/assets/hotel'

def norm(text):
    return unicodedata.normalize('NFC', text)

# Map specific known files
file_mapping = {
    # Rooms
    "standartroom.jpeg": "rooms/standart-1.jpg",
    "standartroom1.jpeg": "rooms/standart-2.jpg",
    "speriorroom.jpeg": "rooms/superior-1.jpg",
    "speriorroom1.jpeg": "rooms/superior-2.jpg",
    "doupleroom.jpeg": "rooms/double-1.jpg",
    "familyroom.jpeg": "rooms/family-1.jpg",
    "jakuziliroom.jpeg": "rooms/jakuzi-1.jpg",
    "jakuziliroom1.jpeg": "rooms/jakuzi-2.jpg",
    "jakuzi.jpeg": "rooms/jakuzi-detail.jpg",
    "room.jpeg": "rooms/room-detail-1.jpg",
    "room1.jpeg": "rooms/room-detail-2.jpg",
    "room2.jpeg": "rooms/room-detail-3.jpg",
    "banyo.jpeg": "rooms/banyo-1.jpg",

    # Exterior & Lobby
    "dışcephe.jpeg": "exterior/discephe-1.jpg",
    "dışcephe1.jpeg": "exterior/discephe-2.jpg",
    "dışcephe2.jpeg": "exterior/discephe-3.jpg",
    "dışcephe3.jpeg": "exterior/discephe-4.jpg",
    "dışcephe4.jpeg": "exterior/discephe-5.jpg",
    "dışcephe5.jpeg": "exterior/discephe-6.jpg",
    "lobi.jpeg": "lobby/lobi-1.jpg",
    "lobi1.jpeg": "lobby/lobi-2.jpg",
    "logo.jpeg": "logo.jpg",

    # SPA
    "havuz.jpeg": "spa/havuz-1.jpg",
    "hamam.jpeg": "spa/hamam-1.jpg",
    "hamam1.jpeg": "spa/hamam-2.jpg",
    "Gelin hamamı.jpeg": "spa/gelin-hamami.jpg",
    "Gelin hamamı2.mp4": "videos/gelin-hamami.mp4",
    "spa.jpeg": "spa/spa-1.jpg",
    "spa1.jpeg": "spa/spa-2.jpg",
    "spa vitamin bar.jpeg": "spa/vitamin-bar-1.jpg",
    "spa vitamin bar1.jpeg": "spa/vitamin-bar-2.jpg",

    # Dining
    "sini restaurant 750 kişi kapasite.jpeg": "dining/sini-restaurant-750.jpg",
    "kahvaltısini.jpeg": "dining/breakfast/breakfast-1.jpg",
    "kahvaltısini1.jpeg": "dining/breakfast/breakfast-2.jpg",
    "kahvaltısini2.jpeg": "dining/breakfast/breakfast-3.jpg",
    "kahvaltısini3.jpeg": "dining/breakfast/breakfast-4.jpg",
    "kahvaltısini4.jpeg": "dining/breakfast/breakfast-5.jpg",
    "kahvaltısini5.jpeg": "dining/breakfast/breakfast-6.jpg",
    "kahvaltısini6.jpeg": "dining/breakfast/breakfast-7.jpg",
    "kahvaltısini7.jpeg": "dining/breakfast/breakfast-8.jpg",
    "kahvaltısini8.jpeg": "dining/breakfast/breakfast-9.jpg",
    "kahvaltısini9.jpeg": "dining/breakfast/breakfast-10.jpg",
    "kahvaltısini10.jpeg": "dining/breakfast/breakfast-11.jpg",
    "kahvaltısini11.jpeg": "dining/breakfast/breakfast-12.jpg",
    "restaurant.jpeg": "dining/alacarte/alacarte-1.jpg",
    "restaurant1.jpeg": "dining/alacarte/alacarte-2.jpg",
    "restaurant2.jpeg": "dining/alacarte/alacarte-3.jpg",
    "restaurant3.jpeg": "dining/alacarte/alacarte-4.jpg",
    "restaurant4.jpeg": "dining/alacarte/alacarte-5.jpg",

    # Halls
    "Erciyes salon.jpeg": "halls/erciyes/erciyes-1.jpg",
    "Kayseri salon.jpeg": "halls/kayseri/kayseri-1.jpg",
    "Kayseri salon1.jpeg": "halls/kayseri/kayseri-2.jpg",
    "Kayseri salon2.jpeg": "halls/kayseri/kayseri-3.jpg",
    "Kayseri salon3.jpeg": "halls/kayseri/kayseri-4.jpg",
    "Kayseri salon4.jpeg": "halls/kayseri/kayseri-5.jpg",
    "Kayseri salon5.jpeg": "halls/kayseri/kayseri-6.jpg",
    "Kayseri salon6.jpeg": "halls/kayseri/kayseri-7.jpg",
    "Kayseri salon7.jpeg": "halls/kayseri/kayseri-8.jpg",
    "Kayseri salon8.jpeg": "halls/kayseri/kayseri-9.jpg",
    "Kayseri salon9.mp4": "videos/kayseri-salonu.mp4",
    "Sini salon.mp4": "videos/sini-salonu.mp4",

    "Yelken salon.jpeg": "halls/yelken/yelken-1.jpg",
    "Yelken salon1.jpeg": "halls/yelken/yelken-2.jpg",
    "Yelken salon2.jpeg": "halls/yelken/yelken-3.jpg",
    "Yelken salon3.jpeg": "halls/yelken/yelken-4.jpg",
    "Yelken salon4.jpeg": "halls/yelken/yelken-5.jpg",
    "Yelken salon5.jpeg": "halls/yelken/yelken-6.jpg",
    "Yelken salon6.jpeg": "halls/yelken/yelken-7.jpg",

    "efes salon.jpeg": "halls/efes/efes-1.jpg",
    "efes salon1.jpeg": "halls/efes/efes-2.jpg",
    "efes salon2.jpeg": "halls/efes/efes-3.jpg",
    "efes salon3.jpeg": "halls/efes/efes-4.jpg",
    "efes salon4.jpeg": "halls/efes/efes-5.jpg",
    "efes salon5.jpeg": "halls/efes/efes-6.jpg",
    "efes salon6.jpeg": "halls/efes/efes-7.jpg",

    "kapadokya.jpeg": "halls/kapadokya/kapadokya-1.jpg",
    "kapadokya1.jpeg": "halls/kapadokya/kapadokya-2.jpg",
    "kapadokya2.jpeg": "halls/kapadokya/kapadokya-3.jpg",
    "kapadokya3.jpeg": "halls/kapadokya/kapadokya-4.jpg",
    "kapadokya4.jpeg": "halls/kapadokya/kapadokya-5.jpg",
    "kapadokya5.jpeg": "halls/kapadokya/kapadokya-6.jpg",
    "kapadokya6.jpeg": "halls/kapadokya/kapadokya-7.jpg",
}

# Normalize dict keys
normalized_mapping = {norm(k): v for k, v in file_mapping.items()}

def optimize_image(src, dst):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    # Using sips to resize to max 1600px and compress to 82% quality
    cmd = ['sips', '-Z', '1600', '-s', 'format', 'jpeg', '-s', 'formatOptions', '82', src, '--out', dst]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode != 0:
        shutil.copy2(src, dst)

def copy_video(src, dst):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)

processed_files = set()
manifest = {
    "rooms": {},
    "halls": {},
    "dining": {},
    "spa": {},
    "exterior": [],
    "lobby": [],
    "gallery": [],
    "videos": {}
}

# 1. Process explicit mappings from root
root_files = os.listdir(source_dir)
for f in root_files:
    if f.startswith('.'): continue
    nf = norm(f)
    if nf in normalized_mapping:
        src = os.path.join(source_dir, f)
        rel_dst = normalized_mapping[nf]
        dst = os.path.join(dest_base, rel_dst)
        if rel_dst.endswith('.mp4'):
            copy_video(src, dst)
        else:
            optimize_image(src, dst)
        processed_files.add(src)
        print(f"Mapped: {f} -> {rel_dst}")

# 2. Process all remaining files (WhatsApp images and videos)
gallery_idx = 1
video_idx = 1

for root, dirs, files in os.walk(source_dir):
    for f in sorted(files):
        if f.startswith('.'): continue
        src = os.path.join(root, f)
        if src in processed_files: continue

        nf = norm(f)
        if nf in normalized_mapping:
            rel_dst = normalized_mapping[nf]
            dst = os.path.join(dest_base, rel_dst)
            if rel_dst.endswith('.mp4'):
                copy_video(src, dst)
            else:
                optimize_image(src, dst)
            processed_files.add(src)
            print(f"Mapped (nested): {f} -> {rel_dst}")
            continue

        # Remaining files:
        if f.lower().endswith(('.jpeg', '.jpg', '.png')):
            rel_dst = f"gallery/gallery-{gallery_idx:02d}.jpg"
            dst = os.path.join(dest_base, rel_dst)
            optimize_image(src, dst)
            processed_files.add(src)
            manifest["gallery"].append(f"/assets/hotel/{rel_dst}")
            print(f"Gallery [{gallery_idx}]: {f} -> {rel_dst}")
            gallery_idx += 1
        elif f.lower().endswith('.mp4'):
            rel_dst = f"videos/hotel-tour-{video_idx:02d}.mp4"
            dst = os.path.join(dest_base, rel_dst)
            copy_video(src, dst)
            processed_files.add(src)
            manifest["videos"][f"tour_{video_idx}"] = f"/assets/hotel/{rel_dst}"
            print(f"Video Tour [{video_idx}]: {f} -> {rel_dst}")
            video_idx += 1

print(f"\nAll files processed! Total processed: {len(processed_files)}")
