import './search.css'

function Search(props) {

    const { value, onValueChange } = props;

    return (
        <div className='app-search'>
            <input
                type="text"
                className='app-input'
                placeholder='ค้นหา'
                value={value}
                onChange={(event) => { onValueChange(event.target.value) }}
            />
        </div>
    )
}

export default Search;