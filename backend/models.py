from django.db import models

# Create your models here.
class Drink(models.Model):
    LANG = [('RU', 'Russuian'),('EN', 'English'),('HE', 'Hebrew')]
    language = models.CharField(choices=LANG, max_length=60)
    product_type = models.CharField( max_length=60)
    itemName = models.CharField(max_length=60)
    imageURL = models.CharField(max_length=600, blank=True)
    description = models.TextField(blank=True)
    price = models.CharField(blank=True, max_length=60)

    def __str__(self):
         return self.itemName

class Food(models.Model):
    LANG = [('RU', 'Russuian'),('EN', 'English'),('HE', 'Hebrew')]
    language = models.CharField(choices=LANG, max_length=60)
    product_type = models.CharField( max_length=60)
    itemName = models.CharField(max_length=60)
    imageURL = models.CharField(max_length=600, blank=True)
    description = models.TextField(blank=True)
    price = models.CharField(blank=True, max_length=60)

    def __str__(self):
         return self.itemName

class Hookah(models.Model):
    LANG = [('RU', 'Russuian'),('EN', 'English'),('HE', 'Hebrew')]
    language = models.CharField(choices=LANG, max_length=60)
    product_type = models.CharField(max_length=60)
    itemName = models.CharField(max_length=60)
    imageURL = models.CharField(max_length=600, blank=True)
    description = models.TextField(blank=True)
    price = models.CharField(blank=True, max_length=60, default="70")

    def __str__(self):
         return self.itemName

   