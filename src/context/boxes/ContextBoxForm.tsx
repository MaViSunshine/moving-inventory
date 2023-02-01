import React,{ useContext, useState, createContext } from 'react'
import { Children } from '../../utilities/types/Children'
import { useBoxContext } from './ContextBox'
import { useNotificationsContext } from '../notifications/ContextNotifications'
import { isStringEmpty } from '../../utilities/isStringEmpty'

// ? Types 

type BoxState = {
    id: number | null,
    name: string,
    description: string
}

type ContextBoxFormType = {
    box: BoxState
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void
    handleOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void)
    setToEdit: (id: number, name: string, description: string) => void
    cancelEdit: () => void
}

const initialBoxState = {
    id: null,
    name: '',
    description: ''
} as BoxState

// ? Context

const ContextBoxesForm = createContext({} as ContextBoxFormType)

export const useContextForm = () => useContext(ContextBoxesForm)

// ? Provider

export const ContextBoxesFormProvider = ({ children }: Children) => {
    const { addBox, editBox } = useBoxContext()
    const { addNofitication } = useNotificationsContext()

    const [box, setBox] = useState(initialBoxState)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isStringEmpty(box.name) || isStringEmpty(box.description)) {
            addNofitication({ title: "Warning", body: "You cannot add a box without name or description" })
        } else {
            box.id === null ? addBox(box.name, box.description) : editBox( box.id, box.name, box.description)
            setBox(initialBoxState)
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBox({ ...box, [e.target.name]: e.target.value })
    }

    const setToEdit = (id: number, name: string, description: string) => {
        setBox({ ...box, id, name, description })
    }

    const cancelEdit = () => {
        setBox(initialBoxState)
    }

    return (
        <ContextBoxesForm.Provider value={{
            box,
            handleSubmit,
            handleOnChange,
            setToEdit,
            cancelEdit
        }}>
            {children}
        </ContextBoxesForm.Provider>
    )
}