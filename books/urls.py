from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from books.views import Userviewset
from books.views import GetAuthToken,BookView

router=routers.DefaultRouter()
router.register('users',Userviewset)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/',GetAuthToken.as_view()),
    path('books/',BookView.as_view()),
    path('books/<int:pk>/',BookView.as_view()),
]