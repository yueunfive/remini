import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer";
import { RetroBox } from "../components/RetroBox.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../components/Modal/LogoutModal.tsx";
import WithdrawalModal from "../components/Modal/WithdrawalModal.tsx";
import ModalOverlay from "../components/Modal/ModalOverlay.tsx";
import axios from "axios";

interface UserData {
  expirationDate: string;
  nickName: string;
  profileImageUrl: string;
  state: string;
}

interface RetroData {
  createdDate: string;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
  liked: boolean;
}

interface TemporaryRetroData {
  createdDate: string;
  likesCount: number;
  reminiId: number;
  reminiImage: string;
  title: string;
  liked: boolean;
}

// 마이페이지
export const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [retroData, setRetroData] = useState<RetroData[]>([]);
  const [temporaryRetroData, setTemporaryRetroData] = useState<
    TemporaryRetroData[]
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      // 사용자 조회
      const userResponse = await axios.get(
        "https://www.remini.store/api/user",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const user = userResponse.data;
      console.log(user);
      setUserData(user);

      // 개인 회고 목록 조회(3개)
      const retroResponse = await axios.get(
        "https://www.remini.store/api/remini/private?pageNumber=0&pageSize=3",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const retroData = retroResponse.data.content;
      console.log(retroData);
      setRetroData(retroData);

      // 임시저장 회고 목록 조회(3개)
      const temporaryResponse = await axios.get(
        "https://www.remini.store/api/remini/temporary?pageNumber=0&pageSize=3",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const temporaryRetroData = temporaryResponse.data.content;
      console.log(temporaryRetroData);
      setTemporaryRetroData(temporaryRetroData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // 회고 박스 클릭
  const handleRetroBoxClick = async (reminiId: number) => {
    navigate(`/complete-writing/${reminiId}`);
  };

  // 나의 회고 3개 불러오기
  const renderRetroBoxes = () => {
    return retroData.map((data) => (
      <RetroBox
        key={data.reminiId}
        {...data}
        goToResult={() => handleRetroBoxClick(data.reminiId)}
      />
    ));
  };

  // 임시저장 3개 불러오기
  const renderTempRetroBoxes = () => {
    return temporaryRetroData.map((data) => (
      <RetroBox
        key={data.reminiId}
        {...data}
        hideLikes
        goToResult={() => handleRetroBoxClick(data.reminiId)}
      />
    ));
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
    document.body.style.overflow = "hidden"; // 페이지 스크롤 비활성화
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
    document.body.style.overflow = ""; // 페이지 스크롤 활성화
  };

  const openWithdrawalModal = () => {
    setIsWithdrawalModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeWithdrawalModal = () => {
    setIsWithdrawalModalOpen(false);
    document.body.style.overflow = "";
  };

  // 모달창 외부 영역 클릭시 모달창 닫기
  const handleOverlayClick = () => {
    setIsLogoutModalOpen(false);
    setIsWithdrawalModalOpen(false);
    document.body.style.overflow = "";
  };

  const goToMyRetro = () => {
    navigate("/my-retro");
  };

  const goToTempStorage = () => {
    navigate("/temp-storage");
  };

  return (
    <>
      <Header />
      {(isLogoutModalOpen || isWithdrawalModalOpen) && (
        <ModalOverlay onClick={handleOverlayClick} />
      )}
      {isLogoutModalOpen && <LogoutModal closeModal={closeLogoutModal} />}
      {isWithdrawalModalOpen && (
        <WithdrawalModal closeModal={closeWithdrawalModal} />
      )}
      <MyPageWrap>
        <div className="myPage">
          <h1>마이 페이지</h1>
        </div>
        <article>
          <div className="profile">
            <h3>내 프로필</h3>
            <div className="kakao_profile">
              <div
                className="profile_img"
                style={{
                  backgroundImage: `url(${
                    userData && userData.profileImageUrl
                  })`,
                }}
              ></div>
              <p>{userData && userData.nickName}</p>
            </div>
          </div>
          <div className="alarm"></div>
          <div className="subscribe"></div>
        </article>
        <div className="retro">
          <div className="retro_text">
            <h3>나의 회고</h3>
            <p className="pointer" onClick={goToMyRetro}>
              전체보기 {`>`}
            </p>
          </div>
          <div className="retro_container">{renderRetroBoxes()}</div>
        </div>
        <div className="retro">
          <div className="retro_text">
            <h3>임시저장</h3>
            <p className="pointer" onClick={goToTempStorage}>
              전체보기 {`>`}
            </p>
          </div>
          <div className="retro_container">{renderTempRetroBoxes()}</div>
        </div>
        <div className="footer_btn">
          <p className="logout pointer" onClick={openLogoutModal}>
            로그아웃
          </p>
          <p className="delete_account pointer" onClick={openWithdrawalModal}>
            탈퇴하기
          </p>
        </div>
      </MyPageWrap>
      <Footer />
    </>
  );
};

const MyPageWrap = styled.div`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .myPage {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  .myPage h1 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-left: 245px;
  }

  article {
    display: flex;
    gap: 32px;
    margin-bottom: 22px;
  }
  .profile h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 20px;
  }

  .kakao_profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .profile_img {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background: #ffe9bf;
    background-size: cover;
    background-position: center;
  }
  .kakao_profile p {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .alarm {
    width: 280px;
    margin-left: 80px;
  }

  .subscribe {
    width: 280px;
  }

  .retro {
    margin-bottom: 10px;
    width: 904px;
  }
  .retro_text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .retro_container {
    display: flex;
    gap: 32px;
  }

  .footer_btn {
    width: 186px;
    height: 21px;
    display: flex;
    gap: 60px;
    margin: 70px 0 80px 717px;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    .logout {
      color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    }
    .delete_account {
      color: var(--Error, #cf6679);
    }
  }
`;
