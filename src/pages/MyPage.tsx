import React, { useEffect, useRef } from "react";
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
import { Toggle } from "../components/Toggle.tsx";
import selectIcon from "../img/UI/selectIcon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface UserData {
  expirationDate: string;
  nickName: string;
  profileImageUrl: string;
  state: string;
  toBeState: string;
  alarmTime: number[];
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

interface toggleProps {
  toggleOn: boolean;
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
  const [selectedTime, setSelectedTime] = useState("00");
  const [isTimeListOpen, setIsTimeListOpen] = useState(false);
  const timeListRef = useRef<HTMLDivElement>(null);
  const selectBoxRef = useRef<HTMLDivElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [expirationDate, setExpirationDate] = useState<string | null>(null);

  // selectedDate가 없으면 현재 날짜로 설정
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  const apiDate = userData?.alarmTime
    ? new Date(
        userData.alarmTime[0],
        userData.alarmTime[1] - 1,
        userData.alarmTime[2]
      )
    : nextDay;

  // selectedDate가 있으면 해당 날짜로 설정
  const dateToShow = selectedDate
    ? selectedDate.toLocaleDateString()
    : apiDate.toLocaleDateString();

  const [toggleOn, setToggleOn] = useState(false);

  const toggleHandler = () => {
    setToggleOn(!toggleOn);

    // toggleOn 값이 false로 변경될 때 DELETE 요청 보내기
    if (toggleOn) {
      const sendDeleteRequest = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken");

          if (accessToken) {
            const response = await axios.delete(
              `https://www.remini.store/api/alarm/{userId}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            console.log("DELETE request response:", response.data);
          } else {
            console.error("Access token not found in localStorage.");
          }
        } catch (error) {
          console.error("Error sending DELETE request:", error);
        }
      };

      sendDeleteRequest();
    }
  };

  const getCurrentDate = () => {
    return nextDay;
  };

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

      if (user.alarmTime) {
        setSelectedTime(user.alarmTime[3].toString().padStart(2, "0"));
      }

      if (user.alarmTime !== null) {
        setToggleOn(true);
      } else {
        setToggleOn(false);
      }

      // userData가 설정된 이후에 expirationDate 설정
      if (user.expirationDate) {
        const date = new Date(user.expirationDate);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const formattedDate = `${year}.${month}.${day}`;
        setExpirationDate(formattedDate);
      }

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

  const goToSubscribe = () => {
    navigate("/subscribe");
  };

  // 달력 외부 영역 클릭시 달력 닫음
  const handleClickOutside = (event: MouseEvent) => {
    const selectBox = document.querySelector(".select-box");

    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node) &&
      !selectBox?.contains(event.target as Node)
    ) {
      setIsCalendarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 날짜를 선택하고 달력을 닫는 함수
  const handleDateSelect = (date: Date) => {
    setIsCalendarOpen(false);
    setSelectedDate(date);
  };

  const toggleTimeList = () => {
    setIsTimeListOpen(!isTimeListOpen);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setIsTimeListOpen(false);
  };

  const timeList = Array.from({ length: 24 }, (_, index) => {
    const hour = (index < 10 ? "0" : "") + index;

    return (
      <TimeItem key={index} onClick={() => handleTimeSelection(hour)}>
        {`${hour}:00`}
      </TimeItem>
    );
  });

  // selectedDate나 selectedTime이 변경될 때마다 localStorage에 저장하고 API로 PATCH 요청 보내기
  useEffect(() => {
    if (selectedDate !== null && selectedTime !== "00") {
      const mergeDateTime = () => {
        const currentDate = new Date(dateToShow);
        currentDate.setDate(currentDate.getDate() + 1); // 선택한 날짜에 하루를 더함
        const timeParts = selectedTime.split(":");
        currentDate.setUTCHours(Number(timeParts[0]), 0, 0, 0); // 시간 설정

        return currentDate.toISOString(); // ISO 8601 형식으로 반환
      };

      const sendPatchRequest = async () => {
        const mergedDateTime = mergeDateTime();

        try {
          const accessToken = localStorage.getItem("accessToken");

          if (accessToken) {
            const response = await axios.patch(
              `https://www.remini.store/api/alarm/{userId}`,
              { alarmTime: mergedDateTime },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            console.log("PATCH request response:", response.data);
          } else {
            console.error("Access token not found in localStorage.");
          }
        } catch (error) {
          console.error("Error sending PATCH request:", error);
        }
      };

      sendPatchRequest();
    }
  }, [selectedDate, selectedTime]);

  const handleClickOutsideTimeList = (event: MouseEvent) => {
    if (
      !timeListRef.current?.contains(event.target as Node) &&
      !selectBoxRef.current?.contains(event.target as Node)
    ) {
      setIsTimeListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideTimeList);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTimeList);
    };
  }, []);

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
      <MyPageWrap toggleOn={toggleOn}>
        <div className="myPage">
          <div className="myPage_container">
            <h1>마이페이지</h1>
          </div>
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
          <div className="alarm">
            <div className="alarm_header">
              <h3>알림 발송 시간 설정</h3>
              <Toggle toggleOn={toggleOn} toggleHandler={toggleHandler} />
            </div>
            <div className="alarm_container">
              <div className="content">
                <h4>날짜</h4>
                <div
                  className="select-box"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <p>{dateToShow}</p>
                  <img src={selectIcon} alt="selectIcon"></img>
                </div>
                {isCalendarOpen && (
                  <div className="calendar-container" ref={calendarRef}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date) => handleDateSelect(date)}
                      minDate={getCurrentDate()} // 현재 날짜 이전을 선택하지 못하도록 설정
                      inline
                    />
                  </div>
                )}
              </div>
              <div className="content">
                <h4>시간</h4>
                <div
                  className="select-box"
                  onClick={toggleTimeList}
                  ref={selectBoxRef}
                >
                  <p>{selectedTime}:00</p>
                  <img src={selectIcon} alt="selectIcon"></img>
                  {isTimeListOpen && (
                    <TimeList ref={timeListRef}>{timeList}</TimeList>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <h3>구독 모델</h3>
            <div className="subscribe_container">
              <div className="subscribe_header">
                <h3>
                  {userData && userData.state == "STANDARD"
                    ? "Standard"
                    : "Premium"}
                </h3>
                <h4>이용 중</h4>
                {userData &&
                  userData.state == "PREMIUM" &&
                  userData.toBeState == "PREMIUM" && (
                    <h5>{expirationDate} 갱신 예정</h5>
                  )}
                {userData &&
                  userData.state == "PREMIUM" &&
                  userData.toBeState == "STANDARD" && (
                    <h5>{expirationDate} 만료 예정</h5>
                  )}
              </div>
              <button onClick={goToSubscribe}>구독 변경하기</button>
            </div>
          </div>
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

const MyPageWrap = styled.div<toggleProps>`
  background: var(--Background, #121212);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  h3 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h4 {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .myPage {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    display: flex;
    justify-content: center;
  }

  .myPage_container {
    width: 904px;
  }

  .myPage h1 {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 26px;
  }

  article {
    display: flex;
    gap: 32px;
    margin-bottom: 22px;
  }
  .profile h3 {
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
    .alarm_header {
      height: 29px;
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .alarm_container {
      width: 280px;
      height: 200px;
      margin-top: 20px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);

      padding: 38px 34px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      gap: 24px;

      .content {
        height: 50px;
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;

        .select-box {
          width: 160px;
          height: 50px;
          border-radius: 8px;
          background: var(--Background, #121212);
          position: relative;
          cursor: pointer;
          pointer-events: ${({ toggleOn }) => (toggleOn ? "auto" : "none")};

          p {
            color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
            text-align: center;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            position: absolute;
            top: 15px;
            left: 22px;

            opacity: ${(props) => (props.toggleOn ? "1" : "0.5")};
            transition: opacity 0.5s ease;
          }

          img {
            position: absolute;
            top: 17px;
            right: 17px;
          }
        }

        .calendar-container {
          position: absolute;
          top: 60px;
          z-index: 5;
        }
      }
    }

    margin-left: 80px;
  }

  .subscribe {
    .subscribe_container {
      width: 280px;
      height: 200px;
      margin-top: 20px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
      position: relative;

      h3 {
        color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
        position: absolute;
        top: 38px;
        left: 30px;
      }
      h4 {
        color: var(--text-disabled, rgba(255, 255, 255, 0.38));
        position: absolute;
        top: 44px;
        left: 142px;
      }
      h5 {
        color: rgba(255, 255, 255, 0.38);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        position: absolute;
        top: 77px;
        left: 30px;
      }

      button {
        padding: 13px 32px;
        border-radius: 16px;
        background: var(--primary-900, #233e2c);
        border: none;

        color: var(--primary-400, #79cd96);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        position: absolute;
        bottom: 30px;
        right: 64.5px;

        &:hover {
          color: #000;
          background: var(--primary-400, #79cd96);
        }
      }
    }
  }

  .retro {
    margin-bottom: 10px;
    width: 904px;
  }
  .retro_text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

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

const TimeList = styled.div`
  width: 160px;
  max-height: 300px;
  box-sizing: border-box;
  position: absolute;
  overflow-y: auto;
  top: 60px;
  z-index: 5;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.38);

  padding: 10px;

  color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TimeItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #121212;
  }
`;
