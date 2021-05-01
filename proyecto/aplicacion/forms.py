from django import forms
from .models import * 


class usuariosForm(forms.ModelForm):
    
    class Meta:
        model = personas
        fields = "__all__"
