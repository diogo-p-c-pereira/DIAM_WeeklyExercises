from django.db import models

#Questao: texto da questao e data de publicacao
class Questao(models.Model):
    questao_texto = models.CharField(max_length=200)
    pub_data = models.DateTimeField('data de publicacao')

    def __str__(self):
        texto = self.questao_texto + '\n'
        for opcao in self.opcao_set.all():
            texto += " - " + str(opcao) + '\n'
        return texto

#Opcao: texto da opcao e numero de votos
#chave estrangeira muitos-para-um - uma Questao pode ter várias intâncias de Opcao
class Opcao(models.Model):
    questao = models.ForeignKey(Questao, on_delete=models.CASCADE)
    opcao_texto = models.CharField(max_length=200)
    votos = models.IntegerField(default=0)

    def __str__(self):
        return self.opcao_texto + "- votos: " + str(self.votos)
