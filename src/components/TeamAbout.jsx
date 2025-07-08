import person5 from "../assets/images/person-5.png.jpg";

function TeamAbout() {
  const openFBTL = () => {
    window.open("https://www.facebook.com/profile.php?id=100081308084785");
  };

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Đội ngũ phát triển</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 text-center">
            <img src={person5} className="img-fluid mb-5" alt="Viên Thị Thùy Linh" />
            <h3>
              <a onClick={openFBTL} style={{ textDecoration: "none" }} href="#">
                Viên Thị Thùy Linh
              </a>
            </h3>
            <span className="d-block position mb-4">
              <span className="fa-solid fa-location-dot" /> Hòa Bình
            </span>
            <p>
              Trong quá trình phát triển dự án, tôi đã chịu trách nhiệm xây dựng
              các tính năng cốt lõi, đối mặt với nhiều thách thức kỹ thuật và
              tìm ra giải pháp khắc phục các vấn đề phát sinh. Bên cạnh đó, tôi
              cũng thực hiện việc kiểm thử ứng dụng nhằm đảm bảo chất lượng sản
              phẩm, đồng thời rút ra được nhiều kinh nghiệm thực tiễn trong quy
              trình phát triển phần mềm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamAbout;
