import requests
from django.http import JsonResponse


def call_style_api(request):
    response = requests.get("http://soda-api.snow.me/v1/style/overview")
    return JsonResponse(response.json())
