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
        material = Material(name=ingredient['material'], type=ingredient['type'], image=ingredient['image'])
        material.save()
        instance = Ingredient(material=material, quantity=int(ingredient['quantity']))
        instance.save()
        entry.ingredients.add(instance)
        my_entry.ingredients.add(instance)
    entry.save()
    my_entry = SavedRecipes.objects.create(
        owner=user,
        recipe=entry
    )
    my_entry.save()
    return {all_recipes: entry.to_dict_json(), my_recipes: my_entry.to_dict_json()}