import styled from 'styled-components'

export const PostInfoContent = styled.div`
  width: 416px;
  height: 260px;
  margin-top: 48px;
  background: #112131;
  border-radius: 10px;

  padding: 32px;
  p {
    font-size: '1rem';
  }
`

export const PostInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  h4 {
    max-width: 220px;
  }

  span {
    margin-left: 50px;
    font-size: '0.5rem';
    color: #7b96b2;

    top: 300px;
  }
`
