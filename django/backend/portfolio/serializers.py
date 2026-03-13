from rest_framework import serializers
from .models import Project, ITProject, CommunicationDesignProject, DrawingProject, ArtProject

class ProjectSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Project
        fields = ['id', 'title', 'year', 'description', 'client', 'category', 'category_display', 'main_image', 'created_at']
        read_only_fields = ['created_at']

class ITProjectSerializer(ProjectSerializer):
    class Meta(ProjectSerializer.Meta):
        model = ITProject
        fields = ProjectSerializer.Meta.fields + ['stack', 'url']

class CommunicationDesignProjectSerializer(ProjectSerializer):
    class Meta(ProjectSerializer.Meta):
        model = CommunicationDesignProject
        fields = ProjectSerializer.Meta.fields + ['assets_url', 'motion_preview']

class DrawingProjectSerializer(ProjectSerializer):
    class Meta(ProjectSerializer.Meta):
        model = DrawingProject
        fields = ProjectSerializer.Meta.fields + ['technique', 'medium']

class ArtProjectSerializer(ProjectSerializer):
    class Meta(ProjectSerializer.Meta):
        model = ArtProject
        fields = ProjectSerializer.Meta.fields + ['concept_type', 'exhibition']

