from django.shortcuts import render
from .models import Patient, Doctor
from .serializers import PatientSerializer, DoctorSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status

# Create your views here.

@api_view(["POST"])
@permission_classes([AllowAny])
def login(req):
    queryset = Patient.objects.all()
    data = {}

    username = req.data['username']
    password = req.data['password']

    try:
        patient = Patient.objects.get(username=username)
    except BaseException as e:
        return Response({'message':'Invalid Username'}, status=status.HTTP_401_UNAUTHORIZED)

    if not (patient.password == password):
        return Response({'message':'Invalid Password'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        response = {'username':username}
        return Response(response, status=status.HTTP_200_OK)



@api_view(["POST", "GET"])
@permission_classes([AllowAny])
def doctorUpdate(req):

    if req.method == "POST":
        doctor = Doctor.objects.get(id=req.data['id'])
        doctorSerializer = DoctorSerializer(doctor, data=req.data, partial=True)

        if doctorSerializer.is_valid():
            point = int(req.data['point'])

            rating = doctorSerializer.data['rating']
            voters = doctorSerializer.data['voters']

            newRating = ((rating*voters)+point)/(voters+1)

            obj = doctorSerializer.update(doctor, newRating)
            #obj.save()

            response = {'rating':obj.rating, 'voters':obj.voters}

            return Response(response, status=status.HTTP_200_OK)

    if req.method == "GET":
        doctors = Doctor.objects.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)
















