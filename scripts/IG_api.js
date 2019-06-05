// Instagram API call 

let request = new XMLHttpRequest(); 
    request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3095931663.1c6aeec.1c59eb07bb8c475881b774f916a9c869&count=6', true); 

    request.onload = function(container) {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText); 
            for (var i = 0; i < data.data.length; i++) {
                var container = document.getElementById('insta-feed'); 
                var imgURL = data.data[i].images.standard_resolution.url;
                console.log(imgURL); 
                var linkURL = data.data[i].link; //Instagram image link 
                console.log(linkURL); 
                var div = document.createElement('div'); // Creation of image div 
                console.log(div); 
                div.setAttribute('class','instapic'); 
                container.append(div); 
                var a = document.createElement('a'); //Creation of clickable link 
                a.setAttribute('href', linkURL);
                a.setAttribute('target', '_blank'); 
                div.appendChild(a); 
                var img = document.createElement('img'); //Creation of image 
                img.setAttribute('src', imgURL); //mental note 
                a.appendChild(img); 
            }
            console.log(data); 
        } else {
        }
    }; 
    request.onerror = function() {
    }; 
    request.send(); 