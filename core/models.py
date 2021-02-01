from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class ActivityLog(models.Model):
    type = models.CharField(max_length=64)
    logged_user = models.ForeignKey(User, null=True, blank=True)
    fromuser = models.ForeignKey(User, null=True, blank=True, related_name="activitylogs_withfromuser")
    jsondata = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return '%s / %s / %s' % (
            self.type,
            self.logged_user,
            self.created_at,
        )


class Todo(models.Model):
    description = models.CharField(max_length=512)
    done = models.BooleanField(default=False)

    def to_dict_json(self):
        return {
            'id': self.id,
            'description': self.description,
            'done': self.done,
        }

class Material(models.Model):
    name = models.CharField(max_length=256)
    image = models.TextField

class Ingredient(models.Model):
    material = models.ForeignKey(Material)
    type = models.CharField(max_length=20)

class Recipe(models.Model):
    author = models.ForeignKey(User)
    name = models.CharField(max_length=256)
    description = models.TextField
    tutorial = models.TextField
    ingredients = models.ManyToManyField(Ingredient)
    image = models.TextField

class SavedRecipes(models.Model):
    owner = models.ForeignKey(User)
    recipe = models.ForeignKey(Recipe)

class Meal(models.Model):
    owner = models.ForeignKey(User)
    day = models.DateTimeField
    time = models.TextField
    recipe = models.ForeignKey(Recipe)
