# from django.shortcuts import render

# import os
# import yt_dlp
# import logging
# from django.http import JsonResponse
# from django.conf import settings

# # Create your views here.


# # Setup logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# # Directory to store downloaded videos
# DOWNLOAD_DIR = 'downloads'
# os.makedirs(DOWNLOAD_DIR, exist_ok=True)

# file_counter = 0  # Filename counter

# def map_resolution_to_quality(resolution):
#     quality_map = {
#         144: '144p',
#         240: '240p',
#         360: '360p',
#         480: '480p',
#         720: '720p',
#         1080: '1080p',
#         1440: '1440p',
#         2160: '4K'
#     }
#     return quality_map.get(resolution, f'{resolution}p')

# def progress_hook(d):
#     if d['status'] == 'finished':
#         logger.info(f"Done downloading video '{d['filename']}'")

# def index(request):
#     return render(request, 'index.html')

# def get_qualities(request):
#     try:
#         url = request.POST.get('url')
#         if not url:
#             return JsonResponse({'success': False, 'error': 'No URL provided'}, status=400)
        
#         ydl_opts = {
#             'ffmpeg_location': '/usr/bin',  # Update as needed
#             'format': 'bestaudio/best',
#             'noplaylist': True
#         }

#         with yt_dlp.YoutubeDL(ydl_opts) as ydl:
#             info = ydl.extract_info(url, download=False)
#             formats = info.get('formats', [])
#             quality_dict = {}
            
#             for fmt in formats:
#                 height = fmt.get('height')
#                 if height and 144 <= height <= 2160:
#                     if height not in quality_dict:
#                         quality_dict[height] = {
#                             'quality': map_resolution_to_quality(height),
#                             'url': fmt.get('url'),
#                             'filesize': fmt.get('filesize')
#                         }
            
#             quality_options = list(quality_dict.values())
        
#         return JsonResponse({'success': True, 'qualities': quality_options})
    
#     except Exception as e:
#         logger.error(f"Error fetching qualities: {e}")
#         return JsonResponse({'success': False, 'error': str(e)}, status=500)

# def download(request):
#     global file_counter
#     try:
#         url = request.POST.get('url')
#         quality_url = request.POST.get('quality_url')
        
#         if not url or not quality_url:
#             return JsonResponse({'success': False, 'error': 'No URL or quality URL provided'}, status=400)
        
#         file_counter += 1
#         filename = f"video{file_counter}.%(ext)s"

#         ydl_opts = {
#             'ffmpeg_location': '/usr/bin',
#             'outtmpl': os.path.join(DOWNLOAD_DIR, filename),
#             'format': 'best',  # Ensures audio and video are merged
#             'noplaylist': True,
#             'progress_hooks': [progress_hook],
#             'quiet': False
#         }
        
#         with yt_dlp.YoutubeDL(ydl_opts) as ydl:
#             ydl.download([quality_url])

#         return JsonResponse({'success': True})
    
#     except Exception as e:
#         logger.error(f"Error downloading video: {e}")
#         return JsonResponse({'success': False, 'error': str(e)}, status=500)


from django.shortcuts import render
import os
import yt_dlp
import logging
from django.http import JsonResponse
from django.conf import settings

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Directory to store downloaded videos
DOWNLOAD_DIR = 'downloads'
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

file_counter = 0  # Filename counter


def map_resolution_to_quality(resolution):
    quality_map = {
        144: '144p',
        240: '240p',
        360: '360p',
        480: '480p',
        720: '720p',
        1080: '1080p',
        1440: '1440p',
        2160: '4K'
    }
    return quality_map.get(resolution, f'{resolution}p')


def progress_hook(d):
    if d['status'] == 'finished':
        logger.info(f"Done downloading video '{d['filename']}'")


def index(request):
    """Render the homepage."""
    return render(request, 'index.html')


def get_qualities(request):
    """Fetch available video quality options from the given URL."""
    try:
        url = request.POST.get('url')
        if not url:
            return JsonResponse({'success': False, 'error': 'No URL provided'}, status=400)
        
        ydl_opts = {
            'ffmpeg_location': '/usr/bin',  # Path to FFmpeg
            'format': 'bestvideo+bestaudio/best',  # Ensures audio and video streams are downloaded
            'merge_output_format': 'mp4',  # Merge video and audio into MP4
            'noplaylist': True,  # Ensure only one video is downloaded
            'quiet': False,
            'verbose': True,
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            formats = info.get('formats', [])
            quality_dict = {}
            
            for fmt in formats:
                height = fmt.get('height')
                if height and 144 <= height <= 2160:
                    if height not in quality_dict:
                        quality_dict[height] = {
                            'quality': map_resolution_to_quality(height),
                            'url': fmt.get('url'),
                            'filesize': fmt.get('filesize')
                        }
            
            quality_options = list(quality_dict.values())
        
        return JsonResponse({'success': True, 'qualities': quality_options})
    
    except Exception as e:
        logger.error(f"Error fetching qualities: {e}")
        return JsonResponse({'success': False, 'error': str(e)}, status=500)


def download(request):
    try:
        url = request.POST.get('url')
        
        if not url:
            return JsonResponse({'success': False, 'error': 'No URL provided'}, status=400)
        i = 0
        ext = 'mp4'
        base_name = "video"
        filename = f"{base_name}{i}.{ext}"
    
        while os.path.exists(os.path.join(DOWNLOAD_DIR, filename)):
            i += 1
            filename = f"{base_name}{i}.{ext}"

        ydl_opts = {
            'ffmpeg_location': '/usr/bin',
            'outtmpl': os.path.join(DOWNLOAD_DIR, filename),
            'format': 'bestvideo+bestaudio/best',
            'merge_output_format': 'mp4',
            'quiet': False,
            'verbose': True
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        
        return JsonResponse({'success': True, 'filename': filename})
    
    except Exception as e:
        logger.error(f"Error downloading video: {e}")
        return JsonResponse({'success': False, 'error': str(e)}, status=500)
