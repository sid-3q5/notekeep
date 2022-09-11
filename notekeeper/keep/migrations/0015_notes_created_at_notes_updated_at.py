# Generated by Django 4.1.1 on 2022-09-10 16:47

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('keep', '0014_remove_notes_created_at_remove_notes_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='notes',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='notes',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
