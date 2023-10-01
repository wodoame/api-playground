// sample books 
const books = () => {
fetch('https://simple-books-api.glitch.me/books').then(
    function(response){
        return response.json(); 
    }
).then(
    function(data){
    console.log(data);
    }
).catch(function(error){
    console.log(error);
});
};

// suggest an activity when bored
const bored = () =>{
    fetch('https://www.boredapi.com/api/activity').then(
    function(response){
        return response.json(); 
    }
).then(
    function(data){
    console.log(data);
    }
).catch(function(error){
    console.log(error);
});
};


// dog images
const dogs = () =>{
    fetch('https://dog.ceo/api/breeds/image/random').then(
    function(response){
        return response.json(); 
    }
).then(
    function(data){
    console.log(data);
    }
).catch(function(error){
    console.log(error);
});
};

// cat images
const cats = () =>{
    fetch('https://api.thecatapi.com/v1/images/search').then(
    function(response){
        return response.json(); 
    }
).then(
    function(data){
    console.log(data[0]);
    }
).catch(function(error){
    console.log(error);
});
};

// nationalize: guess nationality based on name
const nationalize = () =>{
    const name = 'wodoame';
    fetch('https://api.nationalize.io?name=' + name).then(
    function(response){
        return response.json(); 
    }
).then(
    function(data){
    console.log(data);
    }
).catch(function(error){
    console.log(error);
});
};



bored(); 