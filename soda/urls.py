"""soda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from soda_beta import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sodabeta/', include('soda_beta.urls')),
    path('', views.MainView.as_view(), name='home'),
]

# 1:현재 마이그레이션 안함, db 다른거 쓰기 때문에 최초로 생성할 필요가 없어서,,,기본 유저 정보 만들어진다. 편리하게 관리할 수 있는 페이지가 만들어진다.
# 3:처음 ''치면 홈페이지 나와라
# 2:sodabeta > urls.py의 qahelper로 들어가면 연결되도록 한다.그래서 도메인 다음에 붙고 나서, 실행
