from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class MainView(TemplateView):
    template_name = 'soda_beta/helper_main.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        # 장고는 아래의 함수로 쿼리를 알아서 생성 및 실행하고 모델에 담아준다.
        # obj = Makeup.objects.filter(builtin_id=3001)
        # 장고는 또 raw를 써서 쿼리를 날려주고, 모델에 담아준다.
        # obj = Makeup.objects.raw("SELECT id,type FROM makeup WHERE builtin_id=3001")
        # context['model'] = obj
        # Information.objects.raw('SELECT "name" from ')
        return context


class StyleView(TemplateView):
    template_name = 'soda_beta/helper_style.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        return context

    def get(self, request, app, *args, **kwargs):
        context = self.get_context_data()
        context['app'] = app
        return self.render_to_response(context=context)


class QAHelperView(TemplateView):
    template_name = 'soda_beta/soda_qahelper.html'

    """ TemplateView
    template_name이라는 것 자체가 부모가 가지고 있는 것, 장고는 굉장히 많이 상속을 한다.
   detail view, list view 개념 참고 : https://citylock77.tistory.com/66
   """

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        # 장고는 아래의 함수로 쿼리를 알아서 생성 및 실행하고 모델에 담아준다.
        # obj = Makeup.objects.filter(builtin_id=3001)
        # 장고는 또 raw를 써서 쿼리를 날려주고, 모델에 담아준다.
        # obj = Makeup.objects.raw("SELECT id,type FROM makeup WHERE builtin_id=3001")
        # context['model'] = obj
        # Information.objects.raw('SELECT "name" from ')
        return context

    def get(self, request, type, *args, **kwargs):
        context = self.get_context_data()
        # res = requests.get('http://qa-content-b612-api.snow.me/v1/text/overview')
        context['type'] = type

        return self.render_to_response(context)

    # 저장할때 보통 POST쓰고, page를 보통 load 하는것이 get
    # 보통 위와 같이 쓴다. 중간 과정에서 데이터를 주고받음


def qahelper(request):
    if request.method == "POST":
        data = request.POST.get('gender')
        # 데이터를 얻었다 -> 거기에 저장할 때 이름으로 데이터를 저장해서 전달한다. 프론트엔드에서 정하고 백엔드에서 알고 있어야 한다.
        return render(request)
    # 쌩으로 동작 시켜주는 것이 request, 그래서 페이지가 확실히 구분되어 불러올 때 함수형쓰고, 페이지 내부에서 ajax를 쓰거나 한다.
    # render 쫓아가 보면 다 구조화 시켜줬다.

#
