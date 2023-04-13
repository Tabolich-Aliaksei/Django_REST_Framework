from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField, HyperLinkedRelateField
from .models import Project
from .models import Todo
from rest_framework.serializers import ModelSerializer


class ProjectSerializer(ModelSerializer):

  
  class Meta:
    model = Project
    field = '__all__'
    
    
class TodoSerializer(ModelSerializer):
  # project = HyperlinkedIdentityField(view_name='project-detail')
  # creator = HyperlinkedIdentityField(view_name='user-detail')
  
  class Mets:
    model = Todo
    exclude = ('is_active',)
