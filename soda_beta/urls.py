from django.urls import path

from soda_beta import views, _ajax

app_name = 'soda_beta'
urlpatterns = [

    path('qahelper/<slug:type>', views.QAHelperView.as_view(), name='qa_helper'),
    path('<slug:app>/style', views.StyleView.as_view(), name='app_style'),
    path('ajax/api/style', _ajax.call_style_api, name='api_style')
    ]

# 메인 홈 > QAHelperView를 추가함. 이렇게 설정하는 방법들은 정규식으로도 할 수 있고,
#정규식은 숫자를 OR/AND 개념으로 => 참고 : https://wayhome25.github.io/django/2017/03/18/django-ep2-regx/
# 함수형 뷰