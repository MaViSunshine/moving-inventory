import { useContextForm } from '../../context/boxes/ContextBoxForm'

export const BoxForm = () => {

    const { box, handleOnChange, handleSubmit, cancelEdit } = useContextForm()
    return (
        < >
    <div className='column is-half is-offset-one-quarter'>
            <h1 className="has-text-centered is-size-3">{box.id === null ? "Add box" : "Edit box"}</h1>
            <form className="" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name" className="label">Box Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" id="name" placeholder="My box name" value={box.name} onChange={handleOnChange} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="description" className="label">Box Description</label>
                    <div className="control">
                        <input className="input" type="text" name="description" id="description" placeholder="My box description" value={box.description} onChange={handleOnChange} />
                    </div>
                </div>
                <div className="is-flex">
                    <button className="button is-primary" type="submit" >Submit</button>
                    {typeof box.id == 'number' ? <button className='button is-danger ' onClick={cancelEdit}>Cancel</button> : null}
                </div>
            </form>
        </div>
    
        </>

    )
}