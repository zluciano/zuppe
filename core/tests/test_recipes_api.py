from core.models import User
from django.test.client import Client
from django.test.testcases import TestCase
from core.tests import fixtures
import json
from datetime import datetime as dt


class TestAuthApi(TestCase):
    @classmethod
    def setUpTestData(cls):
        fixtures.usuario_chef()

    def test_recipes_api(self):
        jacquin = Client()
        jacquin.force_login(User.objects.get(username='jacquin'))
        self.get_own_recipes(jacquin)
        self.get_week_meals(jacquin, dt.now())

    def get_own_recipes(self, client):
        list_recipes = client.get('/api/list_recipes')
        self.assertEqual(list_recipes.status_code, 200)
        data = json.loads(list_recipes.content.decode('utf-8'))
        self.assertIsNotNone(data)

    def get_week_meals(self, client, day):
        list_meals = client.get('/api/list_meals', {'day': day})
        self.assertEqual(list_meals.status_code, 200)
        data = json.loads(list_meals.content.decode('utf-8'))
        self.assertIsNotNone(data)
