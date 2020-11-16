import * as Blessed from 'blessed'
import { Screen } from './screen'

export class Element {
    setScreen(screen: Screen, setOnResize: (onResize: ((w: number, h: number)=>void))=>void) {}

    get handle(): Blessed.Widgets.Node  { return Blessed.box() }
}