from http.client import HTTPResponse
from keep.models import Notes
from keep.api.serializers import NotesSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from django_filters.rest_framework import DjangoFilterBackend

# class NoteList(generics.ListCreateAPIView):
#     queryset = Notes.objects.all().order_by('pin')
#     serializer_class = NotesSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields =['title','description','pin']

# class NoteDetail(generics.ListCreateAPIView):
#     queryset = Notes.objects.all()
#     serializer_class = NotesSerializer


class NoteList(APIView):

    def get(self, request):
        notes = Notes.objects.all().order_by('-pin')
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

class NoteDetail(APIView):

    def get(self, request, pk):
        try:
            movie = Notes.objects.get(pk=pk)
        except Notes.DoesNotExist:
            return Response({'Error':'Note not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = NotesSerializer(movie)
        return Response(serializer.data)

    
    def put(self,request, pk):
        movie = Notes.objects.get(pk=pk)
        serializer = NotesSerializer(movie,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self,request, pk):
        movie = Notes.objects.get(pk=pk)
        movie.delete()
        return Response({"status": "ok", "data": "Item Deleted"}, status = status.HTTP_202_ACCEPTED)