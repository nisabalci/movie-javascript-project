const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")

//UI Starter
const ui = new UI()

// Load all elements
eventListeners()

function eventListeners() {
    form.addEventListener("submit", addFilm)
}

function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url === "") {
        ui.displayMessages("Please full the blank spaces")
    }
    else {
        const newFilm = new film(title, director, url)
        ui.addFilmToUI(newFilm) // Add film to UI
    }

    ui.clearInputs(titleElement, urlElement, directorElement)
    e.preventDefault()
}