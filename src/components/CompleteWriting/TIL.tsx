import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CompleteImg from "../../img/UI/basicImage.png";
import BasicProfile from "../../img/UI/basicProfile.png";
import axios from "axios";
import GuideLineTheeContent from "../../components/GuideLine/ThreeContent";
import editbtn from "../../img/UI/edit.png";
import { useNavigate } from "react-router-dom";

type DataType = {
  createdDate: string;
  nickname: String;
  reminiImage: string;
  profileImageURL: string;
};

interface isEditModeTypeProps {
  isEditMode: boolean;
}

function CompleteWritingTIL({ isEditMode }: isEditModeTypeProps) {
  const { id } = useParams();
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");
  const [retrospectiveData, setRetrospectiveData] = useState<DataType | null>(
    null
  );
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 파일 선택 핸들러
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.remini.store/api/remini/${id}`
        );
        const data = response.data;

        setRetrospectiveData(data);
        if (data.sectionTexts && data.sectionTexts.length === 3) {
          setFirstContent(data.sectionTexts[0]);
          setSecondContent(data.sectionTexts[1]);
          setThirdContent(data.sectionTexts[2]);
        }
      } catch (error) {
        console.error("Error fetching retrospective data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  //데이터 수정
  const editData = async () => {
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      instantSave: false,
      sectionTexts: [firstContent, secondContent, thirdContent],
      step: 1,
      title: localStorage.getItem("title"),
      type: localStorage.getItem("type"),
    };

    try {
      const response = await axios.patch(
        `https://www.remini.store/api/remini/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (imageFile) {
        await uploadImage(response.data.uploadUrl);
      }

      const newId = response.data.reminiId;
      navigate(`/complete-writing/${newId}`);
      alert("수정이 완료되었습니다!🥳");
      window.location.reload();
    } catch (error) {
      console.error("수정 요청 실패:", error);
    }
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const renderContentInput = (
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return isEditMode ? (
      <textarea
        className="mainContent_Input"
        placeholder="텍스트를 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ resize: "none" }}
      />
    ) : (
      <div className="mainContent_Input">{content}</div>
    );
  };

  // 이미지 업로드 로직
  const uploadImage = async (uploadUrl: string) => {
    if (!imageFile) {
      console.error("업로드할 이미지 파일이 없습니다.");
      return;
    }

    try {
      const imageResponse = await axios.put(uploadUrl, imageFile, {
        headers: {
          "Content-Type": imageFile.type,
        },
      });

      console.log("이미지 업로드 성공:", imageResponse);
      // 추가적인 처리 로직
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  return (
    <>
      <CompleteWritingWrap>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">TIL 회고</div>
            <div className="WritingKind_content">
              TIL 회고는 Today I Learned의 줄임말로 매일의 배움을 기록하는
              회고예요
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img
                  src={retrospectiveData?.profileImageURL || BasicProfile}
                  alt="profileImag"
                  className="user-profile"
                />
              </div>
              <div className="user-name">
                {retrospectiveData?.nickname || "레미니"}
              </div>
            </div>
            <div className="date-info">
              작성일: {retrospectiveData?.createdDate || "Date not available"}
            </div>
          </div>
          <div className="Image_container">
            <img
              src={retrospectiveData?.reminiImage || CompleteImg}
              alt="CompleteImg"
              className="CompleteImg"
            />
            {/* 수정 모드 일 때만 보임 */}
            {isEditMode && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <img
                  className="photo-edit-btn"
                  src={editbtn}
                  onClick={() => fileInputRef.current?.click()}
                />
              </>
            )}
          </div>
        </div>
        <div className="mainContent-container">
          <GuideLineTheeContent>
            <div className="AllmainConten_container">
              <div className="leftContent_container">
                <div className="mainContent_Btn">잘한 점</div>
                <div className="maintext_container">
                  <p>
                    성취 - 오늘의 나는
                    <br />
                    무엇을 잘했는지 작성하기
                  </p>
                </div>
                <div>
                  <div>{renderContentInput(firstContent, setFirstContent)}</div>
                  <p className="text_num">{firstContent.length}/200</p>
                </div>
              </div>
              <div className="middleContent_container">
                <div className="mainContent_Btn">개선 점</div>
                <div className="maintext_container">
                  <p>
                    개선 - 오늘의 나는 어떤 문제를 겪었는지,
                    <br />
                    앞으로 어떻게 해결할 것인지 작성하기
                  </p>
                </div>
                <div>
                  <div>
                    {renderContentInput(secondContent, setSecondContent)}
                  </div>
                  <p className="text_num">{secondContent.length}/200</p>
                </div>
              </div>
              <div className="rightContent_container">
                <div className="mainContent_Btn">배운 점</div>
                <div className="maintext_container">
                  <p>
                    학습 - 오늘의 일에서
                    <br />
                    나는 어떤 것을 배웠는지 작성하기
                  </p>
                </div>
                <div>
                  <div>{renderContentInput(thirdContent, setThirdContent)}</div>
                  <p className="text_num">{thirdContent.length}/200</p>
                </div>
              </div>
            </div>
          </GuideLineTheeContent>
          {/* 수정 모드 일 때만 보임 */}
          {isEditMode && (
            <div className="editButton-contaner">
              <button className="cancelBtn" onClick={handleCancel}>
                취소
              </button>
              <button className="completeEditBtn" onClick={editData}>
                확인
              </button>
            </div>
          )}
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWritingTIL;

const CompleteWritingWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title_container {
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  .title_content {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }

  .WritingKind_container {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .WritingKind_title {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .WritingKind_content {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    max-width: 800px;
    text-align: justify;
    margin: auto;
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }

  .user-profile {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .Image_container {
    width: 280px;
    height: 200px;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-left: 300px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }

  .CompleteImg {
    width: 280px;
    height: 200px;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
    object-fit: cover;
    object-position: center;
  }

  .user-name {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .date-info {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .editButton-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
  .cancelBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--Text-High-Emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
    margin-right: 20px;
  }
  .completeEditBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--primary-900, #233e2c);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
  }
  .photo-edit-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`;
