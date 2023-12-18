import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineFourContent from "../../../components/GuideLine/FourContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine ORID 회고 페이지
export default function ORID() {
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
              <div className="title_main">ORID 회고</div>
              <div className="title_content">
                ORID 회고는 Objective(지각 단계)-Reflective(반응
                단계)-Interpretive(해석 단계)-Decisional(결정 단계)의 줄임말로,
                사고와 대화를 촉진하는 회고예요
              </div>
            </div>
          </div>
          <GuideLineFourContent>
            <div className="AllmainConten_container">
              <div className="leftContent_container">
                <div className="mainContent_Btn">Objective</div>
                <div className="maintext_container">
                  <p>
                    객관적인 사실과 경험을 중심으로
                    <br />
                    <span style={{ fontWeight: 700 }}>
                      스스로 알고 있는 것을 확인
                    </span>
                    하여 작성하기
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
                <div className="mainContent_Btn">Reflective</div>
                <div className="maintext_container">
                  <p>
                    그 때의 감정이나 느낌은 무엇인지
                    <br />
                    <span style={{ fontWeight: 700 }}>감정과 느낌을 탐색</span>
                    하며 작성하기
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
                  ></textarea>
                  <p className="text_num">{secondContent.length}/200</p>
                </div>
              </div>
              <div className="rightContent_container">
                <div className="mainContent_Btn">Interpretive</div>
                <div className="maintext_container">
                  <p>
                    각각의 일들이 시사하는 점이 무엇인지
                    <br />
                    <span style={{ fontWeight: 700 }}>해석과 분석</span>을 하며
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
                <div className="mainContent_Btn">Decisional</div>
                <div className="maintext_container">
                  <p>
                    문제해결을 위해{" "}
                    <span style={{ fontWeight: 700 }}>
                      미래에 대한 <br />
                      행동과 변화를 결정
                    </span>
                    하여 작성하기
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
                  <p className="text_num">{fourContent.length}/200</p>
                </div>
              </div>
            </div>
          </GuideLineFourContent>
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
