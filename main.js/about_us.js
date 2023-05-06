


const menu_btn = document.querySelector('.menu_btn');
const navigation = document.querySelector('.nav_list');

const blogsearching = document.querySelector('.blog_searching');
const blogsectionlist = document.querySelector("#blog-section-list");
const search = document.querySelector('.search');
const blogstartupbox = document.querySelector('#blog_startup-box');
const blogaboutsearchlist = document.querySelector("#blog-about-search-list");
const blogabout = document.querySelector('.blog-about');
const aboutsearch = document.querySelector('.about-search');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    navigation.classList.toggle('active')
})





const apiKey = 'FeQ62AmiN85GR31_ZZ5RSbSSYABHHNgBFl1FZlNHk6A';
let url = 'https://api.newscatcherapi.com/v2/search?q=TEsla&page=1&page_size=10';


const cards = document.querySelector("#blog-startup-box");
const options = {
    method: 'GET',
    headers: {
        
        'x-api-key': apiKey
    },
};

function DataFetch2() {

      if(!blogsearching.value){
      url = 'https://api.newscatcherapi.com/v2/search?q=Business&page=2&page_size=10';
  }
  else{
     url = `https://api.newscatcherapi.com/v2/search?q=${blogsearching.value}&page=1&page_size=10`;
  }
    fetch(url, options)
      .then(response => response.json()).then((data) => {
        data.articles.map((data) => {
            console.log(data);
            
            const fragment = document.createElement('div');
            fragment.classList.add('card2')
            const img = document.createElement('img');
            img.src = data.media;
            img.classList = 'card-img';
            fragment.appendChild(img);
            const fragment2 = document.createElement('div');
            fragment2.classList = 'card-body2';
            const h4 = document.createElement('h2');
            h4.classList = 'card-title1';
            h4.textContent = data.author;
            fragment2.appendChild(h4);
            const h3 = document.createElement('h3');
            h3.classList = 'card-title2';
            h3.textContent = data.author;
            fragment2.appendChild(h3);
            const p = document.createElement('p');
            p.textContent = data.summary.slice(0, 200);
            p.classList = 'card-summary'
            fragment2.appendChild(p);
            fragment.appendChild(fragment2);
            blogstartupbox.appendChild(fragment)
            
            
        })
    }).catch((error) => console.log(error));
}


DataFetch2()


search.addEventListener('click', () => {
    console.log(blogsearching.value);
    blogstartupbox.innerHTML = '';
    DataFetch2()
})