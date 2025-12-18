from django.http import HttpResponse

def home(request):
    return HttpResponse("""
        <html>
            <head>
                <title>Django Backend Alive</title>
            </head>
            <body style="font-family: sans-serif; text-align: center; margin-top: 50px; background: repeating-linear-gradient(45deg, #000000, #000a09 210px); 
                color: #fff;">
                <h1>🚀 Django Backend Está Vivo!</h1>
                <p>A API principal está em <a href="/api/state/">/api/state/</a></p>
            </body>
        </html>
    """)