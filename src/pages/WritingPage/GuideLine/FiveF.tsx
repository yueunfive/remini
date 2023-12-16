import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineVerticleContent from "../../../components/GuideLine/FiveFContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine FiveF 회고 페이지
export default function FiveF() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const sectionTexts = [
    firstContent,
    secondContent,
    thirdContent,
    fourContent,
    fifthContent,
  ];

  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;
  const isFifthContentFilled = fifthContent.trim().length > 0;

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
        <div className="container">
          <div className="title_container">
            <div className="title_main">5F 회고</div>
            <div className="title_content">
              다섯 가지 차원(Five Dimensions)을 기반으로 순서대로 진행하는
              회고예요
            </div>
          </div>
          <GuideLineVerticleContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="mainContent_Btn">Fact</div>
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>한 일에 대한 사실</span>을
                  작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Feelings</div>
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>한 일에 대한 느낀점</span>을
                  작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Finding</div>
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    무엇을 배웠는지, 인사이트, 교훈
                  </span>
                  을 작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Future Action</div>
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>향후 계획</span>을 작성하기
                </div>
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
              <div className="Content-Container">
                <div className="mainContent_Btn">Feedback</div>
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    향후 계획에 대한 피드백
                  </span>
                  을 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={fifthContent}
                  onChange={(e) => setFifthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{fifthContent.length}/200</p>
              </div>
            </div>
          </GuideLineVerticleContent>
        </div>
        <WritingPageBtn>
          <button
            className="temporary_btn"
            style={{
              opacity:
                isFirstContentFilled ||
                isSecondContentFilled ||
                isThirdContentFilled ||
                isFourContentFilled ||
                isFifthContentFilled
                  ? 1
                  : 0.5,
            }}
            disabled={
              !isFirstContentFilled &&
              !isSecondContentFilled &&
              !isThirdContentFilled &&
              !isFourContentFilled &&
              !isFifthContentFilled
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
                isFourContentFilled &&
                isFifthContentFilled
                  ? 1
                  : 0.5,
            }}
            disabled={
              !isFirstContentFilled ||
              !isSecondContentFilled ||
              !isThirdContentFilled ||
              !isFourContentFilled ||
              !isFifthContentFilled
            }
            onClick={() => {
              goToAttachPicture();
            }}
          >
            작성 완료
          </button>
        </WritingPageBtn>
      </WritingPageWrap>
    </>
  );
}

const FiveFWrap = styled.div`
  .mainContent_Btn {
    display: flex;
    width: 320px;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
