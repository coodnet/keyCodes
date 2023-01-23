window.addEventListener('DOMContentLoaded', () => {
  const offer = document.querySelector('.offer'),
    keyTitle = document.querySelector('.key__title'),
    pressedKey = document.querySelector('.pressed__key'),
    key = document.querySelector('#key'),
    eventKey = document.querySelector('#eventKey'),
    keyCode = document.querySelector('#keyCode'),
    eventCode = document.querySelector('#eventCode'),
    mainKeyCode = document.querySelector('.main__keyCode'),
    dump = document.querySelector('.dump__scroll')

  const constructor = () => {
    pressedKey.textContent = 'event'
    keyTitle.textContent = ''
    key.textContent = 'event'
    eventKey.textContent = ''
    keyCode.textContent = 'event'
    eventCode.textContent = ''
    offer.style.overflow = 'hidden'
  }
  constructor()

  const additon = (e) => {
    ;`
    

    `
  }

  const keyEventCunstructor = (e) => {
    offer.classList.add('hide')

    pressedKey.textContent = `${e.key}`
    keyTitle.textContent = `pressed ${e.key}`

    key.textContent = `"${e.key}"`
    eventKey.textContent = `event.key == "${e.key}"`

    keyCode.textContent = `${e.keyCode}`
    eventCode.textContent = `event.keyCode == ${e.keyCode}`
    dump.innerHTML = `
    {
      <br>
      "key":${e.key}, <br>
      "keyCode":${e.keyCode}, <br>
      "which":${e.which},<br>
      "code":${e.code},<br>
      "location":${e.location},<br>
      "altKey":${e.altKey},<br>
      "ctrlKey":${e.ctrlKey},<br>
      "metaKey":${e.metaKey},<br>
      "shiftKey":${e.shiftKey},<br>
    }
    `

    mainKeyCode.textContent = `${e.keyCode}`

    if (e.keyCode == 32) {
      pressedKey.textContent = 'Space'
      key.textContent = `"(blank space)"`
      eventKey.textContent = `event.key == " "`
      mainKeyCode.textContent = '(blank space)'
      keyTitle.textContent = `pressed Space`
    }
  }

  window.addEventListener('keydown', (e) => {
    keyEventCunstructor(e)
    console.log(e)
  })
})
