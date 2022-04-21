// -------------------- Flip card ----------------------

const card = document.querySelector(".container");

card.addEventListener('click', flip);

function flip(event) {
  const element = event.currentTarget;
  if (element.className === "showCard" || "container") {


    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";

    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
// -------------------- Flip card ----------------------



// -------------------- preloader -------------------------
const preloader = document.querySelector(".preloader");
preloader.classList.toggle("preloaderEnabled");

function hidePreloader() {
  setTimeout(() => {
    preloader.style.display = 'flex';
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
    card.classList.add('show');
  }, 2000)
}

hidePreloader();
// -------------------- preloader -------------------------



// -------------------- API handling --------------------
const baseURL = "https://tribe.api.fdnd.nl/v1";
const studentID = 13;
const nameElement = document.getElementById("name");
const githubHandleElement = document.getElementById("githubHandle");
const bioElement = document.getElementById("bio");


function fetchNameFromAPI() {
  fetch(`${baseURL}/member`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let members = json.data; // array object met alle members 
      members.forEach((member) => {
        if (member.memberId == 21) {

          const nameFromAPI = member.name + member.prefix + member.surname;
          nameElement.innerHTML = nameFromAPI;

          const githubHandleFromAPI = member.githubHandle;
          githubHandleElement.innerHTML = githubHandleFromAPI;

          const bioFromAPI = member.bio;
          bioElement.innerHTML = bioFromAPI;


        }
      })
      console.log(members);

    })
}

fetchNameFromAPI();
postAndRenderData();



function postAndRenderData() {

  const url = `${baseURL}/member`
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      memberId: 21,
      squadId: 1,
      type: "student",
      nickname: "",
      name: "Finn",
      prefix: " van ",
      surname: "Bekkum",
      avatar: "https://avatars.githubusercontent.com/u/26089533?s=400&u=e586804b0a9f377d8f8198b00f5dccaca4c674f2&v=4",
      githubHandle: "Finnvb",
      bio: "Hallo, ik ben Finn van Bekkum. Ik ben eerstejaarsstudent op de FDND opleiding.",
      url: "\r"
    })
  }


  fetch(url, options).then(response => response.json())
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
      errorHandling();
      errorText.innerText = err;
    })
}

// -------------------- API handling --------------------


// -------------------- error handling --------------------
const error = document.querySelector(".error");
const errorText = document.querySelector("#errorText");
function errorHandling(){

 card.style.display = 'none';
 error.classList.remove('error')
error.classList.add('show');
preloader.style.display = 'none';
 
}
// -------------------- error handling --------------------