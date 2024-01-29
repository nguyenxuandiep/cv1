  import Skills from "./Skill";

// Left column content
function LeftColumn() {

  return (
    <div className="leftContent">
      <div className="title">
        <Skills/>
      </div>
    

      <div className="title">
        <h5>HỌC VẤN</h5>
        <p>CHUYÊN NGÀNH: CÔNG NGHỆ THÔNG TIN</p>
        <span className="hSmal" >Cao Đẳng AN NINH MẠNG ISPACE </span><br/>
        <span>9/2022 - 05/2025 <br/>
          Tốt nghiệp loại Giỏi, điểm trung bình 8.0
        </span>
      </div>

      <div className="title">
        <h5>HOẠT ĐỘNG</h5>
        <p>THÀNH VIÊN</p>
        <span>-Tham gia các clb ở trường <br/>
          -Cùng team lập trình dự giải và đạt giải
        </span>
      </div>

      <div className="title"> 
        <h5>GIẢI THƯỞNG</h5>
        <p>SINH VIÊN 5 TỐT</p>
        <p>SINH VIÊN ĐẠT GIẢI NHẤT CUỘC THI LẬP TRÌNH CỦA TRƯỜNG</p>
      </div>

      <div className="title">
        <h5>SỞ THÍCH</h5>
        <ul className="grid-container">
          <li>-Đá bóng</li>
          <li>-Nghe nhạc</li>
          <li>-Tập gym</li>
          <li>-Đọc sách</li>
        </ul>
      </div>
    </div>

  );
}

export default LeftColumn;