from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all().select_subclasses()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_categories(request, category):
    categories = ['IT', 'Communication Design', 'Drawing', 'Art']
    if category not in categories:
        return Response({'error': 'Invalid category'}, status=status.HTTP_400_BAD_REQUEST)
    
    projects = Project.objects.filter(category=category).select_subclasses()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
