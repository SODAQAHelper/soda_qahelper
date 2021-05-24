from django.urls import path
from helperapp import views

urlpatterns=[
    path('helper/', views.helper),
]