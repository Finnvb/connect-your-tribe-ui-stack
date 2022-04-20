// -------------------- Flip card --------------------
const card = document.getElementsByClassName("container");

card[0].addEventListener('click', flip);

function flip(event) {
  const element = event.currentTarget;
  if (element.className === "container") {

    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";

    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
// -------------------- Flip card --------------------





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




function postAndRenderData() {
  // 1. all bindings in the local scope for this function
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
      bio: "Hallo, ik ben Finn van Bekkum. Mijn hobbies zijn gamen, programmeren en voetbal.",
      url: "\r"
    })
  }

  // 2. The logic
  fetch(url, options).then(response => response.json())
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
}

postAndRenderData();
// -------------------- API handling --------------------