import '../style/Home.scss'
import Footer from './Footter'
const Wrapper = () => {

    return (
        <div className="Container-Home" >
            <div className='Home-header-container'>
                <p>Work With Us</p>
            </div>
            <div className="Home-body-container">
                <div className="Home-body-container-top">
                    <div className="Home-body-container-top-left">
                        <div>
                            <h1>Intern Blockchain Developer</h1>
                        </div>
                        <div className='textjustify'>
                            <p>Số lượng: 6</p>
                            <p>Mức lương: $1000 - $2000</p>
                            <p>Nơi làm việc: Hà Nội</p>

                        </div>
                        <div>
                            <h3>Mô tả công việc</h3>
                            <p>- Thực hiện lập trình web cơ bản</p>
                            <p>- Viết code theo yêu cầu</p>
                            <p>- Thực hiện các công việc hỗ trợ team theo yêu cầu quản lý</p>
                        </div>
                        <div>
                            <h3>Yêu cầu ứng viên</h3>
                            <p>Sinh viên năm 3,4 các trường Đại học có thể làm tối thiểu 5 nửa buổi/tuần</p>
                            <p>Yêu thích Game</p>
                            <p>Tư duy logic và có kiến thức cơ bản về lập trình hướng đối tượng, cấu trúc dữ liệu và giải thuật.</p>
                            <p>Năng động, nhiệt huyết sáng tạo phát triển game. </p>
                            <p>Có tinh thần tự giác, cầu tiến, ham học hỏi</p>
                            <p>Đã tìm hiểu căn bản về Blockchain</p>

                        </div>
                        <div>
                            <h3>Quyền lợi</h3>
                            <p>- Được đào tạo các kiến thức về Blockchain Developer</p>
                            <p>- Được tham gia vào dự án game Global của công ty.</p>
                            <p>- Được làm việc trong môi trường trẻ trung, năng động &amp; đội ngũ đồng nghiệp luôn hỗ trợ nhiệt tình</p>
                            <p>- Được training từ đầu như cách viết mail, cách nói chuyện với ứng viên, đăng tin tuyển dụng...</p>
                            <p>- Mức lương từ 2.000.000 - 4.000.000 VNĐ</p>
                            <p>- Hỗ trợ cơm trưa 50k/ngày</p>
                            <p>- Có cơ hội trở thành nhân viên chính thức của công ty</p>
                            <p>- Làm việc từ thứ 2 đến thứ 6, nghỉ t7 và CN</p>
                            <p>- Hưởng các chế độ, phúc lợi như: Thưởng lễ tết, thưởng dự án; Phúc lợi và phụ cấp khác </p>
                            <p>- Tea break vào các buổi chiều</p>
                            <p>- Du lịch và team building 04 lần/năm.</p>
                            <p>- Tham gia đào tạo tiếng Anh và các kỹ năng mềm</p>
                            <p>- Tham gia các hoạt động công ty: đá bóng, chơi game, team building</p>

                        </div>

                    </div >
                    <div className="Home-body-container-top-right">
                        <div>
                            <p>08/08/2021</p>
                            <h3>Intern Blockchain Developer</h3>
                            <p className="ptag">Số lượng: 02</p>
                        </div>
                        <div>
                            <p>08/08/2021</p>
                            <h3>Intern Blockchain Developer</h3>
                            <p className="ptag">Số lượng: 02</p>
                        </div>
                        <div>
                            <p>08/08/2021</p>
                            <h3>Intern Blockchain Developer</h3>
                            <p className="ptag">Số lượng: 02</p>
                        </div>
                        <div>
                            <p>08/08/2021</p>
                            <h3>Intern Blockchain Developer</h3>
                            <p className="ptag">Số lượng: 02</p>
                        </div>
                        <div>
                            <p>08/08/2021</p>
                            <h3>Intern Blockchain Developer</h3>
                            <p className="ptag">Số lượng: 02</p>
                        </div>

                    </div>
                </div>
                <div className="Home-body-container-bottom">
                    <button>Ứng tuyển</button>
                </div>
                <div className='applicationForm'>
                    <form>
                        <h1>Nộp đơn ứng tuyển</h1>
                        <div>
                            <label>Họ &amp; tên bạn (Fullname) *</label>
                            <input placeholder='Họ &amp; tên'></input>
                        </div>
                        <div>
                            <label>Địa chỉ Email *</label>
                            <input placeholder='nhập địa chỉ email'></input>
                        </div>
                        <div>
                            <label>Số điện thoại (Phone number) *</label>
                            <input placeholder='nhập số điện thoại'></input>
                        </div>
                        <div className='customfile'>
                            <div>
                                <p>CV của bạn *</p>
                                <p>Click để chọn &amp; tải lên CV của bạn (chỉ nhận file pdf, tối đa 30MB) </p>
                            </div>
                            <input className='inputfile' type="file"></input>
                        </div>
                        <button>Nộp đơn ứng tuyển</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Wrapper