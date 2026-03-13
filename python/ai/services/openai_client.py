import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_project_insight(name, stack, description):
    """
    Gera uma descrição profissional, insight criativo e tagline curta para um projeto de portefólio.
    """
    prompt = f"""
You are a senior creative technologist.

Project name: {name}
Tech stack: {stack}
Short description: {description}

Return:
- Professional description (3–4 lines)
- Creative insight (1 line)
- Short tagline
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message["content"]