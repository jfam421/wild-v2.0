from django.contrib import admin
from .models import Food, Drink, Hookah
from django.contrib.auth.models import Group

@admin.action(description='Mark selected stories and copy them')
def change_type(modeladmin, request, queryset):
    queryset.update(price="70₪")

class FoodAdmin(admin.ModelAdmin):
    search_fields = ['itemName', "product_type"]
    list_display = ("itemName", "product_type")

class DrinkAdmin(admin.ModelAdmin):
    search_fields = ['itemName', "product_type"]
    list_display = ("itemName", "product_type")

class HookahAdmin(admin.ModelAdmin):
    search_fields = ['itemName', "product_type"]
    list_display = ("itemName", "product_type")
    actions = [change_type]
    
admin.site.register(Food, FoodAdmin)
admin.site.register(Hookah, HookahAdmin)
admin.site.register(Drink, DrinkAdmin)
admin.site.unregister(Group)
admin.site.site_header = 'WildBar Admin'
