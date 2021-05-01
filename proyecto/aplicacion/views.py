from django.shortcuts import render
from .models import *

def login_ajax(request):     
    return render(request, 'login_ajax.html')

def index(request):
    return render(request, 'index.html')


