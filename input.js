let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

let buttons  = Array.from(document.getElementsByTagName('button'))


window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});


// controls functionality for if the user is on mobile
buttons.forEach( button => {
  // console.log(button.innerHTML)
  button.addEventListener('click', () => {
    switch (button.innerHTML) {
      case '<i class="fas fa-arrow-up"></i>':
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case '<i class="fas fa-arrow-down"></i>':
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
        break;
      case '<i class="fas fa-arrow-left"></i>':
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case '<i class="fas fa-arrow-right"></i>':
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        break;
    }
  })
})



export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
