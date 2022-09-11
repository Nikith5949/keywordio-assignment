from django.contrib import admin
from django.urls import path,include

urlpatterns = [

    # path('auth/',CustomAuthToken.as_view()),
    path('library/',include('books.urls')),
]