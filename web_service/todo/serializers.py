from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField, HyperLinkedRelateField
from .models import Project
from .models import Todo


class ProjectSerializer(ModelSerializer):
  # Настройка сериализатора
  # Настройка Foreign key
  # owner = HyperlinkedIdentityField(view_name='user-detail')
  # Настройка Many to many
  # users = HyperlinkedRelateField(many=True, view_name='user-detail', read_only=True)
  
  class Meta:
    model = Project
    field = '__all__'
    
    
class TodoSerializer(ModelSerializer):
  # project = HyperlinkedIdentityField(view_name='project-detail')
  # creator = HyperlinkedIdentityField(view_name='user-detail')
  
  class Mets:
    model = Todo
    exclude = ('is_active',)
