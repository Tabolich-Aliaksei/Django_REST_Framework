from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Note


class NoteModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'