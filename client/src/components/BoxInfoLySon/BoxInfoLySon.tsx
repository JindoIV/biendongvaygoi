"use client";
import { useState, useEffect } from "react";
import * as image from "@/assets/Images/LySonMap";
import Image from "next/image";
import Modal from "react-modal";
import "./BoxInfoLySon.css";

interface IBoxInfoLySon {
  open: boolean;
  place: string;
  images?: string[];
  showStar: boolean;
  closeModal: () => void;
}

const BoxInfoLySon = ({ open, place, images = [], showStar, closeModal }: IBoxInfoLySon) => {
  const [modalClass, setModalClass] = useState<string>("Modal");

  useEffect(() => {
    if (open) {
      setModalClass("Modal Modal--open");
    } else {
      setModalClass("Modal Modal--close");
    }
  }, [open]);
  const [showInfo, setShowInfo] = useState<string>("");
  const [showTittle, setShowTittle] = useState<string>("");
  useEffect(() => {
    function displayInformation() {
      switch (place) {
        case "cot_co":
          setShowTittle("Cột cờ Tổ Quốc");
          setShowInfo("Cột cờ được xây dựng vào năm 2013 từ chương trình “Sinh viên với biển, đảo Tổ quốc năm 2013.” Nằm trên núi Thới Lới, huyện đảo Lý Sơn tỉnh Quảng Ngãi Việt Nam với chiều cao khoảng 20m được làm từ bê tông cốt thép chắc chắn.\n Không chỉ khẳng định chủ quyền biển đảo của đất nước mà cột cờ Thới Lới còn thể hiện tinh thần đoàn kết, sự đồng lòng, sẵn sàng chiến đấu bảo vệ Tổ quốc của thế hệ trẻ; là sự quyết tâm, là điểm tựa của ngư dân nơi đảo xa.");
          break;
        case "hai_dang":
          setShowTittle("Ngọn Hải Đăng");
          setShowInfo("Ngọn Hải Đăng Lý Sơn còn có tên gọi thời xưa là Phare Polo Canton. Được người Pháp xây dựng đưa vào hoạt động từ năm 1898 cho đến nay. Hải đăng thuộc Đảo Lý Sơn, xã Lý Hải, huyện Lý Sơn, tỉnh Quảng Ngãi. Nơi đây được xem là ngọn hải đăng cao nhất Việt Nam, với độ cao lên đến 45m, được thiết kế để chiếu sáng và thấu kính cho các con tàu thuyền tìm đường hay đánh bắt cá trên biển, đánh dấu đường trên bờ biển và các bãi cạn nguy hiểm, các lối an toàn vào cảng. Ngoài ra còn giúp máy bay định hướng, tìm đường đi.");
          break;
        case "nui1":
          setShowTittle("Núi Thới Lới");
          setShowInfo("Được hình thành từ 5 ngọn núi lửa đã ngủ quên từ lâu, với độ cao 170m so với mặt nước biển và chiều cao hơn 170km - cao nhất tại Lý Sơn, núi Thới Lới tọa lạc tại phía Đông huyện đảo Lý Sơn, tỉnh Quảng Ngãi luôn khiến du khách phải ngất ngây khi ghé thăm. Đặc biệt hơn nữa khi trên đỉnh núi lại có rất nhiều hồ nước ngọt trong vắt, góp phần cung cấp nước cho đời sống sinh hoạt của người dân.");
          break;
        case "nui2":
          setShowTittle("Núi Giếng Tiên");
          setShowInfo("Núi Giếng Tiền là một trong các di tích của núi lửa khi xưa ở Việt Nam, nằm tại xã An Vĩnh, huyện đảo Lý Sơn với chiều cao 90m và đường kính to lớn khoảng 500m. \nSở dĩ, ngọn núi này có tên “Giếng Tiền” là vì cấu trúc miệng núi tròn trông giống đồng xu. Ngoài ra đây còn là nơi gắn liền với buổi lễ đặc trưng “Lễ Khao Lề Thế Lính Hoàng Sa” vì cư dân thường lấy đất sét từ cái núi lửa này để tạo ra hình nộm cho buổi lễ. Hơn nữa núi Giếng Tiền khá màu mỡ, nhiều đất đỏ bazan nên người dân đảo Lý Sơn thường sử dụng cát từ biển và đất đỏ lấy từ núi Giếng Tiền trồng tỏi. \nChính vì vậy mà tỏi Lý Sơn có một hương vị rất nồng, thơm chứ không hắc, trở thành đặc sản số một của huyện đảo này.");
          break;
        case "chua1":
          setShowTittle("Chùa Đục");
          setShowInfo("Chùa Đục hay còn có tên gọi là \"Chùa không sư\" tọa lạc tại đảo Lý Sơn Việt Nam được xem là một trong những ngôi chùa lâu đời và nổi tiếng nhất nơi đây.Tương truyền, Quán Thế Âm từng chọn ngự ở đây, trấn giữ bình yên cho dân đảo tránh được những cơn thiên tai. Do đó nên ngôi chùa này được xem là nơi có ý nghĩa tâm linh và rất linh thiêng ở vùng biển đảo Lý Sơn.");
          break;
        case "chua2":
          setShowTittle("Chùa Hang");
          setShowInfo("Chùa Hang hay \"Chùa đá trời sinh\" là một trong những ngôi chùa cổ nổi tiếng nhất tại Lý Sơn. Tọa lạc tại xã An Hải đảo Lý Sơn  Việt Nam, Sở dĩ ngôi chùa này có tên gọi đặc biệt là vì ngôi chùa nằm trong một hang đá lớn nhất trong hệ thống hang động ở Lý Sơn. Chùa Hang Lý Sơn là nơi vừa thờ Phật, vừa thờ các vị thần – người có công khai hoang, xây dựng và bảo vệ xóm làng trên đảo. Bên cạnh đó vào năm 1944, nơi đây còn vinh dự được Bộ Văn hóa – Thể thao và Du lịch xếp hạng danh thắng cấp Quốc gia.");
          break;
        case "dinh_lang":
          setShowTittle("Đình Làng An Hải");
          setShowInfo("Tọa lạc tại thôn Đông, xã An Hải, huyện Lý Sơn, Việt Nam, theo ghi chép, nơi đây được xây dựng vào khoảng năm Minh Mạng nhằm phục cho việc sinh hoạt tâm linh, tín ngưỡng của người dân làng An Hải từ xưa đến nay. Ở đây cư dân đề cao tín ngưỡng tự nhiên và sùng bái các vị thần như Ngu Man Nương, tiền hiền hay Thiên Y A Na,... \nĐình Làng An Hải cũng có vai trò quan trọng nhằm phản ánh nên lịch sử hình thành của vùng đất Lý Sơn chính là sự dung hòa giữa  văn hóa Chăm Pa trong lòng văn hóa Việt cổ. Nơi đây cũng được nhà nước công nhận là di tích cấp quốc gia vào năm 1995 và là một trong những đình làng cổ nhất còn lại nguyên vẹn ở Quảng Ngãi hiện nay.");
          break;
        case "dinh_lang2":
          setShowTittle("Đình Làng An Vĩnh");
          setShowInfo("Đình Làng An Vĩnh được xây dựng từ thế kỷ 18, tọa lạc tại đảo Lý Sơn, có giá trị lịch sử to lớn, chứng minh chủ quyền của Việt Nam đối với  2 quần đảo Hoàng Sa và Trường Sa. Đây cũng là nơi được 13 dòng họ trên huyện đảo Lý Sơn tổ chức Lễ khao lề thế lính Hoàng Sa vào nhằm ngày 16/3 âm lịch hàng năm.Lễ hội này tri ân những hùng binh đã vâng mệnh triều đình vượt muôn sóng cả ra biển đảo Hoàng Sa, Trường Sa, cắm mốc, dựng bia khẳng định chủ quyền của Việt Nam trên Biển Đông.");
          break;
        case "trung_bay":
          setShowTittle("Nhà Trưng bày Hải đội Hoàng Sa kiêm quản Bắc Hải");
          setShowInfo("Theo những thông tin ghi lại được thì vào cuối thế kỷ 16 và đầu thế kỷ 17, để tăng cường và quản lý vùng biển đảo của Tổ Quốc, chúa Nguyễn đã ý thức được điều đó nên đã cho xây dựng đội hùng binh Hoàng Sa kiêm quản Bắc Hải do đội quân triều đình quản lý.\n Nhằm để bày tỏ lòng biết ơn to lớn với ông cha và tổ tiên, năm 2010 huyện đảo Lý Sơn đã cho xây Nhà trưng bày Hải đội Hoàng Sa, đây là nơi linh thiêng và có ý nghĩa vô cùng quan trọng với đất nước. Nơi trưng bày Ở đây trưng bày hơn 100 hiện vật của người lính Hoàng Sa cùng nhiều bản đồ và tư liệu cổ để chứng minh Hoàng Sa Trường Sa là của Việt Nam (Bức tượng Đội Hoàng Sa kiêm quản Bắc Hải,Tư liệu về Trường Sa, Hoàng Sa,... )");
          break;
          
          case "cang_LS":
          setShowTittle("Cảng Lý Sơn");
          setShowInfo("Cảng Lý Sơn hay còn gọi là bến tàu Lý Sơn xây dựng năm 1990 có vị trí nằm ở thôn Tây An Vĩnh, huyện Lý Sơn, tỉnh Quảng Ngãi, chiều ngang cầu tàu khoảng  60m2, dài 150m2, ngoài tiếp nhận tàu cá, tàu hàng, tàu khách tuyến Sa Kỳ – Lý Sơn và Đà Nẵng – Lý Sơn, cảng còn phục vụ cho hoạt động tàu cá. Gần 10 năm nay, cảng còn là nơi đón nhận khách du lịch với lưu lượng tăng dần mỗi năm. ");
          break;
        default:
          setShowTittle("");
          setShowInfo("");
      }
    }
    displayInformation();
  }, [place]);

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className={modalClass}
        contentLabel="Example Modal"
        overlayClassName={`Overlay ${open ? "Overlay--after-open" : "Overlay--before-close"}`}
        onAfterClose={() => setModalClass("Modal")}
      >
        <div className="box">
          <h1>{showTittle}</h1>
          {showStar && 
          <div className="starImage">
            <Image src={image.star} alt="Star"/>
          </div>
          }
          <p className="infoText">{showInfo}</p>
          {/* <div className="image">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className="imageItem" />
          ))}
        </div> */}
          <p className="xemTiep" onClick={closeModal}>Xem tiếp</p>
        </div>
      </Modal>
    </>
  );
};

export default BoxInfoLySon;
