from django.http import HttpResponse
from django.shortcuts import render
from votacao.models import Questao


# Create your views here.
def index(request):
    questions = Questao.objects.all()
    return render(request, 'index.html', {"questions": questions})

def outro(request):
    return HttpResponse("<h1>Esta é a página do outro</h1>")
