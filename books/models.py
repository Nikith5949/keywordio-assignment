from django.db import models
# Create your models here.
from django.contrib.auth.models import User
#
# class Persons(models.Model):
#     user = models.OneToOneField(User,on_delete=models.CASCADE, related_name='person')
class Book(models.Model):
    title=models.CharField(null=False,max_length=36,unique=True)
    description=models.TextField(max_length=300,blank=True)
    price = models.DecimalField(max_digits=6,default=0,decimal_places=2)
    book_created=models.DateField(auto_now=True)
    # is_published=models.BooleanField(default=False)
    author=models.CharField(max_length=30,blank=False)

