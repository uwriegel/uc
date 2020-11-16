import { Element } from './element'
import * as Blessed from 'blessed'

export class Screen {
    constructor(options: Blessed.Widgets.IScreenOptions) {
        this.screen = Blessed.screen(options)
    }

    addChild(element: Element) {
        element.setScreen(this, 
            resize => this.screen.on("resize", _ => {
                resize(this.screen.width as number, this.screen.height as number)
                this.screen.render()
            }))
    }

    append(element: Blessed.Widgets.Node) {
        this.screen.append(element)
    }

    get width() { return this.screen.width }
    get height() { return this.screen.height }

    render() { this.screen.render() }
 
    private screen: Blessed.Widgets.Screen
}