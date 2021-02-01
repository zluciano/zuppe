from core.models import Recipe, User, SavedRecipes

def list_recipes():
    return Recipe.objects.get()

def list_my_recipes(user):
    return SavedRecipes.objects.get(user=user)
