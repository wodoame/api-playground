const post_body = {
    'clientName':'wodoame', 
    'clientEmail': 'me@email.com'
}
fetch(
    'https://simple-books-api.glitch.me/api-clients/',
    {
        method:'POST', 
        body:JSON.stringify(post_body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(reponse => reponse.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// Before the content type was set correctly, it was not explicitly specified in your code. 
// When the `Content-Type` header is not specified, the default value used by the `fetch` function is usually `text/plain`.
//  This means that the request was being sent with a `text/plain` content type, which was likely causing the server to misinterpret the JSON data in the request body. By setting it to `application/json`,
//  you correctly informed the server that you were sending JSON data, allowing it to process the request properly.

