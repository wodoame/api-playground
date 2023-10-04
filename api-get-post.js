// documentation: https://ginger-jobs-api.vercel.app/api-docs
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkMWUxYTFjMDhjMzAwMDhkZjMyZmEiLCJuYW1lIjoid29kb2FtZSIsImlhdCI6MTY5NjQwNzA2NiwiZXhwIjoxNjk4OTk5MDY2fQ.-buYcStK7Tf_HZchrk2RZ_u_Wb5V7o2Bqzsd792m9DA';

const jobs= () => {
    fetch('https://ginger-jobs-api.vercel.app/api/v1/jobs', {
        headers:{
            'Authorization': 'Bearer ' + token
        }
    }).then(
        function(response){
            return response.json();
        }
    ).then(
        function(data){
            console.log(data);
        }
    ).catch(
        function(error){
            console.log(error)
        }
    );
};

const register = () => {
    const request_body = {
        "name": "wodoame",
        "email": "me@email.com",
        "password": "secretpassword"
      }; 

    fetch('https://ginger-jobs-api.vercel.app/api/v1/auth/register', {
        method:'POST', 
        body:JSON.stringify(request_body), 
        headers:{
            'Content-Type':'application/json'
        }
    }).then(
        function(response){
            return response.json();
        }
    ).then(
        function(data){
            console.log(data);
        }
    ).catch(
        function(error){
            console.log(error);
        }
    );
};


const create_job = () => {
    const request_body = {
        "company": "MATBOOT",
        "position": "Junior Web Developer"
      }; 

    fetch('https://ginger-jobs-api.vercel.app/api/v1/jobs', {
        method:'POST', 
        body:JSON.stringify(request_body), 
        headers:{
            'Content-Type':'application/json', 
            'Authorization': 'Bearer ' + token
        }
    }).then(
        function(response){
            return response.json();
        }
    ).then(
        function(data){
            console.log(data);
        }
    ).catch(
        function(error){
            console.log(error);
        }
    );
};


jobs();