"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ScreenAvA.css";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
import { http } from "@/utils/config";
import Question from "@/types/question";
import { Button } from "antd";
import { question } from "@/assets/Images/TruongSaMap";
import ModalQuestionLS from "../ModalQuestionLS/ModalQuestionLS";

interface IScreenAvA {
  open: boolean;
  onClose: () => void;
}

const questionLySon = [
  {
    question: "Đảo Lý Sơn tọa lạc ở tỉnh nào?",
    options: "Khánh Hòa| Trà Vinh| Thái Nguyên| Quãng Ngãi",
    correctAnswer: 3,
    image: "",
    explanation:
      "Đảo Lý Sơn nằm ở phía Đông Bắc của Quãng Ngãi, cách đất liền 15 hải lý (tầm 28km).",
  },
  {
    question: "Hai loài thực vật nổi tiếng nhất ở đảo Lý Sơn là",
    options:
      "tỏi, rong bìm bìm| cần tây, hành lá| cải thìa, cải thảo| rau muống, lê ki ma",
    correctAnswer: 0,
    image: "toiLySon.jpg| rongBimBim.jpg",
    explanation:
      "Nếu du khách ghé thăm đảo vào độ đông xuân sẽ được thưởng thức vô vàn món ngon làm từ tỏi Lý Sơn. Bên cạnh đó vào độ mùa mưa (tháng 9 đến tháng 2) mùa khô (tháng 3 đến tháng 8) sẽ là mùa rong, ta sẽ được thưởng thức những món ngon từ rong đặc sản nơi này.",
  },
  {
    question: "Ngôi chùa nào sau đây thuộc địa phận của đảo Lý Sơn?",
    options: "Chùa Ông| Chùa Một Cột| Chùa Đục| Chùa Phật Học",
    correctAnswer: 2,
    image: "chuaDuc.png",
    explanation:
      "Được xây dựng năm 2008 với tên là Chùa Không Sư nay đổi lại là Chùa Đục, tương truyền vào ngày xưa Quan Thế Âm từng chọn nơi đây để ngự và trấn giữ bình yên cho người dân trên đảo tránh được thiên tai.",
  },
  {
    question:
      "Lý Sơn là quê hương của hải đội anh hùng nào trong lịch sử nước ta?",
    options:
      "Hải đội Hoàng Thùy Linh| Hải đội Hoàng A Mã| Hải đội Hoàng Sa| Hải đội Hoàng Lê Nhất Thống Chí",
    correctAnswer: 2,
    image: "",
    explanation:
      "Hải đội Hoàng Sa được Chúa Nguyễn lập nên để đi ra những hải đảo để gom nhặt những vật phẩm từ các tàu đắm, trình báo, canh giữ và chiến đấu với bọn cướp biển, quá trình hoạt động của họ chính là quá trình xác lập và thực thi chủ quyền biển đảo trên đảo Lý Sơn nói riêng và các đảo lớn nhỏ khác nói chung. Hoàn cảnh sống vô cùng khó khăn, hàng năm mỗi tháng 2 âm lịch người ta thường cử hành lễ Khao Lề Thế Lính Hoàng Sa để tri ân sự hi sinh, cống hiến của hải đội Hoàng Sa.",
  },
  {
    question: "Đảo Lý Sơn được chia làm mấy phần?",
    options: "4| 6| 2| 9",
    correctAnswer: 2,
    image: "",
    explanation: "Hai phần gồm Đảo Lớn (cù lao Ré) và Đảo Bé (xã đảo An Bình).",
  },
  {
    question: "Tại đảo Lý Sơn, cư dân nơi đây sống bằng nghề gì?",
    options:
      "Đánh Bắt Thủy Hải Sản| Nông Nghiệp| Công Nghiệp| Đánh bắt thủy sản và nông nghiệp",
    correctAnswer: 3,
    image: "",
    explanation:
      "Phần lớn người dân ở đây sống bằng nghề đánh bắt hải sản và làm nông nghiệp với nghề chính là trồng tỏi và hành.",
  },
  {
    question: "Đảo nào sau đây ở nước ta đã từng có núi lửa?",
    options: "Đảo Hoàng Sa| Đảo Phú Quốc| Đảo Bé Lý Sơn| Đảo Song Tử Tây",
    correctAnswer: 2,
    image: "",
    explanation:
      "Những núi lửa còn hình hài rõ nét nhất là núi lửa trên đảo Lý Sơn (Quảng Ngãi), núi lửa trên đảo Phú Quý (Bình Thuận), núi lửa Hàm Rồng (Gia Lai) và núi lửa ở Bình Phước.",
    imageExplain: "daoBeLySon.jpg",
    },
  {
    question: "Đảo Lý Sơn nằm ở hướng nào của nước ta?",
    options: "Đông Bắc| Đông Nam| Tây Nam| Tây Bắc",
    correctAnswer: 0,
    image: "",
    explanation:
      "Lý Sơn là huyện đảo duy nhất của Quảng Ngãi, nằm về phía Đông Bắc.",
  },
  {
    question: "Đảo Lý Sơn nằm ở vùng nào của nước ta?",
    options:
      "Vùng Duyên Hải Bắc Bộ| Vùng Duyên Hải Miền Trung| Duyên Hải Nam Trung Bộ| Duyên Hải Đông Nam Bộ",
    correctAnswer: 2,
    image: "",
    explanation:
      "Các huyện đảo thuộc vùng Duyên hải Nam Trung Bộ là: Hoàng Sa (Đà Nẵng), Lý Sơn (Quảng Ngãi), Trường Sa (Khánh Hòa).",
  },
  {
    question: "Tại đảo Lý Sơn, hoạt động địa chất còn nguyên vẹn dấu tích là?",
    options: "Sóng Thần| Núi Lửa| Hóa Thạch| Núi Đá Vôi",
    correctAnswer: 1,
    image: "",
    explanation:
      "Trải qua hàng triệu năm hoạt động kiến tạo địa chất, huyện đảo Lý Sơn (tỉnh Quảng Ngãi) còn nguyên vẹn dấu tích 10 miệng núi lửa cổ gắn liền với cảnh quan thiên nhiên hoang sơ.",
    imageExplain: "daoLySon.jpg",
    
    },
  {
    question:
      "Lễ Khao Lề Thế Lính Hoàng Sa ở huyện đảo Lý Sơn đã được Bộ Văn Hóa Và Du Lịch công nhận là gì?",
    options:
      "Di Sản Phi Vật Thể Quốc Gia| Di Sản Văn Hóa Thế Giới| Di Sản Thiên Nhiên Thế Giới| Di Sản Văn Hóa Vật Thể",
    correctAnswer: 0,
    image: "le.jpg",
    explanation:
      "Tháng 4/2013, Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch đã quyết định đưa Lễ khao lề thế lính Hoàng Sa vào Danh mục Di sản văn hóa phi vật thể quốc gia, loại hình Tập quán xã hội và tín ngưỡng.",
    },
  {
    question: "Vì sao đảo Lý Sơn lại được gọi là “Vương Quốc Tỏi”?",
    options:
      "Tỏi trồng nơi đây thơm hơn các nơi khác| Tỏi nơi đây to hơn những nơi khác| Hàm lượng chất có trong tỏi ở Lý Sơn luôn cao hơn tỏi ở nơi khác| Tỏi ở Lý Sơn chỉ có duy nhất ở Lý Sơn",
    correctAnswer: 2,
    image: "",
    explanation:
      "Huyện đảo được mệnh danh là “Vương quốc tỏi” vì sản phẩm tỏi có hương vị đặc biệt và hàm lượng dinh dưỡng trong Tỏi Lý Sơn (flavonoid, oligosaccharides, axit amin, lưu huỳnh và allicin,…).",
  },
  {
    question: "Đảo Lý Sơn còn có tên gọi khác là gì?",
    options: "Cù Lao Sé| Cù Lao| Cù Lao Ké| Cù Lao Ré",
    correctAnswer: 3,
    image: "",
    explanation:
      "Lý Sơn được gọi là Cù lao Ré, theo cách lý giải của dân gian là “cù lao có nhiều cây Ré”.",
    imageExplain: "cayRe.jpg",
  },
  {
    question: "Trong các món ăn sau, món ăn nào là đặc sản của đảo Lý Sơn?",
    options: "Cháo Tỏi| Gỏi Gà| Gỏi Rong Biển| Mì Xào Tỏi",
    correctAnswer: 2,
    image: "",
    explanation:
      "Gỏi rong biển - gỏi bòng bòng là món gỏi dân dã, thanh mát. Món ăn đơn giản nhưng lại có sức hút đặc biệt với du khách đến đảo Lý Sơn, vị lạ miệng của nó đủ để làm mềm lòng cả những người sành ăn nhất.",
    imageExplain: "goiRongBien.jpg",
    },
  // {
  //   question: "Huyện Lý Sơn cách đất liền bao nhiêu KM?",
  //   options: "70km| 10km| 45km| 30km",
  //   correctAnswer: 3,
  //   image: "",
  //   explanation:
  //     "Đảo Lý Sơn nằm ở phía Đông Bắc của Quảng Ngãi, cách đất liền 15 hải lý (tầm 28km).",
  // },
  // {
  //   question: "Lý Sơn là huyện duy nhất của tỉnh nào sau đây?",
  //   options: "Quảng Nam| Quảng Bình| Quảng Ngãi| Khánh Hòa",
  //   correctAnswer: 2,
  //   image: "",
  //   explanation: "Đảo Lý Sơn nằm ở phía Đông Bắc của Quảng Ngãi.",
  // },
  // {
  //   question:
  //     "Núi Giếng Tiền và Núi Thới Lới ở huyện đảo Lý Sơn được công nhận là?",
  //   options:
  //     "Di Tích Quốc Gia| Di Sản Văn Hóa| Di Sản Văn Hóa Phi Vật Thể| Di Sản Quốc Tế",
  //   correctAnswer: 2,
  //   image: "",
  //   explanation:
  //     "Trong số các miệng núi lửa của hòn đảo xinh đẹp có núi Thới Lới và Giếng Tiền vừa được công nhận là di tích quốc gia.",
  // },
  // {
  //   question: "Đỉnh núi nào sau đây cao nhất trên đảo Lý Sơn?",
  //   options: "Núi Thới Lới| Núi Giếng Sỏi| Núi Hang Câu| Núi Chùa Hang",
  //   correctAnswer: 0,
  //   image: "",
  //   explanation:
  //     "Núi Thới Lới là ngọn núi lửa lớn nhất trên đảo Lý Sơn (tỉnh Quảng Ngãi). Đỉnh núi cao hơn 169m, đây cũng là điểm cao nhất trên đảo Lý Sơn.",
  // },
];

const ScreenAvA = ({ open, onClose }: IScreenAvA) => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(1);

  const maxQuestion = 5;
  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [fetchDataDone, setFetchDataDone] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>(questionLySon);
  const [questionSelected, setQuestionSelected] = useState<any>();

  const questionContainer = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    try {
      const res = await http.get(`/api/get-questionLySonV4`);
      const newQuestions = res.data.questions.rows.map((quesion: any) => {
        return { ...quesion, correctAnswer: quesion.correctanswer };
      });
      setQuestions(newQuestions);
      setFetchDataDone(true);
      console.log(newQuestions);
    } catch (error) {
      console.error("Lỗi khi đọc file JSON:", error);
    }
  };

  useEffect(() => {
    // fetchData();
    setQuestions(questionLySon);
    setFetchDataDone(true);
  }, [open]);

  useEffect(() => {
    if (fetchDataDone) initQuestion();
  }, [fetchDataDone]);

  useEffect(() => {
    if (!modalQuestion && numberOfQuestion > maxQuestion) {
      setTimeout(() => {
        onClose();
      }, 1000);
      // return;
    }
    if (!modalQuestion && numberOfQuestion <= maxQuestion) {
      initQuestion();
      setNumberOfQuestion(numberOfQuestion + 1);
    }
  }, [modalQuestion]);

  const initQuestion = () => {
    if (questionContainer.current) {
      questionContainer.current.innerHTML = `
      <div class="shipStage1"></div>
      <div class="questionStage1"></div>
      `;
    }

    const temp = Math.floor(Math.random() * questions.length);
    let mainQuestions = questions;
     let supQuestions = mainQuestions.splice(temp, 1);

    // console.log(mainQuestions[13]);
    // console.log(supQuestions);

    setQuestionSelected(supQuestions[0]);
    setQuestions(mainQuestions);

    setTimeout(() => {
      setModalQuestion(true);
    }, 6000);
  };

  return (
    <>
      <Modal
        isOpen={open}
        className="ModalScreenAvA"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayScreenAvA"
      >
        <div className="backgroundMatBien">
          <div className="matBien" ref={questionContainer}></div>
          <div style={{ position: "relative" }}>
            <ModalQuestionLS
              open={modalQuestion}
              onClose={() => {
                setModalQuestion(false);
              }}
              question={questionSelected}
            ></ModalQuestionLS>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScreenAvA;
