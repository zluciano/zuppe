from core.models import User


def user_jon():
    ze = User.objects.create_user(
        username='jon',
        first_name='Jon',
        last_name='Snow',
        email='jon@example.com',
        password='snow',
    )
    return ze

def usuario_chef():
    person = User.objects.create_user(
        username='jacquin',
        first_name='Jacquin',
        last_name='French',
        email='email@franca.com',
        password='tompero'
    )
