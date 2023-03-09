from rest_framework.viewsets import ModelViewSet
from .models import Note
from .serializers import NoteModelSerializer


class NoteModelViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteModelSerializer