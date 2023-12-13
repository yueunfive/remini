import React, { useState } from "react";
import { Header } from "../../../components/Header";
import WritingPageWrap from "../../../components/WritingPageWrap";
import { useNavigate } from "react-router-dom";
import WritingPageBtn from "../../../components/WritingPageBtn";
import GuideLinePersonalContent from "../../../components/GuideLine/PersonalContent";
import axios, { AxiosResponse } from "axios";
import defaultImage from "../../../img/UI/basicImage.png";

//GuideLine Personal 회고 페이지
export default function Personal() {
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [fourContent, setFourContent] = useState("");
  const [fifthContent, setFifthContent] = useState("");
  const [sixthContent, setSixthContent] = useState("");
  const [seventhContent, setSeventhContent] = useState("");
  const [eighthContent, setEighthContent] = useState("");
  const [ninthContent, setNinthContent] = useState("");
  const [tenthContent, setTenthContent] = useState("");
  const [eleventhContent, setEleventhContent] = useState("");
  const sectionTexts = [
    firstContent,
    secondContent,
    thirdContent,
    fourContent,
    fifthContent,
    sixthContent,
    seventhContent,
    eighthContent,
    ninthContent,
    tenthContent,
    eleventhContent,
  ];
  const navigate = useNavigate();

  const isFirstContentFilled = firstContent.trim().length > 0;
  const isSecondContentFilled = secondContent.trim().length > 0;
  const isThirdContentFilled = thirdContent.trim().length > 0;
  const isFourContentFilled = fourContent.trim().length > 0;
  const isFifthContentFilled = fifthContent.trim().length > 0;
  const isSixthContentFilled = sixthContent.trim().length > 0;
  const isSeventhContentFilled = seventhContent.trim().length > 0;
  const isEighthContentFilled = eighthContent.trim().length > 0;
  const isNinthContentFilled = ninthContent.trim().length > 0;
  const isTenthContentFilled = tenthContent.trim().length > 0;
  const isEleventhContentFilled = eleventhContent.trim().length > 0;

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
            <div className="title_main">개인적 회고</div>
            <div className="title_content">
              개인적 회고는 주로 일 년을 돌아보는 회고로, 개인이 보낸 한 해를
              돌아보고 다음 한 해를 준비하기 좋은 회고예요
            </div>
          </div>
          <GuideLinePersonalContent>
            <div className="AllmainConten_container">
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    올해 가장 자랑스러운 일
                  </span>
                  을 작성하기
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
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>올해 가장 감사한 일</span>을
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
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>올해 가장 즐겼던 일</span>을
                  작성하기
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
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>뭘 더 잘할 수 있을지</span>{" "}
                  작성하기
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
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>올해 극복해낸 챌린지</span>
                  는(난관은) 어떤 것인지 작성하기
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
              {/* 6부터 */}
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>올해 얻은 교훈</span>은 어떤
                  것인지,{" "}
                  <span style={{ fontWeight: 700 }}>어떻게 성장했을지</span>{" "}
                  작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={sixthContent}
                  onChange={(e) => setSixthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{sixthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    하겠다고 해놓고 안 한 일
                  </span>
                  은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={seventhContent}
                  onChange={(e) => setSeventhContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{seventhContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>다시 하고싶은 일</span>은
                  어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={eighthContent}
                  onChange={(e) => setEighthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{eighthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    내가 집중했지만 내게 도움이 되지 않았던 일
                  </span>
                  은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={ninthContent}
                  onChange={(e) => setNinthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{ninthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    삶에서 더 하고 싶은 일
                  </span>
                  은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={tenthContent}
                  onChange={(e) => setTenthContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{tenthContent.length}/200</p>
              </div>
              <div className="Content-Container">
                <div className="maintext_container">
                  <span style={{ fontWeight: 700 }}>
                    삶에서 덜 하고 싶은 일
                  </span>
                  은 어떤 것인지 작성하기
                </div>
              </div>
              <div>
                <textarea
                  className="mainContent_Input"
                  placeholder="텍스트를 입력해주세요"
                  value={eleventhContent}
                  onChange={(e) => setEleventhContent(e.target.value)}
                  style={{ resize: "none" }} // 사이즈 조절 방지
                ></textarea>
                <p className="text_num">{eleventhContent.length}/200</p>
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
                isSeventhContentFilled ||
                isEighthContentFilled ||
                isNinthContentFilled ||
                isTenthContentFilled ||
                isEleventhContentFilled
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
              !isSeventhContentFilled &&
              !isEighthContentFilled &&
              !isNinthContentFilled &&
              !isTenthContentFilled &&
              !isEleventhContentFilled
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
                isSeventhContentFilled &&
                isEighthContentFilled &&
                isNinthContentFilled &&
                isTenthContentFilled &&
                isEleventhContentFilled
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
              !isSeventhContentFilled ||
              !isEighthContentFilled ||
              !isNinthContentFilled ||
              !isTenthContentFilled ||
              !isEleventhContentFilled
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
