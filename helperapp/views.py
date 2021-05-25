from django.shortcuts import render, HttpResponse

# Create your views here.

# def helper(request):
#     return HttpResponse("QA Helper")

def main(request):
    return render(request, 'helperapp/helper_main.html')

def style(request):
    return render(request, 'helperapp/helper_style.html')

def filter(request):
    return render(request, 'helperapp/helper_filter.html')

def studio(request):
    return render(request, 'helperapp/helper_studio.html')