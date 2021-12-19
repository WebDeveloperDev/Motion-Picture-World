setTimeout(() => {
    let loading=document.getElementById('loading')
    loading.style.display='none'
}, 3000);
m=1
var max=10
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let search=document.getElementById('searchInput');
search.addEventListener("input",function () {
    max=50;
    console.log(search.value)
    while (m<max) {
    
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=3d12ab5df604eb4f661ea192894e3227&language=en-US&page=${m}`, true);
        xhr.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText)
                // result=json.results[0].original_title
                let ravi=document.getElementById('container')
                k=0
                while (k<20) {
                    result=json.results[k].original_title
                    rohan=document.createElement('div')
                    rohan.innerHTML=`
                                    <img src='https://image.tmdb.org/t/p/original/${json.results[k].poster_path}' >
                                    <div class='movietitle'>
                                        <strong>${result}</strong>
                                    </div>
                                    <p>Release Date: ${json.results[k].release_date}</p>
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
                    // console.log(json.results[k].original_title);
                    k=k+1
                }
            }
        }
        xhr.send();
        m=m+1
    }
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


while (m<max) {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=3d12ab5df604eb4f661ea192894e3227&language=en-US&page=${m}`, true);
    xhr.onprogress=function () {
        
        console.log('on progress')
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            // result=json.results[0].original_title
            let ravi=document.getElementById('container')
            k=0
            while (k<20) {
                result=json.results[k].original_title
                rohan=document.createElement('div')
                rohan.innerHTML=`
                                <img src='https://image.tmdb.org/t/p/original/${json.results[k].poster_path}' >
                                <div class='movietitle'>
                                    <strong>${result}</strong>
                                </div>
                                <p>Release Date: ${json.results[k].release_date}</p>
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
                // console.log(json.results[k].original_title);
                k=k+1
            }
        }
    }
    xhr.send();
    m=m+1
}

// let seachbtn=document.getElementById('searchbtn').addEventListener('click',function (e) {
//     e.preventDefault()
//     window.location.reload()
//     console.log('page is reloading')
// })s
// if (window.innerWidth<900) {
//     let header=document.getElementById('header')
//     let newheader=document.createElement('div')
//     newheader.className='newheader'
//     newheader.innerHTML=`
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>`
// header.replaceWith(newheader)
// }
// let seetime=2
// while (seetime<5) {
//     let seemore=document.getElementById('seemorebtn')
//     seemore.addEventListener('click',function () {
//         console.log('clicked')
//         let container=document.getElementById('container')
//         // container.style.overflow='scroll'
//         container.style.maxHeight=`${seetime*900}px`
//     })
//     seetime+=1
// }
let seemore=document.getElementById('seemorebtn')
let oldheight=seemore.innerHeight
let k=0
seemore.addEventListener("mousedown",function (e) {
    console.log('clicked')
    let container=document.getElementById('container')
    // container.style.overflow='scroll'
    console.log(k)
    k+=1000
    e.preventDefault()
    container.style.maxHeight=`${2*k}px`
})

