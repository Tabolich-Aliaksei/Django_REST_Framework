from rest_framework import mixins, viewsets
from rest_framework.viewsets import ModelViewSet
from .serializers import NoteModelSerializer
from .models import Note



class NoteModelViewSet(mixins.ListModelMixin,
                       mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       viewsets.GenerieviewSet):
    queryset = Note.objects.all()
    serializer_class = NoteModelSerializer
