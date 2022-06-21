let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")
let total = document.getElementById("total")
let contadorDeTweets = 0;
let data = {};


form.addEventListener("submit", (evento) =>{
  evento.preventDefault();
  formValidation()
})

const formValidation = () => {
  if(input.value == ""){
    msg.innerHTML = "El campo esta vacio"
    input.style.border = "1px solid red"
  } else {
    msg.innerHTML = ""
    input.style.border = "1px solid black"
    acceptData()
  }
}

const acceptData = () => {
  data["text"] = input.value;
  contadorDeTweets = contadorDeTweets + 1;
  total.innerHTML = `Total: ${contadorDeTweets}`
  crearTweet()
}

const crearTweet = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editTweet(this)" class="fas fa-edit"></i>
      <i onClick="deleteTweet(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;

  input.value = "";
}

let deleteTweet = function (evento) {
  // contadorDeTweets -= 1;
  contadorDeTweets = contadorDeTweets - 1
  total.innerHTML = `Total: ${contadorDeTweets}`

  evento.parentElement.parentElement.remove()
 
}

const editTweet = (evento) => {
  contadorDeTweets -= 1;
  total.innerHTML = `Total: ${contadorDeTweets}`

  input.value = evento.parentElement.previousElementSibling.innerHTML;
  evento.parentElement.parentElement.remove();
}