import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLineThreeContent from "../../../components/GuideLine/ThreeContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine YWT 회고 페이지
export default function YWT() {
  const [firstContent, setContinueContent] = useState("");
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
              <div className="title_main">YWT 회고</div>
              <div className="title_content">
                YWT는 일본 도요타에서 사용한 방식으로 짧게 진행되는 회고예요
              </div>
            </div>
            <GuideLineThreeContent>
              <div className="AllmainConten_container">
                <div className="leftContent_container">
                  <div className="mainContent_Btn">
                    한 일<br />
                    (やったこと-yattakoto)
                  </div>
                  <div className="maintext_container">
                    <p style={{ fontWeight: 700 }}>
                      일을 통해 명확히 알게 되었거나
                    </p>
                    <p>
                      <span style={{ fontWeight: 700 }}>이해한 부분</span>{" "}
                      작성하기
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="mainContent_Input"
                      placeholder="텍스트를 입력해주세요"
                      value={firstContent}
                      onChange={(e) => setContinueContent(e.target.value)}
                      style={{ resize: "none" }} // 사이즈 조절 방지
                    ></textarea>
                    <p className="text_num">{firstContent.length}/200</p>
                  </div>
                </div>
                <div className="middleContent_container">
                  <div className="mainContent_Btn">
                    배운 것들
                    <br />
                    (わかったこと-wakattakoto)
                  </div>
                  <div className="maintext_container">
                    <p>
                      <span style={{ fontWeight: 700 }}>배운 점과 시사점</span>{" "}
                      작성하기
                      <br />
                      <br />
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
                  <div className="mainContent_Btn">
                    앞으로 할 일<br />
                    (つぎにやること-tsuginiyarukoto)
                  </div>
                  <div className="maintext_container">
                    <p style={{ fontWeight: 700 }}>응용하여 배운 것을</p>
                    <p>
                      <span style={{ fontWeight: 700 }}>
                        어디에 어떻게 적용할 지
                      </span>{" "}
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
              </div>
            </GuideLineThreeContent>
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
