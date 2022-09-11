#
from django.db import transaction
from rest_framework import serializers
# from models import Persons
from django.contrib.auth.models import User
from .models import Book
from rest_framework.authtoken.models import Token
# class Personserializer(serializers.ModelSerializer):
#     class Meta:
#         model=Persons
#         fields='__all__'
#

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email','password']
        extra_kwargs={'password':{'write_only':True, 'required':True}}
    @transaction.atomic
    def create(self, validated_data):

        user = User.objects.create_user(**validated_data)
        user.is_admin=True
        user.is_staff=True
        user.is_superuser=True
        # user.save(using=self.db)
        user.save()
        Token.objects.create(user=user)
        return user

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields="__all__"
