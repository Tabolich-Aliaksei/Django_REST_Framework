from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import Defaultrouter, SimpleRouter
from rest_frameowrk_simplejwt.views import TokenObtainPairView, TokenRefreshView

from rest_framework.authtoken import views
