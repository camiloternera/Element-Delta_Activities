from rest_framework import viewsets
from .serializer import * 
from .models import * 

class personasViewset(viewsets.ModelViewSet):
    queryset = personas.objects.all()
    serializer_class = personasSerializer




