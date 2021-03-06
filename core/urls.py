from core import views
from django.conf.urls import url

urlpatterns = [
    url(r'^api/dapau$', views.dapau),
    url(r'^api/login$', views.login),
    url(r'^api/logout$', views.logout),
    url(r'^api/whoami$', views.whoami),
    url(r'^api/add_todo$', views.add_todo),
    url(r'^api/list_todos$', views.list_todos),
    url(r'^api/list_meals$', views.list_meals),
    url(r'^api/list_recipes$', views.list_recipes),
    url(r'^api/list_my_recipes$', views.list_my_recipes),
    url(r'^api/assign_meal$', views.assign_meal),
    url(r'^api/new_recipe$', views.new_recipe),
    url(r'^api/list_materials$', views.list_materials),
]
