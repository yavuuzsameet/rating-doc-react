from tkinter import DoubleVar
from .models import Patient, Doctor
from rest_framework import serializers

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['username', 'password']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'rating', 'voters']

    def update(self, instance, newRating):
        instance.rating = newRating
        instance.voters += 1
        instance.save()
        return instance
        





