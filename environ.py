"""
https: // docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""
import environ
import ctx
import os
from django.core.asgi import get_asgi_application
# env = environ.Env()
os.environ.setdefault("SECRET_KEY", "3PfZ1mtH9dXJ2V3EHyzIMYST90OziZHN")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'levelmoja.settings')
