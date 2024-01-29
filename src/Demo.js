import React from "react";

function Demo() {
    const lienHe = {
        avatar: "https://via.placeholder.com/150",
        names: "Nguyễn Văn A",
        job: "Lập trình viên PHP",
        email: "nguyenvana@gmail.com",
        phone: "(+84)123456",
        address: "59 Điện Biên Phủ, Bình Thạnh"
    };

    return (
        <div>
            <div className="profile-card col-md-4 col-sm-6 col-xs-12">
                <div className="card-body text-center">
                    <img src={lienHe.avatar} alt="Avatar" className="avatar" />
                    <h1 className="names">{lienHe.names}</h1>
                    <p className="job">{lienHe.job}</p>

                </div>


            </div>
            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col">
                        <p className="contact">{lienHe.email} | {lienHe.phone}</p>
                        <p className="address">{lienHe.address}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Demo;