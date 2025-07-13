import React, { useEffect } from "react";
import { tns } from "tiny-slider";
import person3 from "../assets/images/person-5.png.jpg";

function StartTestimonial() {
  const customerPerception = [
    {
      id: 1,
      content: ` “Homely đã để lại ấn tượng mạnh mẽ với chúng tôi nhờ phong cách làm việc chuyên nghiệp và chất lượng dịch vụ xuất sắc. 
      Đội ngũ tại đây luôn thể hiện sự tận tâm, am hiểu sâu sắc về lĩnh vực và không ngừng hỗ trợ chúng tôi trong suốt quá trình hợp tác. 
      Nhờ vào sự đồng hành chặt chẽ này, chúng tôi đã đạt được những kết quả đáng tự hào và hoàn thành nhiều dự án quan trọng. 
      Các giải pháp sáng tạo và linh hoạt của Homely thực sự giúp chúng tôi tối ưu hóa quy trình làm việc và mang lại trải nghiệm tốt hơn cho khách hàng. 
      Chúng tôi rất tin tưởng và kỳ vọng vào những cơ hội hợp tác tiếp theo cùng Homely!”`,
      image: person3,
      name: "Viên Thị Thùy Linh",
      job: "CEO VTL",
    },
  ];

  useEffect(() => {
    tns({
      container: ".testimonial-slider",
      items: 1,
      axis: "horizontal",
      controlsContainer: "#testimonial-nav",
      swipeAngle: false,
      speed: 700,
      nav: true,
      controls: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3500,
      autoplayButtonOutput: false,
    });
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Cảm nhận của khách hàng</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  <span className="fa fa-chevron-left" />
                </span>
                <span className="next" data-controls="next">
                  <span className="fa fa-chevron-right" />
                </span>
              </div>
              <div className="testimonial-slider">
                {customerPerception.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>{item.content}</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">{item.name}</h3>
                            <span className="position d-block mb-3">
                              {item.job}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTestimonial;
