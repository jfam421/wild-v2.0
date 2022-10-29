
from django.urls import path
from .views import FoodView, DrinkView, HookahView


urlpatterns = [
    path("food/", FoodView.as_view(), name='api'),
    path("drink/", DrinkView.as_view(), name='api1'),
    path("hookah/", HookahView.as_view(), name='api2')
]
