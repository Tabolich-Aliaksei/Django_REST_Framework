from django.db import models
from notes.models import Note

class Project(models.Model):
  name = models.Charfield(max_length=64, unique=True)
  users = models.ManyToManyField(Note)
  repository = models.URLField(blank=True)
  
  def __str__(self):
    return self.name
  
  
class Todo(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  text = models.TextField()
  create = models.DateTimeField(auto_now_add=True)
  update = models.DateTimeField(auto_now=True)
  creator = models.ForeignKey(Note, on_delete=models.PROTECT)
  is_active = models.BooleanField(default=True)
