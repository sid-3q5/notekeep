from turtle import title
from django.db import models

# Create your models here.
class Notes(models.Model):
    title = models.CharField(max_length=30,blank=True, null=True)
    description = models.TextField(max_length=40000,blank=True, null=True)
    pin = models.BooleanField(default=False)
    tagline = models.CharField(max_length=30, default="")
    created_at = models.CharField(max_length=30,blank=True, null=True)
    updated_at = models.CharField(max_length=30,blank=True, null=True)
    
    
    # class Meta:
    #     ordering = ('pin',)

    def __str__(self) -> str:
        return self.title