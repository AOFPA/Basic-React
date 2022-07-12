import './item.css';

// props ใช้รับตัวแปร เป็น obj
function Item(props) {

    const { itemObj, whenClickFunction } = props;

    return (
        <div className='item'>
            <img src={itemObj.imgUrl} alt="" onClick={() => whenClickFunction(itemObj)} />
            <h4>{itemObj.title}</h4>
        </div>
    );
}

export default Item;