from django import forms
from .models import Personagem

class PersonagemForm(forms.ModelForm):
    class Meta:
        model = Personagem
        fields = ['pers_nome', 'pers_idade', 'pers_genero', 'pers_historia', 'pers_caracteristica', 'pers_objetivo']
