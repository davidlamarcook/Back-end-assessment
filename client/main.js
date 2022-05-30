const complimentBtn = document.getElementById("complimentButton")

const fortuneButton = document.getElementById("fortuneButton")
const form = document.getElementById('goalForm')
const inspirationalPersonForm = document.getElementById("inspirationalPerson")

const celebrationBtn = document.getElementById("celebrateBtn")
const celebrateContainer = document.querySelector("article")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

const celebrate = () => {
    axios.get("http://localhost:4000/api/getCelebration")
    .then(({ data }) => {
        const celebrateStr = document.createElement("h1")
        celebrateStr.innerHTML = data;
        celebrateContainer.appendChild(celebrateStr)
    })
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const goalInputs = document.querySelectorAll('input')
    const goalContainer = document.querySelector("ul")

    goalInputs.forEach((input) => console.log(input.value))
    const [goalIdea, goalDate] = goalInputs

    axios.get(`http://localhost:4000/api/goals/${goalIdea.value}?goalDate=${goalDate.value}`)
    .then(({ data }) => {
        const goalStr = document.createElement("li")
        goalStr.innerHTML = data;
        goalContainer.appendChild(goalStr)
    })
    .catch((err) => {
        console.log(err)
    })
})

const inspirationPersonFunc = (e) => {
    e.preventDefault();
     const personInput = document.getElementsByClassName("personInputField")
     const personContainer = document.querySelector("section")

     console.log(personInput.value)
     const [ inspirationalPerson ] = personInput

     axios.get(`http://localhost:4000/api/inspirationalPerson/${inspirationalPerson.value}/`)
     .then(({ data }) => {
         const personStr = document.createElement("p")
         personStr.innerHTML = data;
         personContainer.appendChild(personStr)
     })
}


fortuneButton.addEventListener("click", getFortune)
complimentBtn.addEventListener('click', getCompliment)
inspirationalPersonForm.addEventListener('submit', inspirationPersonFunc)
celebrationBtn.addEventListener('click', celebrate)