from core.models import Meal, Recipe
from django.utils import timezone
from datetime import timedelta, datetime


def list_meals(user, day):
    meals_lists = []
    week = list_week_by_day(datetime.strptime(day[:19], '%Y-%m-%dT%H:%M:%S'))
    for weekday in week:
        end = weekday.replace(hour=23, minute=59, second=59)
        start = weekday.replace(hour=0, minute=0, second=1)
        meals_lists.append([meal.to_dict_json() for meal in Meal.objects.filter(owner=user, day__lte=end, day__gte=start).order_by('day')])
    return meals_lists

def assign_meal(recipe, day, time):
    if Meal.objects.get(day=day, time=time).count() == 0:
        Meal.objects.create(recipe=recipe, day=day, time=time)
    else:
        meal = Meal.objects.get(day=day, time=time)
        meal.recipe = recipe
        meal.save()

def list_week_by_day(day):
    week = [day]
    for i in range(6):
        day += timedelta(days=1)
        week.append(day)
    return week