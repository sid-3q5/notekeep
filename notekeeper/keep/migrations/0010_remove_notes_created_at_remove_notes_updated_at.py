# Generated by Django 4.1.1 on 2022-09-10 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('keep', '0009_notes_created_at_notes_updated_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notes',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='notes',
            name='updated_at',
        ),
    ]
