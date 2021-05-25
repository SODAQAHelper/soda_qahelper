from django.urls import path
from helperapp import views

urlpatterns=[
    path('', views.main),
    path('style/', views.style),
    path('filter/', views.filter),
    path('studio/', views.studio),
]