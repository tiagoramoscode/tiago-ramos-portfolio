import os
import django
from django.conf import settings
from portfolio.models import ITProject, CommunicationDesignProject, DrawingProject

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

def seed_projects():
    projects_data = {
        'IT': [
            {'title': 'Turbotec.pt', 'url': 'https://turbotec.pt', 'stack': 'React, Next.js'},
            {'title': 'Quintadafonte.com/pt-pt', 'url': 'https://quintadafonte.com/pt-pt', 'stack': 'Wordpress, PHP'},
            {'title': 'Clinicadamente.pt', 'url': 'https://clinicadamente.pt', 'stack': 'Django, Python'},
            {'title': 'Kinetikos.io', 'url': 'https://kinetikos.io', 'stack': 'React, Three.js'},
            {'title': 'PDR2020', 'client': 'EU Funding', 'stack': 'Custom CMS'},
            {'title': 'NOS MGM', 'client': 'NOS', 'stack': 'React Native'},
            {'title': 'Copytrack', 'client': 'Copytrack GmbH', 'stack': 'Vue.js'},
            {'title': 'Procensus', 'url': 'https://procensus.pt', 'stack': 'Django REST'},
            {'title': 'Keywork', 'client': 'Keywork', 'stack': 'Python Scripts'},
            {'title': 'Novo Banco GeDoc and CaDoc', 'client': 'Novo Banco', 'stack': 'SQL Server, Python'},
        ],
        'Communication Design': [
            {'title': 'Cosmic Dust - Branding', 'description': 'Symbol, Logotype And Cards', 'assets_url': 'https://www.behance.net/cosmicdust'},
            {'title': 'Little Wing, Jimi Hendrix', 'description': 'Kinetic Animation'},
            {'title': 'Leading Presentation', 'description': 'Motion Graphics'},
            {'title': 'K3K - Branding', 'description': 'Office, Letter, Envelope And Cards'},
            {'title': 'National Academy Of Dance', 'description': 'Branding'},
            {'title': 'Five Las Vegas Restaurants', 'description': 'Branding & Menus'},
            {'title': 'Super Nada - Illustration', 'description': 'Cover, CD, Booklet'},
            {'title': 'Kinetikos - Website'},
            {'title': 'Turbotec - Website'},
            {'title': 'Radical Brain - Website'},
        ],
        'Drawing': [
            {'title': 'Human Body Drawing', 'technique': 'Pencil'},
            {'title': 'Fantasy & Urban Drawing', 'description': 'Perspective Studies'},
            {'title': 'Landscape Drawing', 'technique': 'Ink'},
            {'title': 'Still Life: Analysis & Synthesis Exercises', 'medium': 'Charcoal'},
            {'title': 'Face Drawing', 'technique': 'Graphite'},
            {'title': 'Animal Drawing'},
            {'title': 'Drawing & Collage: Abstraction & Expression Exercises'},
            {'title': 'Efémero & Infinito', 'description': 'Concept Art/Arte Conceptual'},
        ],
    }

    created = 0
    for category, data_list in projects_data.items():
        for data in data_list:
            if category == 'IT':
                obj, created_new = ITProject.objects.get_or_create(title=data['title'], defaults=data)
            elif category == 'Communication Design':
                obj, created_new = CommunicationDesignProject.objects.get_or_create(title=data['title'], defaults=data)
            elif category == 'Drawing':
                obj, created_new = DrawingProject.objects.get_or_create(title=data['title'], defaults=data)
            if created_new:
                created += 1
                print(f"Created: {obj.title}")

    print(f"Total new projects seeded: {created}")

if __name__ == "__main__":
    seed_projects()

