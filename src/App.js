import { useState } from 'react';
import './App.css';
//import Component เข้ามาใช้
import AppHeader from './components/AppHeader';
import Item from './components/item';
import Post from './components/post';

//data array
import items from './data/dataAr';

function App() {
    // text คือ ข้อความ เปลี่ยนชื่อได้
    // setText รอคำตอบ เปลี่ยนชื่อได้
    const [text, setText] = useState("1");

    let textPost = null;
    //ถ้าค่าไม่ว่าง
    if (text) {
        textPost = <Post />;
    }

    //map function
    //React บังคับให้ Key ด้วย
    const itemElement = items.map((itemInArray, index) => {
        return <Item key={index} itemObj={itemInArray} />
    })

    return (
        <div className='App'>

            {/* App Header Component */}
            <AppHeader />
            {textPost}

            <div className='app-grid'>
                {itemElement}
            </div>

            {/* <Post /> */}

        </div>
    );
}

export default App;
