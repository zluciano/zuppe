from core.models import Material

def list_materials():
    return [material.to_dict_json() for material in Material.objects.all()]
