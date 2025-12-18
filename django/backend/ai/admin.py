from django.contrib import admin
from portfolio.models import Project, ITProject, CommunicationDesignProject, DrawingProject, ArtProject

# Register your models here.
admin.site.register(Project)
admin.site.register(ITProject)
admin.site.register(CommunicationDesignProject)
admin.site.register(DrawingProject)
admin.site.register(ArtProject)
