import datetime

from dateutil.relativedelta import relativedelta

from votacao.models import Questao, Opcao
from django.utils import timezone

import json

# apaga os registos nas tabelas da BD
def delete_questions():
    questoes = Questao.objects.all()
    for questao in questoes:
        questao.delete()

# criar questões de exemplo (com base em JSON)
def create_questions(questions_json):
    for questao in questions_json["questoes"]:
        q = Questao.objects.create(questao_texto=questao["texto"], pub_data=timezone.now())
        for opcao in questao["opcoes"]:
            q.opcao_set.create(opcao_texto=opcao, votos=0)

#a) mostrar - assume que os __str__ existem nos modelos de dados
def show_questions():
    for questao in Questao.objects.all():
        print(questao)

#b) & c)
def show_questions_filter_by_start_and_nVotes(text, nVotes = None):
    questions = Questao.objects.filter(questao_texto__istartswith=text)
    if nVotes is None:
        for questao in questions:
            print(questao)
    else:
        for questao in questions:
            print(questao.questao_texto)
            for opcao in questao.opcao_set.filter(votos__gte=2):
                print(" - " + str(opcao) + '\n')

#d)
def show_questions_by_age(year):
    date = timezone.now() - relativedelta(years=year)
    questions = Questao.objects.filter(pub_data__gte = date)
    for questao in questions:
        print(questao.pub_data.date())
        print(questao)

#e)
def total_votes():
    return sum(opcao.votos for opcao in Opcao.objects.all())

#f)
def show_most_voted_option_by_question():
    questions = Questao.objects.all()
    for questao in questions:
        print(questao.questao_texto)
        print(" - " + str(questao.opcao_set.order_by('-votos').first()) + '\n')


## main ##
    #delete_questions()

#with open('questoes_exemplo.json', encoding='utf-8') as json_file:
#    QUESTOES = json.load(json_file)

#delete_questions()

#create_questions(QUESTOES)

print("a)")
show_questions()
print("b)")
show_questions_filter_by_start_and_nVotes("Gostas de")
print("c)")
show_questions_filter_by_start_and_nVotes("Gostas de", 2)
print("d)")
show_questions_by_age(3)
print("e)")
print("Total de votos: " + str(total_votes()) + '\n')
print("f)")
show_most_voted_option_by_question()



