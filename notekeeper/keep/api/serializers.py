from rest_framework import serializers
from keep.models import Notes

class NotesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField(required=False, allow_blank=True)
    tagline = serializers.CharField(required=False, allow_blank=True)
    pin = serializers.BooleanField() 
    created_at = serializers.CharField(required=False, allow_blank=True) 
    updated_at = serializers.CharField(required=False, allow_blank=True) 

    def create(self, validated_data):
        return Notes.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.pin = validated_data.get('pin', instance.pin)
        instance.tagline = validated_data.get('tagline', instance.tagline)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.updated_at = validated_data.get('updated_at', instance.updated_at)
        instance.save()
        return instance 