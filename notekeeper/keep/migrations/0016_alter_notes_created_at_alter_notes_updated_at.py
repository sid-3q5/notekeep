# Generated by Django 4.1.1 on 2022-09-10 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keep', '0015_notes_created_at_notes_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='created_at',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='notes',
            name='updated_at',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
