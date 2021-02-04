from core.models import Recipe, User, SavedRecipes, Ingredient, Material

def list_recipes():
    return [recipe.to_dict_json() for recipe in Recipe.objects.all().order_by('name')]

def list_my_recipes(user):
    return [recipe.to_dict_json() for recipe in SavedRecipes.objects.filter(owner=user)]

def new_recipe(user, recipe, ingredients):
    entry = Recipe.objects.create(
        author=user,
        name=recipe['name'],
        description=recipe['description'],
        tutorial=recipe['tutorial'],
        image=recipe['image']
    )
    for ingredient in ingredients:
        print("ATENO")
        print(ingredient)
        print(type(ingredient['quantity']))
        material = Material(name=ingredient['material'], type=ingredient['type'], image='a')
        material.save()
        instance = Ingredient(material=material, quantity=int(ingredient['quantity']))
        instance.save()
        entry.ingredients.add(instance)
    entry.save()
    return entry.to_dict_json()