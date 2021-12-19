function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let m=1;
while (m<4) {


const xhr = new XMLHttpRequest();
    xhr.open('GET', `
    https://api.themoviedb.org/3/tv/popular?api_key=3d12ab5df604eb4f661ea192894e3227&language=en-US&page=${m}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            // result=json.results[0].original_title
            let ravi=document.getElementById('containertv')
            let pop=document.querySelectorAll('.PopularMoviescard')
            
            k=0
            while (k<20) {
                result=json.results[k].name
                rohan=document.createElement('div')
                rohan.innerHTML=`
                                <img src='https://image.tmdb.org/t/p/original/${json.results[k].poster_path}' >
                                <div class='movietitle'>
                                    <strong>${result}</strong>
                                </div>
                              
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                    <div class="card-header" id="headingTwo${k}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${k}" aria-expanded="false" aria-controls="collapseTwo${k}">
                                            <p'>Overview: </p>
                                         
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo${k}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class='Overview'>Overview: ${json.results[k].overview}</p>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div>
                                `
                                
                rohan.className='PopularMoviescard'
                
                ravi.appendChild(rohan)
                // ravi.innerHTML=rohan
                console.log(json.results[k].name);
                k=k+1
            }
        }
    }

    xhr.send();
    let search=document.getElementById('searchInput');
    search.addEventListener("input",function () {

        let inputVal=capitalizeFirstLetter(search.value);
    //    console.log('input event fired!',inputVal) 
       let PopularMoviescard=document.getElementsByClassName('PopularMoviescard');
       Array.from(PopularMoviescard).forEach(function (element) {
           let cardTxt=element.getElementsByTagName('strong')[0].innerText;
           if (cardTxt.includes(inputVal)) {
               element.style.display ='block'
           }
           else{
            element.style.display ='none'
    
           }
        //    console.log(cardTxt);
       })
    });
    m=m+1
}
// let seachbtn=document.getElementById('searchbtn').addEventListener('click',function (e) {
//     e.preventDefault()
//     window.location.reload()
//     console.log('page is reloading')
// })