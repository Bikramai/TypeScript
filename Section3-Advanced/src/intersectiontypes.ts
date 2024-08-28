type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}; 

// Intersection type
type UIWidget = Draggable & Resizable

let texBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

