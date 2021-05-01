from rest_framework import serializers
from .models import * 


class personasSerializer(serializers.ModelSerializer): 
    class Meta:
        model = personas
        fields = '__all__'