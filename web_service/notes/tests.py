from django.test import TestCase
from rest_framework import status
from rest_frameork.test import APIRequestFactory,force_authenticate,APIclient,APISimpleTestCase,APITestCase
from mixer.backend-django import mixer
from django.contrib.auth.midels import User

from notes.views import NoteModelViewSet
from notes.models import Note

# Create your tests here.

class TestNoteViewSet(TestCase):
  
  def setUp(self) -> None;
  pass

  def tearDown(self) -> None:
    pass
  
  def test_get_list(self):
    pass
  
