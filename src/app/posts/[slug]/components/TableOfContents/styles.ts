import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: -181px;
  width: 159px;
  height: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: sticky;
  top: 80px;
  right: 0;
`;

interface PointerProps {
  translateY: number;
}
export const Pointer = styled.div<PointerProps>`
  width: 0;
  height: 0;
  overflow: hidden;
  border-color: transparent transparent transparent #999;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  transition: transform 0.1s ease-in-out;
  transform: ${({ translateY }) => `translateY(${translateY}rem);`};
`;

export const List = styled.ul`
  padding-left: 16px;
  margin: 0;
  border-left: 1px solid #999;
`;

interface ItemProps {
  paddingLeft: number;
}
export const Item = styled.li<ItemProps>`
  position: relative;
  height: 1.6rem;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}rem`};
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.6rem;

  a {
    color: #999;

    &:hover {
      color: #eee;
      transition-duration: 0.2s;
    }
  }
`;
