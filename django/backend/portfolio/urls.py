from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.project_list, name='project_list'),
    path('projects/<str:category>/', views.project_categories, name='project_categories'),
]

