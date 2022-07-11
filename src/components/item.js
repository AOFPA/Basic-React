import './item.css';

// props ใช้รับตัวแปร เป็น obj
function Item(props) {

    const { title, imgUrl } = props.itemObj;

    return (
        <div className='item'>
            <img src={imgUrl} alt="" />
            <h4>{title}</h4>
        </div>
    );
}

export default Item;