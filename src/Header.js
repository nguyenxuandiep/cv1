import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from './Button'

function Infor() {
  return (
    <div className="container container-info">
      <div className="row">
        <div className="col-md-4 text-left ">
          <MdAttachEmail />
          <span className="hSmal">nxdiep164@gmail.com</span>
        </div>
        <div className="col-md-4 text-left">
          <FaPhoneAlt />
          <span className="hSmal">(+84)344384401</span>
        </div>
        <div className="col-md-4 text-left">
          <FaLocationDot />
          <span className="hSmal">18 Đường số 1, An Bình, Dĩ An, Bình Dương</span>
        </div>
      </div>
      <hr />
      < div className=" rowTarget title" >

        <h5>MỤC TIÊU NGHỀ NGHIỆP</h5>
        <span className="noteTarget ">Trở thành một Developer giỏi, có chuyên môn tốt với kiến ​​thức nền tảng về thiết kế và phát triển web.
          Rèn luyện kỹ năng; phát triển tố chất thông qua việc chinh phục các chứng chỉ có giá trị chuyên môn cao (mục tiêu là nhà phát triển website W3C).
          Phát triển sản phẩm, các dự án cá nhân nhằm xây dựng thương hiệu.
          Cố vấn, đào tạo cho những bạn trẻ có đam mê về front end developer.
        </span>

      </div>

    </div>
  );
}

function Header() {
  return (
    <div className="container containerAvt" >
      <Button/>

      <div className="header  text-black text-center py-5">

        <div className="row">
          <div className="col-4">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/avatar-chill-anime-2.jpg" alt="Ảnh đại diện" className="avatar rounded-circle img-thumbnail" />

          </div>
          <div className="col-6  colName">
            <h1>Nguyễn Xuân Điệp</h1>
            <h3>Lập trình viên Front-End</h3>
          </div>
        </div>


      </div>
      <Infor />

    </div>
  )
}


export default Header;
