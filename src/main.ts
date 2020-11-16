import { FolderView } from './folderview'
import { GridLayout } from './GridLayout'
import { Screen } from './screen'

const screen = new Screen({
	smartCSR: true, 
	title: "U Commander"
}) 

const folderLeft = new FolderView()
const folderRight = new FolderView()
const gridLayout = new GridLayout([ folderLeft, folderRight])
screen.addChild(gridLayout)
screen.render()



// screen.append(folderLeft.handle)
// screen.append(folderRight.handle)

// folderLeft.setPath("/home/uwe")
// //box.han.focus()
