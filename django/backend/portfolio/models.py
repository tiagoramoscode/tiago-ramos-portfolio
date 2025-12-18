from django.db import models

class Project(models.Model):
    CATEGORIES = [
        ("IT","IT"),
        ("Communication Design","Communication Design"),
        ("Drawing","Drawing"),
        ("Art","Art"),
    ]

    title = models.CharField(max_length=255)
    year = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True)
    client = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORIES)
    main_image = models.ImageField(upload_to="project/", blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.category})"

# Subclasses
class ITProject(Project):
    stack = models.CharField(max_length=255, blank=True)
    url = models.URLField(blank=True)

# Option to import directly from Behance:
class CommunicationDesignProject(Project):
    assets_url = models.URLField(blank=True)
    motion_preview = models.URLField(blank=True)

class DrawingProject(Project):
    technique = models.CharField(max_length=255, blank=True)
    medium = models.CharField(max_length=255, blank=True)

class ArtProject(Project):
    concept_type = models.CharField(max_length=255, blank=True)
    exhibition = models.CharField(max_length=255, blank=True)

