import styled from 'styled-components'

export const FeedContainer = styled.div`
  color: white;
  margin-top: 200px;

  width: 100%;

  padding-left: 320px;
  align-items: center;
  justify-content: center;
`

export const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 864px;
  text-align: justify;
  align-items: center;
  align-content: center;

  span {
    text-align: end;
    justify-content: end;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const FeedSearchInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

  margin-top: 12px;

  color: white;

  font-size: '1rem';
  width: 864px;
  height: 50px;
  left: calc(50% - 864px / 2);

  background: transparent;
  border: 1px solid #1c2f41;
  border-radius: 6px;
`

export const PostList = styled.div`
  display: grid;

  width: 864px;

  column-gap: 20px;
  grid-template-columns: auto auto;
`
