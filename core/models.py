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
    def __str__(self):
        return 'Material: ' + self.name
    name = models.CharField(max_length=256)
    image = models.TextField(max_length=1000)

    def to_dict_json(self):
        return { 
                'name': self.name,
                'image': self.image
            }

class Ingredient(models.Model):
    def __str__(self):
        return 'Ingredient: ' + str(self.quantity) + ' ' + self.material.name
    material = models.ForeignKey(Material)
    quantity = models.IntegerField(max_length=1000)
    type = models.CharField(max_length=20)
    def to_dict_json(self):
        return {
            'material': self.material.name,
            'quantity': self.quantity,
            'type': self.type
        }

class Recipe(models.Model):
    def __str__(self):
        return 'Recipe: ' + self.name
    author = models.ForeignKey(User)
    name = models.CharField(max_length=256)
    description = models.TextField(max_length=1000)
    tutorial = models.TextField(max_length=1000)
    ingredients = models.ManyToManyField(Ingredient)
    image = models.TextField(max_length=1000)
    
    def to_dict_json(self):
        return { 
                'name': self.name,
                'ingredients': [ingredient.to_dict_json() for ingredient in self.ingredients.all()],
                'tutorial': self.tutorial,
                'description': self.description,
                'image': self.image
            }

class SavedRecipes(models.Model):
    def __str__(self):
        return 'Saved Recipe: ' + self.recipe.name
    owner = models.ForeignKey(User)
    recipe = models.ForeignKey(Recipe)

    def to_dict_json(self):
        return self.recipe.to_dict_json()

class Meal(models.Model):
    owner = models.ForeignKey(User)
    day = models.DateTimeField(max_length=1000)
    time = models.TextField(max_length=1000)
    recipe = models.ForeignKey(Recipe)
    def to_dict_json(self):
        return {
            'id': self.id,
            'owner': self.owner.username,
            'time': self.time,
            'recipe': self.recipe.to_dict_json()
        }
