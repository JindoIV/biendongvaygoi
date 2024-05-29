"use client";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./BoxInfoLySon.css";

interface IBoxInfoLySon {
  open: boolean;
  place: string;
  images?: string[];
  closeModal: () => void;
}

const BoxInfoLySon = ({ open, place, images = [], closeModal }: IBoxInfoLySon) => {
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
          setShowTittle("Hải Đăng");
          setShowInfo("haiDang nay bu cha ba lun");
          break;
        case "nui1":
          setShowTittle("Núi Thới Lới");
          setShowInfo("Được hình thành từ 5 ngọn núi lửa đã ngủ quên từ lâu, với độ cao 170m so với mặt nước biển và chiều cao hơn 170km - cao nhất tại Lý Sơn, núi Thới Lới tọa lạc tại phía Đông huyện đảo Lý Sơn, tỉnh Quảng Ngãi luôn khiến du khách phải ngất ngây khi ghé thăm. Đặc biệt hơn nữa khi trên đỉnh núi lại có rất nhiều hồ nước ngọt trong vắt, góp phần cung cấp nước cho đời sống sinh hoạt của người dân.");
          break;
        case "nui2":
          setShowTittle("Núi Giếng Tiên");
          setShowInfo("nui2 nay bu cha ba lun");
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
          setShowInfo("dinhlang1 nay bu cha ba lun");
          break;
        case "dinh_lang2":
          setShowTittle("Đình Làng An Vĩnh");
          setShowInfo("dinhlang2 nay bu cha ba lun");
          break;
        case "trung_bay":
          setShowTittle("Nhà Trưng bày Hải đội Hoàng Sa kiêm quản Bắc Hải");
          setShowInfo("Theo những thông tin ghi lại được thì vào cuối thế kỷ 16 và đầu thế kỷ 17, để tăng cường và quản lý vùng biển đảo của Tổ Quốc, chúa Nguyễn đã ý thức được điều đó nên đã cho xây dựng đội hùng binh Hoàng Sa kiêm quản Bắc Hải do đội quân triều đình quản lý.\n Nhằm để bày tỏ lòng biết ơn to lớn với ông cha và tổ tiên, năm 2010 huyện đảo Lý Sơn đã cho xây Nhà trưng bày Hải đội Hoàng Sa, đây là nơi linh thiêng và có ý nghĩa vô cùng quan trọng với đất nước. Nơi trưng bày Ở đây trưng bày hơn 100 hiện vật của người lính Hoàng Sa cùng nhiều bản đồ và tư liệu cổ để chứng minh Hoàng Sa Trường Sa là của Việt Nam (Bức tượng Đội Hoàng Sa kiêm quản Bắc Hải,Tư liệu về Trường Sa, Hoàng Sa,... )");
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
        className="Modal"
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div className="box">
          <h1>{showTittle}</h1>
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
