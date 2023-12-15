import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styled from "styled-components";
import AAR from "../../components/CompleteWriting/AAR";
import Continue from "../../components/CompleteWriting/Continue";
import FiveF from "../../components/CompleteWriting/FiveF";
import FourL from "../../components/CompleteWriting/FourL";
import KPT from "../../components/CompleteWriting/KPT";
import ORID from "../../components/CompleteWriting/ORID";
import Performance from "../../components/CompleteWriting/Performance";
import Personal from "../../components/CompleteWriting/Personal";
import TIL from "../../components/CompleteWriting/TIL";
import YWT from "../../components/CompleteWriting/YWT";

//작성완료 조회 페이지

interface Retrospective {
  title: string;
  type: string;
}

function CompleteWriting() {
  const { id } = useParams();
  const [retrospective, setRetrospective] = useState<Retrospective | null>(
    null
  );

  useEffect(() => {
    console.log("Retrieved reminiId:", id);
    const fetchRetrospective = async () => {
      try {
        if (id) {
          const accessToken = localStorage.getItem("accessToken");
          const response = await axios.get(
            `https://www.remini.store/api/remini/${id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setRetrospective(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching retrospective:", error);
      }
    };

    fetchRetrospective();
  }, [id]);

  const renderContent = () => {
    if (!retrospective) {
      return <p>Loading...</p>;
    }

    switch (retrospective.type) {
      case "AAR":
        return <AAR />;
      case "Continue":
        return <Continue />;
      case "FiveF":
        return <FiveF />;
      case "FourL":
        return <FourL />;
      case "KPT":
        return <KPT />;
      case "ORID":
        return <ORID />;
      case "Performance":
        return <Performance />;
      case "Personal":
        return <Personal />;
      case "TIL":
        return <TIL />;
      case "YWT":
        return <YWT />;
      default:
        return <p>Unknown retrospective type</p>;
    }
  };

  return (
    <>
      <CompleteWritingWrap>
        <Header />
        <div className="title_container">
          <div className="title_content">
            {retrospective ? retrospective.title : "Loading..."}
          </div>
        </div>
        <div className="mainContent-container">{renderContent()}</div>
        <div className="completeButtom-contaner">
          {/*
          <button className="shareBtn">공유</button>
          <button className="deleteBtn">삭제</button>
          <button className="editBtn">수정</button>
          */}
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
