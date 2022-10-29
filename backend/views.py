from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *
from .models import *

def index(request):
    return render(request, "index.html")

def redirect_view(request):
    response = redirect('/')
    return response

class DrinkView(APIView):
    serializer_class = DrinkSerializer

    def get(self, request, *args, **kwargs):
        detail = [{
         "lang":detail.language,
         "type":detail.product_type,
         "itemName": detail.itemName,
         "imageURL": detail.imageURL,
         "description":detail.description,
         "price":detail.price
         } for detail in Drink.objects.all()]
        return Response(detail)

class FoodView(APIView):
    serializer_class = FoodSerializer

    def get(self, request, *args, **kwargs):
        detail = [{
         "lang":detail.language,
         "type":detail.product_type,
         "itemName": detail.itemName,
         "imageURL": detail.imageURL,
         "description":detail.description,
         "price":detail.price
         } for detail in Food.objects.all()]
        return Response(detail)

class HookahView(APIView):
    serializer_class = HookahSerializer

    def get(self, request, *args, **kwargs):
        detail = [{
         "lang":detail.language,
         "type":detail.product_type,
         "itemName": detail.itemName,
         "imageURL": detail.imageURL,
         "description":detail.description,
         "price":detail.price
         } for detail in Hookah.objects.all()]
        return Response(detail)
