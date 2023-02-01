import { createContext, useContext, useState, useEffect } from 'react'
import fetchboxes from '../../data/boxes.json'
import { Children } from '../../utilities/types/Children'
import { Box } from '../../utilities/types/Box'

// ? Types

type BoxesContextValues = {
    boxes: Array<Box>
    addBox: (name: string, description: string) => void
    deleteBox: (id: number) => void
    editBox: (id: number, newName: string, newDescription: string) => void
}


// ? Data
const storedItem = localStorage.getItem("boxes") as string
let json_boxes: Array<Box> | null
json_boxes = JSON.parse(storedItem)
json_boxes === null ? json_boxes = fetchboxes : null

const initialBoxes = json_boxes

// ? Context
const BoxesContext = createContext({} as BoxesContextValues)

export const useBoxContext = () => useContext(BoxesContext)

export const BoxesProvider = ({ children }: Children) => {
    const [boxes, setBoxes] = useState(initialBoxes as Array<Box>)

    // ? Methods
    function addBox(name: string, description: string) {
        setBoxes([...boxes, { id: boxes.length, name, description }])
    }

    function deleteBox(id: number) {
        setBoxes(boxes.filter(box => box.id !== id))
    }

    function editBox(id: number, newName: string, newDescription: string) {
        setBoxes(boxes.map(box => box.id === id ? { id, name: newName, description: newDescription } : box
        ))
    }

    useEffect(() => {
        console.log("changed")
        localStorage.setItem("boxes", JSON.stringify(boxes))
    }, [boxes])

    return (
        <BoxesContext.Provider value={{
            boxes, addBox, deleteBox, editBox
        }}>
            {children}
        </BoxesContext.Provider>
    )
}