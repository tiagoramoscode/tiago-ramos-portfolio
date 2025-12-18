from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime
# Create your views here.

def state(request):
    return JsonResponse({
        "mood": "calmo",
        "energy": 0.7,
        "note": "Hoje foi um dia ativo. Agora é hora de integrar.",
        "timestamp": datetime.utcnow().isoformat()
    })