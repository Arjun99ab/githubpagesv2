var api_key = "AIzaSyCGU-jCbO8UMeTQt5XZcHNObKxgG2FyIg8";

async function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    var url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&type=video&part=snippet&q=${inputVal}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data.items[0]["id"]["videoId"]);

    document.getElementById('player').src = "https://www.youtube.com/embed/" + data.items[0]["id"]["videoId"];


}