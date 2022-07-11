import './AppHeader.css'
// ชื่อ function ตัวหน้าต้องเป็นตัวใหญ่
function AppHeader() {
    return (
        <header className='app-header'>
            <img className='app-logo' src="img/logo.jpg" alt="" />
        </header>
    );
}

//export เพื่อเอาไปใช้ในไฟล์อื่นได้
export default AppHeader;