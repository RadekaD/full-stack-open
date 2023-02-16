import App from '../App';

const PersonForm = ( {submit, name, number, nameHandle, numberHandle} ) => {
    return (
        <>
        <form onSubmit={submit}>
            <div>
                name: <input value={name} onChange={nameHandle}/>
            </div>
            <div>
                number: <input value ={number} onChange={numberHandle}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm;