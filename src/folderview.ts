import * as Blessed from 'blessed'
import { Element } from './element'

export class FolderView extends Element {
    constructor() {
        super()
        this.box = Blessed.box({
            content: "Das ist der Kommandant",
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
    }

    get handle() {
        return this.box
    }
    
    async setPath(path: string) {
        
    }

    private box: Blessed.Widgets.BoxElement
}