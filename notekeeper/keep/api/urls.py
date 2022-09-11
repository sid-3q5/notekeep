from django.urls import path
from keep.api.views import NoteList, NoteDetail

urlpatterns = [
    path('list/', NoteList.as_view(), name='keep_list'),
    path('<int:pk>/',NoteDetail.as_view(),name='keep_detail'),
]