import { Space } from 'antd';
import styled from 'styled-components';

export const SSpace = styled(Space)<{ width?: string; justify?: string }>`
  width: ${(props) => props.width || '100%'};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;