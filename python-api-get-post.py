import requests 

STATUS_OK = 200
def books():
    response = requests.get('https://simple-books-api.glitch.me/books')
    if response.status_code == STATUS_OK:
        return response.json()
    else: 
        print(f'failed with status_code {response.status_code}\n{response.text}')
    
        
        
def register():
    request_body = {
        "clientName":"Postman", 
        "clientEmail":"me@email.com"
    }
    
    response = requests.post('https://simple-books-api.glitch.me/api-clients', data=request_body)
    if response.status_code == STATUS_OK: 
        return response.json()
    else: 
        print(f'failed with status_code {response.status_code}\n{response.text}')

register()

        
