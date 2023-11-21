import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import WritingPageBtnWrap from "../components/WritingPageBtn";

//회고 작성완료 후 사진 첨부 페이지
export default function AttachPicture() {
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultImage = "/src/img/UI/basicImage.png";

  const goToCompleteWriting = (useDefaultImage = false) => {
    const imageToSend = useDefaultImage ? defaultImage : pictureFile;
    navigate("/completeWriting", { state: { image: imageToSend } });
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setPictureFile(files[0]);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setPictureFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Header />
      <AttachPictureWrap>
        <div className="titleText">
          <p>첨부하고 싶은 사진이 있다면 넣어주세요</p>
        </div>
        <div
          className="picture_container"
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <button className="picture-select" onClick={triggerFileInput}>
            <div className="select-text">파일 선택</div>
          </button>
          {pictureFile ? (
            <p className="picture_input_text">{pictureFile.name}</p>
          ) : (
            <p className="picture_input_text">
              또는 파일을 여기로 드래그 해주세요
            </p>
          )}
        </div>
        <WritingPageBtnWrap>
          <button
            className="temporary_btn"
            onClick={() => goToCompleteWriting(true)}
          >
            첨부 안 함
          </button>
          <button
            className="completed_btn"
            style={{
              backgroundColor: pictureFile ? "#79CD96" : "#305D40",
            }}
            disabled={!pictureFile}
            onClick={() => goToCompleteWriting()}
          >
            회고 완료
          </button>
        </WritingPageBtnWrap>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </AttachPictureWrap>
    </>
  );
}

const AttachPictureWrap = styled.div`
  background-color: #121212;
  padding: 0px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleText {
    margin-top: 90px;
    margin-bottom: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .picture_container {
    width: 437px;
    height: 280px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 2px dashed var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
  }

  .picture-select {
    display: inline-flex;
    padding: 7px 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    margin-top: 107px;
    margin-left: 176px;
  }

  .select-text {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .picture_input_text {
    margin-top: 26px;
    margin-bottom: 130px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
