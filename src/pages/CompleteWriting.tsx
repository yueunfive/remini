import React from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import CompleteImg from "../img/UI/basicImage.png";
import BasicProfile from "../img/UI/basicProfile.png";
//import FiveFContent from "../components/GuideLine/FiveFContent";
//import FourContent from "../components/GuideLine/FourContent";
//import PersonalContent from "../components/GuideLine/PersonalContent";
//import ThreeContent from "../components/GuideLine/ThreeContent";

// 페이지 처음 렌더링시 GET 요청(회고 조회)
// isMine == true -> 공유|삭제|수정 버튼
// isMine == false -> 기획 논의 필요

//임시로, 우선 css 불러오는 것은 해결 한 것 같네요! , api 연결 후 아래 써주기 {renderContent()}

/*interface RetrospectiveData {
  type: string;
  title: string;
  content: string;
}

interface CompleteWritingProps {
  retrospectiveData: RetrospectiveData;
}
*/
function CompleteWriting() {
  // 회고 유형에 따라 적절한 디자인 템플릿을 렌더링
  /*const renderContent = () => {
    switch (retrospectiveData.type) {
      case "type1":
        return <FiveFContent />;
      case "type2":
        return <FourContent />;
      case "type3":
        return <PersonalContent />;
      case "type4":
        return <ThreeContent />;
      default:
        return <div>알 수 없는 회고 유형</div>;
    }
    */

  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">Title</div>
        </div>
        <div className="content-container">
          <div className="WritingKind_container">
            <div className="WritingKind_title">회고 종류</div>
            <div className="WritingKind_content">
              어떤 회고 있가요?어떤 회고 있가요?어떤 회고 있가요?어떤 회고
              있가요?
            </div>
            <div className="userInfo-container">
              <div className="user-info">
                <img src={BasicProfile} />
              </div>
              <div className="user-name">레미니</div>
            </div>
            <div className="date-info">작성일: 2023.09.24</div>
          </div>
          <div className="Image_container">
            <img src={CompleteImg} alt="CompleteImg" className="CompleteImg" />
          </div>
        </div>
        <div className="mainContent-container"></div>
        <div className="completeButtom-contaner">
          <button className="shareBtn">공유</button>
          <button className="deleteBtn">삭제</button>
          <button className="editBtn">수정</button>
        </div>
      </CompleteWritingWrap>
    </>
  );
}

export default CompleteWriting;

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
    line-height: normal;
  }

  .Image_container {
    width: 280px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 16px;
    margin-left: 160px;
    background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 68.25%,
      rgba(18, 18, 18, 0.35) 100%
    );
    flex: 0 0 auto;
  }

  .userInfo-container {
    margin-top: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
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

  .completeButtom-contaner {
    width: 1280px;
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
  }
  .shareBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-left: 30dp;
    border: none;
  }
  .deleteBtn {
    width: 92dp;
    height: 45dp;
    display: inline-flex;
    padding: 13px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(207, 102, 121, 0.5);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
  }
  .editBtn {
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
`;
