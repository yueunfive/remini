import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineFourContent from "../../../components/GuideLine/FourContent";
import defaultImage from "../../../img/UI/basicImage.png";
import axios, { AxiosResponse } from "axios";

//GuideLine AAR 회고 페이지
export default function AAR() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const sectionTexts = [firstContent, secondContent, thirdContent, fourContent];

  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;

  // 작성 완료
  const goToAttachPicture = () => {
    localStorage.setItem("sectionTexts", JSON.stringify(sectionTexts));
    navigate("/attach-picture");
  };

  // 임시 저장
  const handleTemporarySave = () => {
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      instantSave: true,
      sectionTexts,
      step: 1,
      title: localStorage.getItem("title"),
      type: localStorage.getItem("type"),
    };

    axios
      .post("https://www.remini.store/api/remini", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("임시 저장 완료", response.data);
        alert("임시 저장에 성공했습니다!");
        uploadImage(response);
      })
      .catch((error) => {
        console.error("임시 저장 실패:", error);
      });
  };

  // 이미지 업로드(Presigned URL)
  const uploadImage = async (response: AxiosResponse) => {
    const imageToSend = await getDefaultImageFile();
    try {
      const imageResponse = await axios.put(
        response.data.uploadUrl,
        imageToSend,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      );

      console.log("이미지 업로드 성공:", imageResponse);
      navigate("/my-page");
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  // 기본 이미지 파일 가져오기(파일 객체로 변환)
  const getDefaultImageFile = async () => {
    try {
      const response = await fetch(defaultImage);
      const blob = await response.blob();
      const file = new File([blob], "defaultImage.png", { type: "image/png" });
      return file;
    } catch (error) {
      console.error("기본 이미지 가져오기 실패:", error);
      return null;
    }
  };

  return (
    <>
      <WritingPageWrap>
        <Header />
        <div className="all-container">
          <div className="container">
            <div className="title_container">
              <div className="title_main">AAR 회고</div>
              <div className="title_content">
                AAR은 After Action Review/Report의 줄임말로 짧은 시간 내에
                유연하고 편하게 진행되는 회고예요
              </div>
            </div>
            <GuideLineFourContent>
              <div className="AllmainConten_container">
                <div className="leftContent_container">
                  <div className="mainContent_Btn">초기 목표</div>
                  <div className="maintext_container">
                    <p>
                      <span style={{ fontWeight: 700 }}>의도한 결과</span>는
                      <br />
                      무엇이었는지 작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={firstContent}
                      onChange={(e) => {
                        const text = e.target.value;
                        if (text.length <= 200) {
                          setFirstContent(text);
                        }
                      }}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{firstContent.length}/200</p>
                  </div>
                </div>
                <div className="middleContent_container">
                  <div className="mainContent_Btn">현실</div>
                  <div className="maintext_container">
                    <p style={{ fontWeight: 700 }}>실제 어떤 일들이</p>
                    <p>
                      <span style={{ fontWeight: 700 }}>일어났는지</span>{" "}
                      작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={secondContent}
                      onChange={(e) => {
                        const text = e.target.value;
                        if (text.length <= 200) {
                          setSecondContent(text);
                        }
                      }}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{secondContent.length}/200</p>
                  </div>
                </div>
                <div className="rightContent_container">
                  <div className="mainContent_Btn">배운 점들</div>
                  <div className="maintext_container">
                    <p style={{ fontWeight: 700 }}>
                      계획과 실제 결과의 차이는 왜 발생
                    </p>
                    <p>
                      되었는지,{" "}
                      <span style={{ fontWeight: 700 }}>무엇을 배웠는지</span>{" "}
                      작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={thirdContent}
                      onChange={(e) => {
                        const text = e.target.value;
                        if (text.length <= 200) {
                          setThirdContent(text);
                        }
                      }}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{thirdContent.length}/200</p>
                  </div>
                </div>
                <div className="rightContent_container">
                  <div className="mainContent_Btn">목적</div>
                  <div className="maintext_container">
                    <p>
                      <span style={{ fontWeight: 700 }}>
                        지속, 개선 혹은 포기할 것
                      </span>
                      들은
                      <br />
                      무엇인지 작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={fourContent}
                      onChange={(e) => {
                        const text = e.target.value;
                        if (text.length <= 200) {
                          setFourContent(text);
                        }
                      }}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{thirdContent.length}/200</p>
                  </div>
                </div>
              </div>
            </GuideLineFourContent>
          </div>
          <WritingPageBtn>
            <button
              className="temporary_btn"
              style={{
                opacity:
                  isFirstContentFilled ||
                  isSecondContentFilled ||
                  isThirdContentFilled ||
                  isFourContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled &&
                !isSecondContentFilled &&
                !isThirdContentFilled &&
                !isFourContentFilled
              }
              onClick={handleTemporarySave}
            >
              임시 저장
            </button>
            <button
              className="completed_btn"
              style={{
                opacity:
                  isFirstContentFilled &&
                  isSecondContentFilled &&
                  isThirdContentFilled &&
                  isFourContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled ||
                !isSecondContentFilled ||
                !isThirdContentFilled ||
                !isFourContentFilled
              }
              onClick={() => {
                goToAttachPicture();
              }}
            >
              작성 완료
            </button>
          </WritingPageBtn>
        </div>
        <div className="empty-box">
          <br />
          <br />
          <br />
        </div>
      </WritingPageWrap>
    </>
  );
}
