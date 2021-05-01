from django.contrib import admin
from .models import * 


class personaAdmin(admin.ModelAdmin):
    list_display = ('Nombre', 'Apellido', 'Edad', 'Ciudad')
    
 

admin.site.register(personas, personaAdmin)