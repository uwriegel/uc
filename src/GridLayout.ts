import * as Blessed from 'blessed'
import { Element } from './element'
import { Screen } from './screen'

export class GridLayout extends Element {

    constructor(elements: Element[]) {
        super()
        this.elements = elements
    }

    setScreen(screen: Screen, setOnResize: (onResize: ((w: number, h: number)=>void))=>void) {
        this.elements.forEach((n, i) =>  screen.append(n.handle))
        this.resize(screen.width as number, screen.height as number)
        setOnResize((w, h) => this.resize(w, h))
    }

    private resize(width: number, height: number) {
        const cellwidth = Math.floor(width / this.elements.length)
        let mod = width % this.elements.length
        let position = 0
        this.elements.forEach((n, i) => {  
            const bn = n.handle as Blessed.Widgets.BoxElement
            const add = mod-- > 0 ? 1 : 0
            const thiswidth = cellwidth + add
            bn.left = position
            bn.width = thiswidth
            position += thiswidth
        })
    }

    private elements: Element[] = []
}