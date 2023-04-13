from django.contrib.auth.models import Todo


from rest_framework.generics import ListPIView
from todo.serializers import ModelSerializer


class TodoListView(ListAPIView):
  queryset = Todo.objects.all()
  
  
  def get_serializer_class(self):
    if self.request.version == 'v2':
      return ModelSerializer
    return ModelSerializer
  ModelFullSerializer
