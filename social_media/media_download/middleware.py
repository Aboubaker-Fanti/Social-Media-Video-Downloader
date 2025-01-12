from django.http import JsonResponse

class CustomCORSHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Set CORS headers
        response['Access-Control-Allow-Origin'] = '*'  # or specify a specific domain
        response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        response['Access-Control-Allow-Credentials'] = 'true'

        # Handling preflight (OPTIONS) requests
        if request.method == 'OPTIONS':
            return JsonResponse({'message': 'CORS preflight response'}, status=200)

        return response
