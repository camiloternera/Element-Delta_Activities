from django.shortcuts import render
from .models import *
from .forms import * 

def login_ajax(request):     
    return render(request, 'login_ajax.html')

def index(request):
    return render(request, 'index.html')

def usuarios(request): 
    usuarios = personas.objects.all()
    context_user = {
       "usuario": usuarios

    }
    return render(request, 'usuarios.html', context_user)

def registro(request): 
    
    form = usuariosForm
    context_form = {

        'users_form': form
    }
    return render(request, 'registro.html', context_form)




