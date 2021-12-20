url="./moviesjavafile/2021moviesData.json"
fetch(url)
    .then(function (resp) {
        return resp.json();
    }
    )
    .then(function (data) {
        // let downloadMD = data;
        console.log(data);
      
            let json = data
            // result=json.results[0].original_title
            let ravi = document.getElementById('containerdownload')
            let containersec=document.getElementById('containersec')
            let containerthird=document.getElementById('containerthird')
            let containerfour=document.getElementById('containerfour')
            let containerfive=document.getElementById('containerfive')
            let containersix=document.getElementById('containersix')
            // let pop = document.querySelectorAll('.PopularMoviescard')
            console.log(json.movies2021.adventure)
            console.log(json.movies2021.comedy)
    
            k = 0
            while (k < 20) {
                result = json.movies2021.adventure[k].title
                rohan = document.createElement('div')
                rohan.innerHTML = `
                <img src='${json.movies2021.adventure[k].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong> ${result}</strong>
                                    </div>
                                
                                  
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k}" aria-expanded="false" aria-controls="collapseTwo${k}">
                                            <p'>Details: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class='Overview'><strong>Artist:</strong> ${json.movies2021.adventure[k].Artist}
                                       <br>
                                       <strong>Length:</strong> ${json.movies2021.adventure[k].Length}
                                       <br>
                                       <strong>Audio-Language:</strong> ${json.movies2021.adventure[k].Audio_Language}
                                       </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.adventure[k].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan.className = 'PopularMoviescard'
                ravi.appendChild(rohan)
                
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k].title);
                k = k + 1
            }
            k2=0
            while (k2 < 16) {
                result = json.movies2021.comedy[k2].title
                 rohan2 = document.createElement('div')
                rohan2.innerHTML = `
                <img src='${json.movies2021.comedy[k2].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong> ${result}</strong>
                                    </div>
                                
                                  
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k2}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k2}" aria-expanded="false" aria-controls="collapseTwo${k}">
                                            <p'>Artist: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k2}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <p class='Overview'><strong>Artist:</strong> ${json.movies2021.comedy[k2].Artist}
                                    <br>
                                    <strong>Length:</strong> ${json.movies2021.comedy[k2].Length}
                                    <br>
                                    <strong>Audio-Language:</strong> ${json.movies2021.comedy[k2].Audio_Language}
                                    </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.comedy[k2].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan2.className = 'PopularMoviescard'
    
                // ravi.appendChild(rohan)
                containersec.appendChild(rohan2)
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k2].title);
                k2 = k2 + 1
            }
            k3=0
            while (k3 < 16) {
                result = json.movies2021.drama[k3].title
                 rohan2 = document.createElement('div')
                rohan2.innerHTML = `
                <img src='${json.movies2021.drama[k3].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong> ${result}</strong>
                                    </div>
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k3}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k3}" aria-expanded="false" aria-controls="collapseTwo${k}">
                                            <p'>Details </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k3}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <p class='Overview'><strong>Artist:</strong> ${json.movies2021.drama[k3].Artist}
                                    <br>
                                    <strong>Length:</strong> ${json.movies2021.drama[k3].Length}
                                    <br>
                                    <strong>Audio-Language:</strong> ${json.movies2021.drama[k3].Audio_Language}
                                    </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.drama[k3].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan2.className = 'PopularMoviescard'
    
                // ravi.appendChild(rohan)
                containerthird.appendChild(rohan2)
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k2].title);
                k3 = k3 + 1
            }
            k4=0
            while (k4 < 10) {
                result = json.movies2021.horror[k4].title
                 rohan2 = document.createElement('div')
                rohan2.innerHTML = `
                <img src='${json.movies2021.horror[k4].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong>Title: ${result}</strong>
                                    </div>
                                
                                    
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k4}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k4}" aria-expanded="false" aria-controls="collapseTwo${k4}">
                                            <p'>Artist: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k4}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <p class='Overview'><strong>Artist:</strong> ${json.movies2021.horror[k4].Artist}
                                    <br>
                                    <strong>Length:</strong> ${json.movies2021.horror[k4].Length}
                                    <br>
                                    <strong>Audio-Language:</strong> ${json.movies2021.horror[k4].Audio_Language}
                                    </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.horror[k4].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan2.className = 'PopularMoviescard'
    
                // ravi.appendChild(rohan)
                containerfour.appendChild(rohan2)
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k2].title);
                k4 = k4 + 1
            }
            k5=0
            while (k5 < 12) {
                result = json.movies2021.sciencefriction[k5].title
                 rohan2 = document.createElement('div')
                rohan2.innerHTML = `
                <img src='${json.movies2021.sciencefriction[k5].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong>Title: ${result}</strong>
                                    </div>
                                
                                  
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k5}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k5}" aria-expanded="false" aria-controls="collapseTwo${k5}">
                                            <p'>Artist: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k5}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <p class='Overview'><strong>Artist:</strong> ${json.movies2021.sciencefriction[k5].Artist}
                                    <br>
                                    <strong>Length:</strong> ${json.movies2021.sciencefriction[k5].Length}
                                    <br>
                                    <strong>Audio-Language:</strong> ${json.movies2021.sciencefriction[k5].Audio_Language}
                                    </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.sciencefriction[k5].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan2.className = 'PopularMoviescard'
    
                // ravi.appendChild(rohan)
                containerfive.appendChild(rohan2)
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k2].title);
                k5 = k5 + 1
            }
            k6=0
            while (k6 < 12) {
                result = json.movies2021.thriller[k6].title
                 rohan2 = document.createElement('div')
                rohan2.innerHTML = `
                <img src='${json.movies2021.thriller[k6].poster}' >
                                    
                                    <div class='movietitle'>
                                        <strong>Title: ${result}</strong>
                                    </div>
                                
                                  
                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k6}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k6}" aria-expanded="false" aria-controls="collapseTwo${k6}">
                                            <p'>Artist: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k6}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <p class='Overview'><strong>Artist:</strong> ${json.movies2021.thriller[k6].Artist}
                                    <br>
                                    <strong>Length:</strong> ${json.movies2021.thriller[k6].Length}
                                    <br>
                                    <strong>Audio-Language:</strong> ${json.movies2021.thriller[k6].Audio_Language}
                                    </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="${json.movies2021.thriller[k6].Download_link}"  target="_blank" class="downloadbtn">Download</a>
                                   
                                    `
    
                rohan2.className = 'PopularMoviescard'
    
                // ravi.appendChild(rohan)
                containersix.appendChild(rohan2)
                // ravi.innerHTML=rohan
                // console.log(json.movies2021.adventure[k2].title);
                k6 = k6 + 1
            }
        }

    );
// setTimeout(() => {
//     let loading = document.getElementById('loading')
//     loading.style.display = 'none'
// }, 3000);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


 


let search = document.getElementById('searchInput');
search.addEventListener("input", function () {

    let inputVal = capitalizeFirstLetter(search.value);
    //    console.log('input event fired!',inputVal) 
    let PopularMoviescard = document.getElementsByClassName('PopularMoviescard');
    console.log(PopularMoviescard)
    Array.from(PopularMoviescard).forEach(function (element) {
        console.log(element)
        let cardTxt = element.getElementsByTagName('strong')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block'
            // let nomatch=document.getElementById('nomatch')
            // nomatch.style.display='none'

        }
        else {
            element.style.display = 'none'
            // let nomatch=document.getElementById('nomatch')
            // nomatch.style.display='block'

        }
        //    console.log(cardTxt);
    })
});

let searchdesk = document.getElementById('searchInputdesk');
searchdesk.addEventListener("input", function () {

    let inputVal = capitalizeFirstLetter(searchdesk.value);
       console.log('input event fired!',inputVal) 
    let PopularMoviescard = document.getElementsByClassName('PopularMoviescard');
    console.log(PopularMoviescard)
    Array.from(PopularMoviescard).forEach(function (element) {
        console.log(element)
        let cardTxt = element.getElementsByTagName('strong')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block'
            // let nomatch=document.getElementById('nomatch')
            // nomatch.style.display='none'

        }
        else {
            element.style.display = 'none'
            // let nomatch=document.getElementById('nomatch')
            // nomatch.style.display='block'

        }
        //    console.log(cardTxt);
    })
});


// let seachbtn = document.getElementById('searchbtn').addEventListener('click', function (e) {
//     e.preventDefault()
//     window.location.reload()
//     console.log('page is reloading')
// })