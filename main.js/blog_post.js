let url = 'https://api.newscatcherapi.com/v2/search?q=TEsla&page=1&page_size=10';
const formabout = document.querySelector(".form-about");
const aboutBtn = document.querySelector(".about_btn");
const aboutbox = document.querySelector('.about_box2')
const title1 = document.querySelector(".title");
const text1 = document.querySelector(".text");
const elInp = document.querySelector("#avatar");
const myData1 = document.querySelector('.myData')

formabout.addEventListener("submit",  (e)=> {
  e.preventDefault();

  const myavatar = document.querySelector(".avatar").files[0];

  // console.log(avatar);
  const reader = new FileReader()

reader.readAsDataURL(myavatar)

reader.onload = () => {
    const imgUrl = reader.result;
    console.log(imgUrl);

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: title1.value,
        vaqt: text1.value,
        data: myData1.value,
      }),
    })
      .then((repons) => repons.json())
      .then((data) => console.log(data));


 let elImages = document.createElement("img")
 let elName = document.createElement("h3");
 let elData = document.createElement("p");
  let elAge = document.createElement("p");

  elImages.src = imgUrl
  elName.textContent = title1.value;
  elAge.textContent = text1.value;
  elData.textContent = myData1.value;
  aboutbox.append(elImages,elName,elAge,elData);

   text1.value = "";
    title1.value = "";
    myData1.value = "";
}
})

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('active')
  navigation.classList.toggle('active')
})

