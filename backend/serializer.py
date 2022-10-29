from rest_framework import serializers
from .models import *

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['language', 'product_type', 'itemName', 'imageURL', 'description', 'price']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['language', 'product_type', 'itemName', 'imageURL', 'description', 'price']

class HookahSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hookah
        fields = ['language', 'product_type', 'itemName', 'imageURL', 'description', 'price']