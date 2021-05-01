from django.db import models


class personas(models.Model):

    Nombre = models.CharField(max_length=24)
    Apellido = models.CharField(max_length=24)
    Edad = models.IntegerField(blank= False)
    Ciudad = models.CharField(max_length=20)

    def __str__(self):
        return self.Nombre
    

