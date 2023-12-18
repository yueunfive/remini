import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLinePersonalContent from "../../../components/GuideLine/PersonalContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//Performance 회고 페이지
export default function Performance() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const [sixthContent, setSixthContent] = useState("");
  const [seventhContent, setSeventhContent] = useState("");
  const sectionTexts = [
    firstContent,
    secondContent,
    thirdContent,
    fourContent,
    fifthContent,
    sixthContent,
    seventhContent,
  ];
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;
  const isFifthContentFilled = fifthContent.trim().length > 0;
  const isSixthContentFilled = sixthContent.trim().length > 0;
  const isSeventhContentFilled = seventhContent.trim().length > 0;

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
              <div className="title_main">성과/수치 중심 회고</div>
              <div className="title_content">
                성과/수치 중심 회고는 보통 분기/일 년 회고를 할 때 많이 사용하는
                회고예요
              </div>
            </div>
            <GuideLinePersonalContent>
              <div className="AllmainConten_container">
                <div className="Content-Container">
                  <div className="maintext_container">
                    연초(분기초)에 세운{" "}
                    <span style={{ fontWeight: 700 }}>
                      목표치를 몇% 달성하였는지
                    </span>{" "}
                    작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={firstContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setFirstContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{firstContent.length}/200</p>
                </div>
                <div className="Content-Container">
                  <div className="maintext_container">
                    만일 높은(71~100%) 달성률을 기록했다면{" "}
                    <span style={{ fontWeight: 700 }}>
                      목표를 너무 낮게 잡은 것은 아닌지, 달성한 목표를
                      수정한다면 무엇을 바꿔야 하는지
                    </span>{" "}
                    작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={secondContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setSecondContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{secondContent.length}/200</p>
                </div>
                <div className="Content-Container">
                  <div className="maintext_container">
                    목표를 달성하는 과정에서의{" "}
                    <span style={{ fontWeight: 700 }}>기여 요인</span>은
                    무엇인지 작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={thirdContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setThirdContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{thirdContent.length}/200</p>
                </div>
                <div className="Content-Container">
                  <div className="maintext_container">
                    목표를 달성하는 과정에서{" "}
                    <span style={{ fontWeight: 700 }}>성공을 가로막은 것</span>
                    은 무엇인지 작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={fourContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setFourContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{fourContent.length}/200</p>
                </div>
                <div className="Content-Container">
                  <div className="maintext_container">
                    <span style={{ fontWeight: 700 }}>무엇을 개선</span>한다면,
                    더 높은 성과를 달성할 수 있는지 작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={fifthContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setFifthContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{fifthContent.length}/200</p>
                </div>
                {/* 6부터 */}
                <div className="Content-Container">
                  <div className="maintext_container">
                    <span style={{ fontWeight: 700 }}>
                      스스로 평가하는 성과
                    </span>
                    는 어떠한가?{" "}
                    <span style={{ fontWeight: 700 }}>
                      지난해(분기) 대비 얼마나 성장하였는지
                    </span>{" "}
                    작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={sixthContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setSixthContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{sixthContent.length}/200</p>
                </div>
                <div className="Content-Container">
                  <div className="maintext_container">
                    이번 교훈을 통해{" "}
                    <span style={{ fontWeight: 700 }}>
                      내년(다음 분기)에는 무엇을 바꿔야 하는지
                    </span>{" "}
                    작성하기
                  </div>
                </div>
                <div>
                  <textarea
                    className="mainContent_Input"
                    placeholder="텍스트를 입력해주세요"
                    value={seventhContent}
                    onChange={(e) => {
                      const text = e.target.value;
                      if (text.length <= 200) setSeventhContent(text);
                    }}
                    style={{ resize: "none" }} // 사이즈 조절 방지
                  ></textarea>
                  <p className="text_num">{seventhContent.length}/200</p>
                </div>
              </div>
            </GuideLinePersonalContent>
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
                  isFifthContentFilled ||
                  isSixthContentFilled ||
                  isSeventhContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled &&
                !isSecondContentFilled &&
                !isThirdContentFilled &&
                !isFourContentFilled &&
                !isFifthContentFilled &&
                !isSixthContentFilled &&
                !isSeventhContentFilled
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
                  isFifthContentFilled &&
                  isSixthContentFilled &&
                  isSeventhContentFilled
                    ? 1
                    : 0.5,
              }}
              disabled={
                !isFirstContentFilled ||
                !isSecondContentFilled ||
                !isThirdContentFilled ||
                !isFourContentFilled ||
                !isFifthContentFilled ||
                !isSixthContentFilled ||
                !isSeventhContentFilled
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
