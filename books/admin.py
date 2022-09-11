

# Register your models here.
from django.contrib import admin
from .models import Book
from django.urls import path
#
# from .models import Persons
# # Register your models here.
# @admin.register(Persons)
# class PersonAdmin(admin.ModelAdmin):
#     pass
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title','description','price','book_created']