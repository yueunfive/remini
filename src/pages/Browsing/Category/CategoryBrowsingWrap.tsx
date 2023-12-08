import styled from "styled-components";

export const CategoryBrowsingWrap = styled.div`
  background: var(--Background, #121212);
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 85px;

  nav {
    margin-top: 40px;
    margin-left: 45px;

    .main_btn {
      display: flex;
      gap: 24px;
      margin-right: 0;
      margin-bottom: 0;

      button {
        padding: 13px 32px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
        border: none;

        color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &.active {
          background: var(--primary-900, #233e2c);
          color: var(--primary-400, #79cd96);
        }
      }
    }

    .category_btn {
      display: flex;
      gap: 16px;
      margin-top: 24px;

      button {
        padding: 7px 16px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        border: none;

        color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        &.active {
          background: var(--primary-900, #233e2c);
          color: var(--primary-400, #79cd96);
        }
      }
    }
  }

  .retro_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    width: 916px;

    .retroBox {
      margin-left: 6px;
      margin-right: 6px;
    }
  }
`;
