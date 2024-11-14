from django.db import models


class Usuario(models.Model):
    user_nome = models.CharField(max_length=60, null=True)
    user_email = models.EmailField(max_length=256, unique=True)
    user_senha = models.CharField(max_length=256, null=True)

    class Meta:
        db_table = 'usuario'


class Historia(models.Model):
    his_titulo = models.CharField(max_length=96)
    his_sinopse = models.CharField(max_length=255, null=True)
    his_descricao = models.CharField(max_length=255, null=True)
    his_enredo = models.CharField(max_length=255, null=True)
    his_user_fk = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    class Meta:
        db_table = 'historia'


class Cenario(models.Model):
    cen_cultura = models.CharField(max_length=255, null=True)
    cen_descricao = models.CharField(max_length=255, null=True)
    cen_fauna = models.CharField(max_length=255, null=True)
    cen_his_fk = models.ForeignKey(Historia, on_delete=models.CASCADE)

    class Meta:
        db_table = 'cenario'


class Personagem(models.Model):
    pers_nome = models.CharField(max_length=96)
    pers_genero = models.CharField(max_length=64, null=True)
    pers_idade = models.SmallIntegerField(null=True)
    pers_objetivo = models.CharField(max_length=255, null=True)
    pers_historia = models.CharField(max_length=255, null=True)
    pers_caracteristica = models.CharField(max_length=255, null=True)
    pers_his_fk = models.ForeignKey(Historia, null=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'personagem'
