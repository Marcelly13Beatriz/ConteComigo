from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

from .forms import PersonagemForm
from .models import Usuario, Personagem


def cadastro(request):
    if request.method == 'POST':
        print(request.POST)  # Debugging line
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password_confirmation = request.POST.get('password-confirmation')

        if password != password_confirmation:
            messages.error(request, 'As senhas não coincidem.')
        else:
            if Usuario.objects.filter(user_email=email).exists():
                messages.error(request, 'E-mail já cadastrado.')
            else:
                usuario = Usuario(user_nome=username, user_email=email, user_senha=password)
                usuario.save()
                messages.success(request, 'Conta criada com sucesso! Você pode fazer login agora.')
                return redirect('login')

    return render(request, 'planner/cadastro.html')


def configuracao_conta(request):
    return render(request, 'planner/configuracao_conta.html')


def criar(request):
    return render(request, 'planner/criar.html')


def criar_personagem(request):
    if request.method == 'POST':
        # Collect form data
        name = request.POST.get('name')
        age = request.POST.get('age')
        gender = request.POST.get('gender')
        backstory = request.POST.get('backstory')
        traits = request.POST.get('traits')
        goals = request.POST.get('goals')

        # Check if the required fields are filled out (basic validation)
        if not name or not age or not gender:
            messages.error(request, 'Por favor, preencha todos os campos obrigatórios.')
            return redirect('criar_personagem')  # Redirect to the form page if validation fails

        # Save the new Personagem instance
        personagem = Personagem(
            pers_nome=name,
            pers_idade=age,
            pers_genero=gender,
            pers_historia=backstory,  # Adjust field as needed
            pers_objetivo=goals,
            pers_caracteristica=traits
        )

        personagem.save()  # Save to the database

        messages.success(request, 'Personagem criado com sucesso!')

        # Redirect to the list of personagens or wherever you want
        return redirect('lista_personagens')

    return render(request, 'planner/criar_personagem.html')


def exibir_historia(request):
    return render(request, 'planner/exibir_historia.html')


# def exibir_personagem(request):
#     return render(request, 'planner/exibir_personagem.html')

def exibir_personagem(request, id):
    personagem = get_object_or_404(Personagem, id=id)  # Obtém o personagem pelo ID
    return render(request, 'planner/exibir_personagem.html', {'personagem': personagem})

# def exibir_perfil(request, id):
#     usuario = get_object_or_404(Usuario, id=id)  # Obtém o personagem pelo ID
#     return render(request, 'planner/exibir_perfil.html', {'usuario': usuario})

def exibir_perfil(request):
    # return render(request, 'planner/exibir_conta.html')
    return render(request, 'planner/exibir_conta.html', {'usuario': request.user})

# @login_required
# def exibir_perfil(request):
#     # Verificando se o usuário está autenticado
#     if request.user.is_authenticated:
#         usuario = request.user  # Aqui deve ser uma instância de Usuario
#         return render(request, 'planner/exibir_conta.html', {'usuario': usuario})
#     else:
#         return redirect('login')  # Redireciona para a página de login

def planner(request):
    return render(request, "planner/index.html")


def infomacao_historia(request):
    return render(request, "planner/informacao_historia.html")


def inicio(request):
    return render(request, 'planner/inicio.html')


def lista_personagens(request):
    # Get all personagens from the database
    personagens = Personagem.objects.all()

    # Pass the personagens to the template context
    return render(request, 'planner/lista_personagens.html', {'personagens': personagens})



def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            usuario = Usuario.objects.get(user_email=email)
            if usuario.user_senha == password:  # No password hashing for simplicity
                request.session['user_id'] = usuario.id
                return redirect('inicio')  # Redirect to a home page
            else:
                messages.error(request, 'Senha incorreta.')
        except Usuario.DoesNotExist:
            messages.error(request, 'E-mail não encontrado.')

    return render(request, 'planner/login.html')


def excluir_personagem(request, id):
    personagem = get_object_or_404(Personagem, id=id)
    personagem.delete()
    return redirect('lista_personagens')


def editar_personagem(request, id):
    personagem = get_object_or_404(Personagem, id=id)

    if request.method == "POST":
        form = PersonagemForm(request.POST, instance=personagem)
        if form.is_valid():
            form.save()
            return redirect('exibir_personagem', id=personagem.id)  # Redireciona para a página de detalhes
    else:
        form = PersonagemForm(instance=personagem)

    return render(request, 'planner/editar_personagem.html', {'form': form, 'personagem': personagem})