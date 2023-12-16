import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineFourContent from "../../../components/GuideLine/FourContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine FourL 회고 페이지
export default function FourL() {
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
              <div className="title_main">4L 회고</div>
              <div className="title_content">
                4L 회고는 오로지 내가 수행하였던 일에만 집중해서 솔직하게
                정리하는 회고예요
              </div>
            </div>
            <GuideLineFourContent>
              <div className="AllmainConten_container">
                <div className="leftContent_container">
                  <div className="mainContent_Btn">Liked</div>
                  <div className="maintext_container">
                    <p>
                      <span style={{ fontWeight: 700 }}>좋았던 것</span>을
                      작성하기
                    </p>
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
                  <div className="mainContent_Btn">Learned</div>
                  <div className="maintext_container">
                    <p>
                      {" "}
                      <span style={{ fontWeight: 700 }}>배운 것</span>을
                      작성하기
                    </p>
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
                  <div className="mainContent_Btn">Lacked</div>
                  <div className="maintext_container">
                    <p>
                      {" "}
                      <span style={{ fontWeight: 700 }}>부족했던 것</span>을
                      작성하기
                    </p>
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
                <div className="rightContent_container">
                  <div className="mainContent_Btn">Longed for</div>
                  <div className="maintext_container">
                    <p>
                      {" "}
                      <span style={{ fontWeight: 700 }}>바라는 것</span>을
                      작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={fourContent}
                      onChange={(e) => setFourContent(e.target.value)}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{fourContent.length}/200</p>
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
      </WritingPageWrap>
    </>
  );
}
