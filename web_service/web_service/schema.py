from graphene import ObjectType, Schema, String
from graphene_django import DjangoObjectType
from notes.models import Note, Book

class NoteType(DjangoObjectType):
  
  class Mets:
    model = Note
    fields = '__all__'
    
class BookType(DjangoObjectType):
  class Meta:
    model = Book
    fields = '__all__'
    
class Query(ObjectType):
  
  note_by_id = Field(NoteType, id=Int(required=True))
  
shema= Schema(query=Query)
