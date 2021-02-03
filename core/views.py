# coding: utf-8
import json
from django.http.response import HttpResponse, JsonResponse
from django.contrib import auth
from commons.django_model_utils import get_or_none
from commons.django_views_utils import ajax_login_required
from core.service import log_svc, todo_svc, meal_svc, recipe_svc, material_svc
from django.views.decorators.csrf import csrf_exempt


def dapau(request):
    raise Exception('break on purpose')


@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = auth.authenticate(username=username, password=password)
    user_dict = None
    if user is not None:
        if user.is_active:
            auth.login(request, user)
            log_svc.log_login(request.user)
            user_dict = _user2dict(user)
    return JsonResponse(user_dict, safe=False)


def logout(request):
    if request.method.lower() != 'post':
        raise Exception('Logout only via post')
    if request.user.is_authenticated():
        log_svc.log_logout(request.user)
    auth.logout(request)
    return HttpResponse('{}', content_type='application/json')


def whoami(request):
    i_am = {
        'user': _user2dict(request.user),
        'authenticated': True,
    } if request.user.is_authenticated() else {'authenticated': False}
    return JsonResponse(i_am)


@ajax_login_required
def add_todo(request):
    todo = todo_svc.add_todo(request.POST['new_task'])
    return JsonResponse(todo)


@ajax_login_required
def list_todos(request):
    todos = todo_svc.list_todos()
    return JsonResponse({'todos': todos})


@ajax_login_required
def list_meals(request):
    meals = meal_svc.list_meals(request.user, request.GET['day'])
    return JsonResponse({'meals': meals})

def list_recipes(request):
    recipes = recipe_svc.list_recipes()
    return JsonResponse({'recipes': recipes})

@ajax_login_required
def list_my_recipes(request):
    recipes = recipe_svc.list_my_recipes(request.user)
    return JsonResponse({'recipes': recipes})

@ajax_login_required
def assign_meal(request):
    recipe = request.POST['recipe']
    day = request.POST['day']
    time = request.POST['time']
    data = meal_svc.assign_meal(recipe, day, time)
    return JsonResponse({data: data})

@csrf_exempt
def new_recipe(request):
    print("entered views")
    data = json.loads(request.body)
    recipe = data['recipe']
    print(recipe)
    ingredients = data['ingredients']
    print(ingredients)
    newRecipe = recipe_svc.new_recipe(request.user, recipe, ingredients)
    return JsonResponse(newRecipe)

def list_materials(request):
    materials = material_svc.list_materials()
    return JsonResponse({'materials': materials})

def _user2dict(user):
    d = {
        'id': user.id,
        'name': user.get_full_name(),
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'permissions': {
            'ADMIN': user.is_superuser,
            'STAFF': user.is_staff,
        }
    }
    return d
