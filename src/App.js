import { useState } from 'react';
import './App.css';
//import Component เข้ามาใช้
import AppHeader from './components/AppHeader';
import Item from './components/item';
import Post from './components/post';
import Search from './components/search';

//data array
import items from './data/dataAr';




function App() {
    //* UseState
    //      selectItem คือ ข้อความ/ข้อมูล เปลี่ยนชื่อได้
    //      setItem เอาไว้ set data ได้ เปลี่ยนชื่อได้
    const [selectItem, setItem] = useState(null);
    const [searchText, setSearchText] = useState('');



    //* เอา Function นี้ไปผูกกับการกดรูปภาพ
    function onItemOpenClick(itemInput) {
        setItem(itemInput);
    }
    function onPostCloseClick() {
        setItem(null);
    }



    let textPost = null;
    //ถ้า selectItem มีข้อมูล
    if (selectItem) {
        textPost = <Post dataInput={selectItem} closeFunction={onPostCloseClick} />;
    }



    const filteredItems = items.filter((data) => {
        return data.title.includes(searchText);
        //return เป็น Array ใหม่ที่เก็บรายการสินค้าที่ตรงกับคำที่เราค้นหา
    })
    //map function
    //React บังคับให้ Key ด้วย
    const itemElement = filteredItems.map((itemInArray, index) => {
        return <Item key={index} itemObj={itemInArray} whenClickFunction={onItemOpenClick} />
    })



    return (
        <div className='App'>

            {/* App Header Component */}
            <AppHeader />

            <section className='app-section'>
                <div className='app-container'>

                    <Search value={searchText} onValueChange={setSearchText} />
                    <div className='app-grid'>
                        {itemElement}
                    </div>

                </div>
            </section>







            {textPost}


            {/* เรียกใช้ Function จากการกดปุ่ม */}
            {/* <button onClick={() => { onItemOpenClick(items[0]) }}>Click!</button> */}
        </div>
    );
}

export default App;
