const addPersonInput = document.querySelector("#addPerson")
const addPersonBtn = document.querySelector("#addPersonBtn")
const addFastTrackBtn = document.querySelector("#addFastTrackBtn")
const checkInBtn = document.querySelector("#checkInBtn")
const myList = document.querySelector("#myList")
const myPara = document.createElement("p")

const myArr = [];

if (myArr.length === 0) {

    myPara.textContent = "There are currently no people standing in line"
    myList.appendChild(myPara);
}

addPersonBtn.addEventListener("click", () => {
    myArr.push(addPersonInput.value)
    const myLi = document.createElement("li")
    myPara.remove()
    myArr.forEach(index => {
        myLi.textContent = `#${myArr.indexOf(index) + 1}: ${index}`
    })
    myList.appendChild(myLi)
    addPersonInput.value = ""
})

addFastTrackBtn.addEventListener("click", () => {
    const fastTrackPerson = addPersonInput.value
    myArr.unshift(fastTrackPerson)
    myList.innerHTML = "";
    myArr.forEach(index => {
        const myLi = document.createElement("li")
        myLi.textContent = `#${myArr.indexOf(index) + 1}: ${index}`;
        myList.appendChild(myLi)
    })
    addPersonInput.value = ""
})

checkInBtn.addEventListener("click", () => {
    myArr.splice(0, 1);
    myList.innerHTML = "";
    myArr.forEach(index => {
        const myLi = document.createElement("li")
        myLi.textContent = `#${myArr.indexOf(index) + 1}: ${index}`;
        myList.appendChild(myLi)
    })
    if (myArr.length === 0) {

        myPara.textContent = "There are currently no people standing in line"
        myList.appendChild(myPara);
    }
    addPersonInput.value = ""
})