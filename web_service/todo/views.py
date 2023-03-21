from django_filters.rest_framework import DjangofilterBackend
from rest_framework import stautus
from rest_framework.pagination import PageHumberPagination
from rest_framework.response import Response
from rest_framework.viewsets import modelviewSet

from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, TodoSerializer
from .models import Project, Todo


class ProjectPagination(PageNumberPagination):
  page_size = 10


class ProjectViewSet(ModelViewSet):
  serializer_class = ProjectSerializer
  queryset = Project.objects.all()
  pagination_class = ProjectPagination
  
  
 def get_queryset(self):
  queryset = Project.objects.all()
  name = self.request.query_params.get('name', None)
  if name:
    queryset = queryset.filter(name_contains=name)
  return queryset


class TodoPagination(PageNumberPagination):
  page_size = 28
  
  
class TodoViewSet(ModelViewSet):
  serializer_class = TodoSerializer
  queryset = Todo.objects.all()
  pagination_class = TodoPagination
  # filter_backends = [DjangoFilterBackend]
  filterset_class = TodoFilter
  
  def destroy(self,request, 'args, ''kwargs):
      try:
              instance = self.get_object()
              instance.is_active = False
              instance.save()
       except:
              return Response(status=status.HTTP_404_NOT_FOUND)
       else:
             return Response(status=status.HTTP_204_NOT_CONTENT) 
