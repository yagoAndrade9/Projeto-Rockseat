function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  updateImage()
}

function updateImage() {
  const img = document.querySelector("#profile img")
  const isLight = document.documentElement.classList.contains("light")

  if (isLight) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

document.addEventListener("DOMContentLoaded", updateImage)
