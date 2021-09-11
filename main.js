const links = [
  "https://www.youtube.com/embed/D1ShJtGMksY",
  "https://www.youtube.com/embed/wmadsAoBHqM",
  "https://www.youtube.com/embed/IKM--VgyHso",
  "https://www.youtube.com/embed/vA8l6xtF5is",
  "https://www.youtube.com/embed/bfKBUZra9FU"
]

const buttons = document.querySelectorAll(".nav-item")
const iframe = document.querySelector("iframe")

for (let i in buttons) {
  buttons[i].onclick = function() {
    buttons.forEach((button) => {
      button.classList.remove("active")
    })
    this.classList.add("active")
    iframe.src = links[i]
  }
}