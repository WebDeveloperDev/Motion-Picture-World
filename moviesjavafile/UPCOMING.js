function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



    const xhr = new XMLHttpRequest();
    xhr.open('GET', `
    https://api.themoviedb.org/3/movie/upcoming?api_key=3d12ab5df604eb4f661ea192894e3227&language=hi-IN&page=1&region=IN`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            // result=json.results[0].original_title
            let ravi = document.getElementById('containerupcoming')
            let pop = document.querySelectorAll('.PopularMoviescard')

            k = 0
            while (k < 20) {
                result = json.results[k].title
                rohan = document.createElement('div')
                rohan.innerHTML = `
                                <img src='https://image.tmdb.org/t/p/original/${json.results[k].poster_path}' >
                                <div class='movietitle'>
                                    <strong>${result}</strong>
                                </div>
                                <p>release date: ${json.results[k].release_date}</p>
                              
                               
                                `

                rohan.className = 'PopularMoviescard'

                ravi.appendChild(rohan)
                // ravi.innerHTML=rohan
                console.log(json.results[k].title);
                k = k + 1
            }
        }
        
    }

    xhr.send();
    let search = document.getElementById('searchInput');
    search.addEventListener("input", function () {

        let inputVal = capitalizeFirstLetter(search.value);
        //    console.log('input event fired!',inputVal) 
        let PopularMoviescard = document.getElementsByClassName('PopularMoviescard');
        Array.from(PopularMoviescard).forEach(function (element) {
            let cardTxt = element.getElementsByTagName('strong')[0].innerText;
            if (cardTxt.includes(inputVal)) {
                element.style.display = 'block'
            }
            else {
                element.style.display = 'none'

            }
            //    console.log(cardTxt);
        })
    });
   

// let seachbtn = document.getElementById('searchbtn').addEventListener('click', function (e) {
//     e.preventDefault()
//     window.location.reload()
//     console.log('page is reloading')
// })