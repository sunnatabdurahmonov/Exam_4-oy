const menu_btn = document.querySelector('.menu_btn');
const navigation = document.querySelector('.nav_list');

const myApikey = 'FeQ62AmiN85GR31_ZZ5RSbSSYABHHNgBFl1FZlNHk6A';
const url = 'https://api.newscatcherapi.com/v2/search';

const sectioncards = document.querySelector("#section_cards");
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': myApikey
    },
    body: JSON.stringify({
        lang: 'en',
        q: 'Tesla',
        sort_by: 'relevancy',
        page: 4
    })
};



async function DataFetch(url, options) {

    try{
        const response = await fetch(url, options);
        const data = await response.json();
        const slice = data.articles.slice(0, 3);
        console.log(data);
        slice.map((data) => {
            const fragment = document.createElement('div');
            fragment.classList.add('card')
            const img = document.createElement('img');
            img.src = data.media;
            fragment.appendChild(img);
            const span = document.createElement('p');
            span.classList.add('span_api')
            span.textContent = "By" + data.author + ' | ' + data.published_date;
            fragment.appendChild(span);
    
            const h3 = document.createElement('h3');
            h3.textContent = data.title;
            fragment.appendChild(h3);
    
            sectioncards.appendChild(fragment)
        })
    }
    catch(error){
        console.log(error);
    }
}

DataFetch(url, options)




menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    navigation.classList.toggle('active')
})


const form = document.querySelector('.form')
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.Lastname');
const username = document.querySelector('.Username');
const password1 = document.querySelectorAll('.password');
const Span = document.querySelector('.Span');
const form2 = document.querySelector('.form-2')
const Span2 = document.querySelector('.Span2');
const Span3 = document.querySelector('.Span3');
const Span4 = document.querySelector('.Span4');
const btn_3 = document.querySelector('.btn_3')
const username2 = document.querySelector('.username2')
const loginPassword = document.querySelector('.login_Password')


form.addEventListener('submit', (e) => {
    e.preventDefault()
   if(!firstname.value || !lastname.value || !username.value){
    Span.innerHTML = 'Inputs not full';
   }
    else if (password1[0].value != password1[1].value) {
        Span.textContent = 'Password';
    }
    else if(!password1[0].value || !password1[1].value){
        Span.innerHTML = 'Enter your password';
    }   
    else{
    
        Span3.textContent = 'Success'
    }
})

form.addEventListener('submit', (e) => {
 e.preventDefault()

 if(!username2.value || !loginPassword.value){
    Span2.innerHTML = 'Inputs not full';
    username.classList.add('warning');}

else{
    Span4.innerHTML = 'Success'
}
});
