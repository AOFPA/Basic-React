import './post.css'

function Post(props) {
    const { dataInput, closeFunction } = props;

    return (
        <div className="post">
            <div className="post-bg" onClick={closeFunction}></div>
            <div className="post-content">
                <img src={dataInput.imgUrl} alt="" />
                <h4>{dataInput.title}</h4>
            </div>

        </div>
    );
}

export default Post;