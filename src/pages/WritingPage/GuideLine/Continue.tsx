import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineTheeContent from "../../../components/GuideLine/ThreeContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine Continue 회고 페이지
export default function Continue() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const sectionTexts = [firstContent, secondContent, thirdContent];

  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;

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
              <div className="title_main">Continue-Stop-Start 회고</div>
              <div className="title_content">
                해결법 지향적이고, 무엇을 시작하고 그만둘지의 변화에 중점을 드는
                회고예요
              </div>
            </div>
            <GuideLineTheeContent>
              <div className="AllmainConten_container">
                <div className="leftContent_container">
                  <div className="mainContent_Btn">Continue</div>
                  <div className="maintext_container">
                    <p>우리가 무엇을 계속할 지에 대해 작성하기</p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={firstContent}
                      onChange={(e) => setFirstContent(e.target.value)}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{firstContent.length}/200</p>
                  </div>
                </div>
                <div className="middleContent_container">
                  <div className="mainContent_Btn">Stop</div>
                  <div className="maintext_container">
                    <p>우리가 무엇을 그만두어야 할 지에 대해 작성하기</p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={secondContent}
                      onChange={(e) => setSecondContent(e.target.value)}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{secondContent.length}/200</p>
                  </div>
                </div>
                <div className="rightContent_container">
                  <div className="mainContent_Btn">Start</div>
                  <div className="maintext_container">
                    <p>우리가 무엇을 시작하여야 할 지에 대해 작성하기</p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={thirdContent}
                      onChange={(e) => setThirdContent(e.target.value)}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{thirdContent.length}/200</p>
                  </div>
                </div>
              </div>
            </GuideLineTheeContent>
          </div>
          <WritingPageBtn>
            <button
              className="temporary_btn"
              style={{
                opacity:
                  isFirstContentFilled ||
                  isSecondContentFilled ||
                  isThirdContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled &&
                !isSecondContentFilled &&
                !isThirdContentFilled
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
                  isThirdContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled ||
                !isSecondContentFilled ||
                !isThirdContentFilled
              }
              onClick={() => {
                goToAttachPicture();
              }}
            >
              작성 완료
            </button>
          </WritingPageBtn>
        </div>
      </WritingPageWrap>
    </>
  );
}
