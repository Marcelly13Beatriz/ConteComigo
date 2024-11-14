from django.urls import path
from . import views

urlpatterns = [
    path("", views.planner, name="planner"),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('login/', views.login, name='login'),
    path('inicio/', views.inicio, name='inicio'),
    path('configuracao_conta/', views.configuracao_conta, name='configuracao_conta'),
    path('lista_personagens/', views.lista_personagens, name='lista_personagens'),
    path('criar/', views.criar, name='criar'),
    path('exibir_historia/', views.exibir_historia, name='exibir_historia'),
    path('criar_personagem/', views.criar_personagem, name='criar_personagem'),
    path('infomacao_historia', views.infomacao_historia, name='informacao_historia'),
    # path('exibir_personagem/', views.exibir_personagem, name='exibir_personagem'),
    path('exibir_personagem/<int:id>/', views.exibir_personagem, name='exibir_personagem'),
    path('excluir_personagem/<int:id>/', views.excluir_personagem, name='excluir_personagem'),
    path('editar_personagem/<int:id>/', views.editar_personagem, name='editar_personagem'),
    path('exibir_perfil', views.exibir_perfil, name='exibir_perfil'),
    # path('exibir_perfil/<int:id>/', views.exibir_perfil, name='exibir_perfil'),
]
