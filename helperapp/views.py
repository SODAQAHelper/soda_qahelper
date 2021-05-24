from django.shortcuts import render, HttpResponse

# Create your views here.

# def helper(request):
#     return HttpResponse("QA Helper")

def helper(request):
    return render(request, 'helperapp/helper_main.html')