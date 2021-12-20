url = "./Json file/webseriesdata.json"
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
        let ravi = document.getElementById('containerweb')
        // let pop = document.querySelectorAll('.PopularMoviescard')
        console.log(json.webseries)
        k = 0
        while (k < 100) {
            // console.log(json.webseries[k])
            result = json.webseries[k].title
            let webobj=JSON.stringify(json.webseries[k]) 
            rohan = document.createElement('div')
            rohan.innerHTML = `
                                <img src='${json.webseries[k].poster}' >
                                <div class='movietitle'>
                                    <strong> ${result}</strong>
                                </div>
                                <a href='#singlewebitem' class="downloadbtn">Download</a>
                                <div class="webdata">${webobj}</div>
                                `
            rohan.className = 'Popularwebcard'
            ravi.appendChild(rohan)
            k = k + 1
        }
    }
    );
setTimeout(() => {

    let k=document.getElementsByClassName('downloadbtn')
    Array.from(k).forEach(element=>{
    element.addEventListener('click',function(){
        console.log('hello',element)
        let webobj=element.parentElement.lastElementChild.innerText
        webobjparse=JSON.parse(webobj)
        console.log( webobjparse )
        let singlewebitem=document.getElementById('singlewebitem')
        singlewebitem.innerHTML=`
        <div class="singlewebitemclass">
            <p class=downloadinfo>${webobjparse.downloadinfo}</p>
            <div class=insidesingleitemdiv>
                <img src='${webobjparse.poster}' >
                <div class='webdetals'>
                    <h2><strong>${webobjparse.title}</strong></h2><hr>
                    <p> Release year: <strong>${webobjparse.Release_Year}</strong></p><hr>
                    <p> Audio Language: <strong>${webobjparse.Audio_Language}</strong></p><hr>
                    <p> Number of Seasons: <strong>${webobjparse.numberofseason}</strong></p><hr>
                    <p> Subtitle: <strong>${webobjparse.subtitle}</strong></p><hr>
                    <h3>Story line</h3>
                    <p class=storyline>${webobjparse.storyline}</p><hr>
                </div>
            </div>
            <div id="downloadseason"></div>
        </div>
        `
        console.log(webobjparse.seasonlist.length)
        let numbersea=0
        while (numbersea<webobjparse.seasonlist.length) {
            let downloadseason=document.getElementById('downloadseason')
            let seasonlist=document.createElement('div')
            seasonlist.innerHTML=`
            <h2>Download ${webobjparse.title} season ${numbersea+1} for free</h2>
            <a class='seasondownloadbtn' href='${webobjparse.seasonlist[numbersea].download_480}'>Download 480</a> <br>
            <a class='seasondownloadbtn' href='${webobjparse.seasonlist[numbersea].download_720}'>Download 720</a>
            `
            numbersea+=1
            downloadseason.appendChild(seasonlist)
        }
    })
    })
}, 1000);
    
// setTimeout(() => {
//     let loading = document.getElementById('loading')
//     loading.style.display = 'none'
// }, 3000);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



let PopularMoviescard = document.getElementsByClassName('downloadbtn');
console.log(PopularMoviescard)

let search = document.getElementById('searchInput');
search.addEventListener("input", function () {

    let inputVal = capitalizeFirstLetter(search.value);
    //    console.log('input event fired!',inputVal) 
    let PopularMoviescard = document.getElementsByClassName('Popularwebcard');
    console.log(PopularMoviescard)
    Array.from(PopularMoviescard).forEach(function (element) {
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
    let PopularMoviescard = document.getElementsByClassName('Popularwebcard');
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
