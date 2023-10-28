from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
import requests

class TriggerViewSet(viewsets.ViewSet):
    def create(self, request):
        if request.method == 'POST':
            data = request.data
            
            print(data)
            
            project_id = "121"
            gitlab_token = "DXnzFzayXA8Xbv6_kNSv"

            base_url = f'https://gitlab.os3.com/api/v4/'
            headers = {"PRIVATE-TOKEN": gitlab_token}

            if data:
              print(f'Triggering bracnh: wazuh-s100')  
              trigger_branch(base_url, project_id, headers, "wazuh-s100")  # Vm creations

            for branch in data:
              print(f'Triggering branch: {branch}')  
              trigger_branch(base_url, project_id, headers, branch)    #  tool installations
        
            return Response ({"message": "pipeline trigger"})
        else:
            return Response ({"message": "pipeline not trigger"})

    def get_latest_pipeline_statuses(base_url, project_id, headers, count=2):
            response = requests.get(base_url + f"projects/{project_id}/pipelines", headers=headers, verify=False)

            if response.status_code != 200:
                raise ValueError(f"Error fetching pipelines: {response.status_code}, {response.json()}")

            pipelines = response.json()
            if not pipelines:
                return []

            latest_pipelines = pipelines[:count]
            latest_statuses = []

            for pipeline in latest_pipelines:
                latest_status = pipeline['status']
                latest_statuses.append({"id": pipeline['id'], "status": latest_status})

            return latest_statuses       
                 
def trigger_branch(base_url, project_id, headers, branch_name):
        data = {
            "ref": branch_name
            }
        response = requests.post(base_url + f"projects/{project_id}/pipeline", headers=headers, json=data, verify=False)
        print(response.status_code)
        if response.status_code == 201:
            return Response({'message': 'Pipeline triggered successfully.'})
        else:
            return Response({'message': 'Failed to trigger the pipeline.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        