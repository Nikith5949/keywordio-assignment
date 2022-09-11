from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login,logout
from django.contrib import messages
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Book
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import Userserializer,BookSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from books import serializers

# Create your views here.


class Userviewset(viewsets.ModelViewSet):
    queryset =User.objects.all()
    serializer_class = Userserializer


class GetAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(GetAuthToken,self).post(request,*args,**kwargs)
        print(response.data)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        userserializer = Userserializer(user,many=False)
        return Response({'token':token.key, 'user':userserializer.data})




# Books table CRUD operations
class BookView(APIView):
    # authentication_classes = [TokenAuthentication,]
    # permission_classes = [IsAuthenticated,]

    # def get(self, request):
    #
    #
    #     items = Book.objects.all()
    #     serialized = BookSerializer(items, many=True)
    #     if not items:
    #         return Response({'msg':'no items'})
    #
    #
    #     return Response(serialized.data)
    #




    def get(self,request,*args, **kwargs):
        pk = self.kwargs.get('pk')
        print(pk)
        if pk:
            try:
                book = Book.objects.get(id=pk)
                serializer=BookSerializer(book)
                return Response(serializer.data)
            except:
                return Response([])
        else:
            items = Book.objects.all()
            serialized = BookSerializer(items, many=True)
            if not items:
                return Response([])

            return Response(serialized.data)




    def post(self,request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,200)
        return Response(serializer.errors)

    def put(self, request, pk, format=None):
        try:
            book = Book.objects.get(id=pk)
        except:
            return Response("No books found ")

        if book:
            serializer = BookSerializer(book,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,200)
            return Response(serializer.errors)

    def delete(self,request,pk):
        try:
            book = Book.objects.get(id=pk)
            book.delete()
            return Response({'msg':"deleted succesfully plz click refresh button",'error_code':200})
        except:
            return Response("No books found to delete")





