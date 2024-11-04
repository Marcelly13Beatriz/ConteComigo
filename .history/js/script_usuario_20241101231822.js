<!-- Barra Superior -->
<div class="d-flex justify-content-between align-items-center bg-light text-dark p-3"> 
    <a href="/html/usuario.html"><img src="/imagens/g1.png" alt="Conta Comigo Logo" height="50"></a> 

    <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle fs-3"></i> 
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Configurações</a></li>
            <li><a class="dropdown-item" href="#">Sair</a></li>
        </ul>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <!-- Menu Lateral com Collapse -->
        <div class="col-auto p-0">
            <nav class="side-menu p-3 d-flex flex-column">
                <button class="btn btn-primary w-100 mb-2" id="menuToggle">
                    <i class="bi bi-list"></i>
                </button>
                <div class="collapse" id="menuItems">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="mb-0">Menu</h5>
                        <button id="closeMenu" class="btn-close" aria-label="Close menu"></button>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Minhas Histórias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Personagens</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cenários</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dicas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <!-- Conteúdo Principal -->
        <div class="col p-4">
            <div class="row g-4">
                <!-- Card de Nova História -->
                <a href="/html/criar.html">
                    <div class="col-md-3">
                        <div class="story-card text-center custom-size">
                            <span class="display-1">+</span>
                        </div>
                    </a>
                    <a href="/html/criar.html"><button class="btn btn-primary new-story-button mt-2 size">Nova História</button></a>
                </div>
            </div>
        </div>
    </div>
</div>