from rest_framework import routers 
from .viewset import * 

router = routers.SimpleRouter()
router.register('', personasViewset)

urlpatterns = router.urls
