from core.models import Meal, Recipe

def list_meals(user, day):
    return Meal.objects.get(user=user, day=day)

def assign_meal(recipe, day, time):
    if Meal.objects.get(day=day, time=time).count() == 0:
        Meal.objects.create(recipe=recipe, day=day, time=time)
    else:
        meal = Meal.objects.get(day=day, time=time)
        meal.recipe = recipe
        meal.save()
