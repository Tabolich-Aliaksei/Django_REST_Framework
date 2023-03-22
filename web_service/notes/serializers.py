from rest_framework.serializers import ModelSerializer
from .models import Note


class NoteModelSerializer(ModelSerializer):
    class Meta:
        model = note
        fields = ('username', 'first_name', 'last_name', 'email')
