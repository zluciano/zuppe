from django.contrib import admin

from core.models import ActivityLog, Todo, Meal, Material, Recipe, SavedRecipes, Ingredient


class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('type', 'logged_user', 'created_at')

class TodoAdmin(admin.ModelAdmin):
    list_display = ('description', 'done')

class MealAdmin(admin.ModelAdmin):
    list_display = ('owner', 'day', 'recipe', 'time')

class MaterialAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'image')

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('author', 'name', 'description', 'tutorial', 'image')

class SavedRecipesAdmin(admin.ModelAdmin):
    list_display = ('owner', 'recipe')

class IngredientAdmin(admin.ModelAdmin):
    list_display = ('material', 'quantity')


admin.site.register(ActivityLog, ActivityLogAdmin)
admin.site.register(Todo, TodoAdmin)
admin.site.register(Meal, MealAdmin)
admin.site.register(Material, MaterialAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(SavedRecipes, SavedRecipesAdmin)
admin.site.register(Ingredient, IngredientAdmin)
