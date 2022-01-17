import { ThemeProps } from "utils/theme";
import styled from "styled-components";

export const SCard = styled.div`
  width: 320px;
  padding: ${(props) => ThemeProps[props.theme.mode]["s_card_padding"]};
  background-color: ${(props) =>
    ThemeProps[props.theme.mode]["s_card_background_color"]};
  position: relative;
  height: 755px;
  background-repeat: no-repeat;
  display: block;
  background-size: cover;

  clip-path: polygon(
    20px 0%,
    calc(100% - 20px) 0%,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    20px 100%,
    0% calc(100% - 20px),
    0% 20px
  );
  .average-income,
  .leave-days {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px !important;
    .ant-form-item-label {
      padding: 0;
    }
    label {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #111317;
    }
    .ant-input-suffix {
      display: flex;
      align-items: center;
    }
    .ant-input {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #111317;
    }
  }
  .average-income {
    .ant-input-suffix {
      width: 13px;
      margin-left: 4px;
    }
  }
  .leave-days {
    .ant-input-suffix {
      width: 44px;
    }
  }
  .leave-days {
    margin-bottom: 20px;
  }
  .tuber-check {
    margin: 0;
    .ant-checkbox-wrapper {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    .ant-checkbox {
      display: flex;
      margin-top: -5px;
    }
    .ant-form-item-control-input {
      min-height: 0;
    }
    .ant-checkbox + span {
      padding: 0;
      margin-left: 10px;
    }
  }
`;
