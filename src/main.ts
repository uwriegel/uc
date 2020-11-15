import * as blessed from 'blessed'

const screen = blessed.screen({
    smartCSR: true,
    style: {
        fg: 'white',
        bg: 'blue'
      }    
  })

screen.title = "U Commander"

const box = blessed.box({
    left: '0',
    width: '50%',
    content: "Das ist der Kommandant Links",
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'blue',
      border: {
        fg: '#f0f0f0',
        bg: 'blue'
      }
    }    
})

const boxRight = blessed.box({
    left: '50%',
    width: '50%',
    content: "Das ist der Kommandant Rechts",
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'blue',
      border: {
        fg: '#f0f0f0',
        bg: 'blue'
      }
    }    
})

screen.append(box)
screen.append(boxRight)
box.focus()
screen.render()