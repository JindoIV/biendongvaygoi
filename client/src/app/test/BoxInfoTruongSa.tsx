"use client";
import { useState, useEffect } from "react";
import * as image from "@/assets/Images/TruongSaMap";
import Image, { StaticImageData } from "next/image";
import Modal from "react-modal";
import "./BoxInfoTruongSa.css";

interface IBoxInfoTruongSa {
  open: boolean;
  place: string;
  closeModal: () => void;
}

const BoxInfoTruongSa = ({ open, place, closeModal }: IBoxInfoTruongSa) => {
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
  const [showImg1, setshowImg1] = useState<StaticImageData | null>(null);
  const [showImg2, setshowImg2] = useState<StaticImageData | null>(null);
  useEffect(() => {
    function displayInformation() {
      switch (place) {
        case "diaDiem1":
          setShowTittle("ĐẢO TRƯỜNG SA LỚN");
          setShowInfo(
            "Tọa lạc tại trung tâm quần đảo Trường Sa, cách cảng Cam Ranh, Khánh Hòa khoảng 254 hải lý. Từ xa nhìn lại, đảo Trường Sa hiện lên như một hòn đảo xinh đẹp, xanh tươi tràn đầy sức sống cũng là nơi đặc biệt được đầu tư sở hạ tầng theo hướng phát triển kinh tế dân sinh biển gắn với quốc phòng an ninh. Ngoài việc là một vị trí đắc địa trong lĩnh vực quốc phòng an ninh. Đảo còn là nơi lánh nạn, cấp cứu các ngư dân mỗi khi gặp trường hợp khẩn cấp trên đường đi đánh cá. Đảo Trường Sa Lớn không chỉ như một điểm đảo tiền tiêu bảo vệ chủ quyền trên biển, mà còn là một huyện đảo dân sinh, đang từng ngày, từng giờ hòa nhịp sống cùng sự phát triển của đất nước."
          );
          break;
        case "diaDiem2":
          setShowTittle("ĐẢO SONG TỬ TÂY");
          setShowInfo(
            "Đảo Song Tử Tây nằm ở cực Bắc quần đảo Trường Sa, cách Cảng Cam Ranh 308 hải lý, có diện tích 210.080 m2. Lòng đảo trũng, xung quanh có độ cao so với mực nước biển từ 4 - 6 m, có nhiều giếng nước lợ để tắm giặt và tưới cây. Nhìn từ xa, đảo như một thành phố thu nhỏ, thanh bình mọc lên giữa đại dương với màu xanh của cỏ cây hoà với màu xanh của biển. Những người lính canh giữ đảo cũng giữ được vẻ chân chất, sắt son như ở trên đất liền để bù lại những con sóng mạnh suốt bốn mùa.\n Trong suốt 48 năm qua, tính từ sự kiện Đại Thắng Mùa Xuân năm 75, xã đảo Song Tử Tây được tặng thưởng nhiều danh hiệu cao quý, đặc biệt là danh hiệu đơn vị Anh hùng Lực lượng vũ trang nhân dân (năm 2019)..."
          );
          break;
        case "diaDiem3":
          setShowTittle("Núi Giếng Tiên");
          setShowInfo(
            "Núi Giếng Tiền là một trong các di tích của núi lửa khi xưa ở Việt Nam, nằm tại xã An Vĩnh, huyện đảo Lý Sơn với chiều cao 90m và đường kính to lớn khoảng 500m. \nSở dĩ, ngọn núi này có tên “Giếng Tiền” là vì cấu trúc miệng núi tròn trông giống đồng xu. Ngoài ra đây còn là nơi gắn liền với buổi lễ đặc trưng “Lễ Khao Lề Thế Lính Hoàng Sa” vì cư dân thường lấy đất sét từ cái núi lửa này để tạo ra hình nộm cho buổi lễ. Hơn nữa núi Giếng Tiền khá màu mỡ, nhiều đất đỏ bazan nên người dân đảo Lý Sơn thường sử dụng cát từ biển và đất đỏ lấy từ núi Giếng Tiền trồng tỏi. \nChính vì vậy mà tỏi Lý Sơn có một hương vị rất nồng, thơm chứ không hắc, trở thành đặc sản số một của huyện đảo này."
          );
        case "diaDiem4":
          setShowTittle("ĐẢO AN BANG");
          setShowInfo(
            "An Bang còn có một tên gọi khác là đảo Đồng Hồ, vì dưới chân đảo thường nổi lên bãi cát nhỏ di chuyển theo mùa, chạy vòng quanh theo chu kỳ, là chốt tiền tiêu bảo vệ vùng biển đảo phía Nam thuộc huyện đảo Trường Sa, tỉnh Khánh Hòa, là một hòn đảo nhỏ trong cụm đảo khu vực 4. Đảo có vị trí chiến lược quan trọng về quân sự và phát triển kinh tế biển giữa quần đảo Trường Sa với khu vực nhà giàn DK1.\n Hơn nữa, nơi đây cũng là khu vực có vị trí rất quan trọng, là cầu nối giữa các đảo thuộc quần đảo Trường Sa với khu vực dầu khí nằm trên thềm lục địa phía Nam của Tổ quốc."
          );
          break;

          break;
        default:
          setShowTittle("");
          setShowInfo("");
          setshowImg1(null);
          setshowImg2(null);
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
        overlayClassName={`Overlay ${
          open ? "Overlay--after-open" : "Overlay--before-close"
        }`}
        onAfterClose={() => setModalClass("Modal")}
      >
        <div className="box">
          <h1>{showTittle}</h1>
          <div className="scrollableContent">
            <p className="infoText">{showInfo}</p>
            <div className="imageContainer">
              {showImg1 && <Image src={showImg1} alt="Image 1" />}
              {showImg2 && <Image src={showImg2} alt="Image 2" />}
            </div>
            <p className="xemTiep" onClick={closeModal}>
              Xem tiếp
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BoxInfoTruongSa;
