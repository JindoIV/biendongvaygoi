"use client";
import { useState, useEffect } from "react";
import daoTS from "@/assets/Images/Truong-Sa-Lon-.jpg";
import daoTSL2 from "@/assets/Images/daotruongsalon.jpg"; // Add this import
import daoSTT from "@/assets/Images/song-tu-tay-1.jpg"; // Add this import
import daoSTT2 from "@/assets/Images/songtutay.2.jpg"; // Add this import
import daoAnBang from "@/assets/Images/daoanbang.jpg"; // Add this import
import daoAnBang2 from "@/assets/Images/daoanbang.2.png"; // Add this import
import daoGMa from "@/assets/Images/ĐGACMA.jpg"; // Add this import
import daoGMa2 from "@/assets/Images/ĐGACMA.2.jpg"; // Add this import
import { Image } from "antd";
import Modal from "react-modal";
import "./BoxInfoTruongSa.css";
import { StaticImageData } from "next/image";

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
  const [showImg1, setShowImg1] = useState<string>("");
  const [showImg2, setShowImg2] = useState<string>("");

  useEffect(() => {
    function displayInformation() {
      switch (place) {
        case "diaDiem1":
          setShowTittle("ĐẢO TRƯỜNG SA LỚN");
          setShowInfo(
            "Tọa lạc tại trung tâm quần đảo Trường Sa, cách cảng Cam Ranh, Khánh Hòa khoảng 254 hải lý. Từ xa nhìn lại, đảo Trường Sa hiện lên như một hòn đảo xinh đẹp, xanh tươi tràn đầy sức sống cũng là nơi đặc biệt được đầu tư sở hạ tầng theo hướng phát triển kinh tế dân sinh biển gắn với quốc phòng an ninh. Ngoài việc là một vị trí đắc địa trong lĩnh vực quốc phòng an ninh. Đảo còn là nơi lánh nạn, cấp cứu các ngư dân mỗi khi gặp trường hợp khẩn cấp trên đường đi đánh cá. Đảo Trường Sa Lớn không chỉ như một điểm đảo tiền tiêu bảo vệ chủ quyền trên biển, mà còn là một huyện đảo dân sinh, đang từng ngày, từng giờ hòa nhịp sống cùng sự phát triển của đất nước."
          );
          setShowImg1(daoTS.src);
          setShowImg2(daoTSL2.src);
          break;
        case "diaDiem2":
          setShowTittle("ĐẢO SONG TỬ TÂY");
          setShowInfo(
"Đảo Song Tử Tây nằm ở cực Bắc quần đảo Trường Sa, cách Cảng Cam Ranh 308 hải lý, có diện tích 210.080 m2. Lòng đảo trũng, xung quanh có độ cao so với mực nước biển từ 4 - 6 m, có nhiều giếng nước lợ để tắm giặt và tưới cây. Nhìn từ xa, đảo như một thành phố thu nhỏ, thanh bình mọc lên giữa đại dương với màu xanh của cỏ cây hoà với màu xanh của biển. Những người lính canh giữ đảo cũng giữ được vẻ chân chất, sắt son như ở trên đất liền để bù lại những con sóng mạnh suốt bốn mùa.\n Trong suốt 48 năm qua, tính từ sự kiện Đại Thắng Mùa Xuân năm 75, xã đảo Song Tử Tây được tặng thưởng nhiều danh hiệu cao quý, đặc biệt là danh hiệu đơn vị Anh hùng Lực lượng vũ trang nhân dân (năm 2019)..."
          );
          setShowImg1(daoSTT.src);
          setShowImg2(daoSTT2.src);
          break;
        case "diaDiem3":
          setShowTittle("ĐẢO GẠC MA");
          setShowInfo(
            "Sự kiện đảo Gạc Ma là một bi kịch đau lòng của dân tộc Việt Nam ta. Vào ngày 14 tháng 3 năm 1988, Hải quân Trung Quốc đã tấn công và chiếm đóng Đảo Gạc Ma, gây cho quân ta thiệt hại lớn về quân lực và của cải. Trong cuộc tiến công của quân địch, 64 thủy thủ quân ta đã hy sinh anh dũng nhưng vẫn một lòng phất cao lá cờ dân tộc, các anh ra đi để lại những vết thương sâu sắc trong lòng người ở lại và sự tự hào về tinh thần hy sinh quả cảm của những người chiến sĩ bảo vệ chủ quyền biển đảo của đất nước.\n Đảo Gạc Ma giờ đây đã trở thành chứng nhân lịch sử cho tấm lòng yêu nước cao cả của nhân dân Việt Nam, và nó còn là biểu tượng của sự kiên cường và sự hy sinh không hối tiếc của những người chiến sĩ trong việc bảo vệ biên cương và chủ quyền quốc gia. Từ lòng biết ơn sâu sắc, nhân dân và chính quyền đảo Gạc Ma đã xây dựng nên tượng đài tưởng niệm các chiến sĩ Gạc Ma, mang tên “Những người nằm lại phía chân trời” nhằm tưởng nhớ công lao to lớn, tấm lòng anh dũng của các anh."
          );
          setShowImg1(daoGMa.src);
          setShowImg2(daoGMa2.src);
          break;
        case "diaDiem4":
          setShowTittle("ĐẢO AN BANG");
          setShowInfo(
            "An Bang còn có một tên gọi khác là đảo Đồng Hồ, vì dưới chân đảo thường nổi lên bãi cát nhỏ di chuyển theo mùa, chạy vòng quanh theo chu kỳ, là chốt tiền tiêu bảo vệ vùng biển đảo phía Nam thuộc huyện đảo Trường Sa, tỉnh Khánh Hòa, là một hòn đảo nhỏ trong cụm đảo khu vực 4. Đảo có vị trí chiến lược quan trọng về quân sự và phát triển kinh tế biển giữa quần đảo Trường Sa với khu vực nhà giàn DK1.\n Hơn nữa, nơi đây cũng là khu vực có vị trí rất quan trọng, là cầu nối giữa các đảo thuộc quần đảo Trường Sa với khu vực dầu khí nằm trên thềm lục địa phía Nam của Tổ quốc."
          );
          setShowImg1(daoAnBang.src);
          setShowImg2(daoAnBang2.src);
          break;
        default:
          setShowTittle("");
          setShowInfo("");
          setShowImg1("");
          setShowImg2("");
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
            <div className="imageContainerTS">
              {showImg1 && <Image src={showImg1} alt="Image 1" />}
              {showImg2 && <Image src={showImg2} alt="Image 2" />}
            </div>
            <div className="xemTiep" onClick={closeModal}>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BoxInfoTruongSa;