import { useBoxContext } from '../../context/boxes/ContextBox'
import { useContextForm } from '../../context/boxes/ContextBoxForm'

export const BoxTable = () => {
    const { boxes, editBox, deleteBox } = useBoxContext()
    const { setToEdit } = useContextForm()

    return (
        <div className="container">
            <div className="card-group">
                {
                    boxes.map(box => (
                        <div className="card" key={box.id}>
                            <header className="card-header">
                                <p className="card-header-title">
                                    {box.name}
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {box.description}
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item button is-success" onClick={() => {
                                    setToEdit(box.id, box.name, box.description)
                                    editBox(box.id, box.name, box.description)
                                }}>Edit</a>
                                <a className="card-footer-item button is-danger" onClick={() => deleteBox(box.id)}>Delete</a>
                            </footer>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}