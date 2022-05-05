from .views import doctorUpdate, login
from django.urls import path


urlpatterns = [
    path('login', login, name='login'),
    path('doctor', doctorUpdate, name='doctor'),
]