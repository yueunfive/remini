import styled from "styled-components";

const StepByStepWrap = styled.div`
  background-color: #121212;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 400;

  .progressBar_container {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }

  .mainContent_container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 53px;
  }

  .mainContent_Btn {
    width: 320px;
    padding: 16px 60px;
    box-sizing: border-box;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .main_text_container {
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-style: normal;

    line-height: normal;
  }

  .mainContent_Input {
    display: flex;
    width: 320px;
    height: 320px;
    padding: 24px;
    box-sizing: border-box;
    align-items: flex-start;
    gap: 30px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #fff;
    background: var(--Background, #121212);
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  .btn_container {
    text-align: center;
    margin-top: 92px;
    margin-bottom: 60px;
  }

  .temporary_btn {
    display: inline-flex;
    padding: 16px 60px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.77);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: var(--Background, #121212);
  }
  .completed_btn {
    margin-top: 30px;
    display: inline-flex;
    padding: 16px 60px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--primary-800, #305d40);
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text_num {
    color: var(--text-medium-emphasis, rgba(255, 255, 255, 0.6));
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 8px;
  }
`;

export default StepByStepWrap;
