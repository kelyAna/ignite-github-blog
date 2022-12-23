import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 864px;

  background-color: ${(props) => props.theme['blue-700']};
  position: absolute;
  left: calc(50% - 864px / 2);
  top: 208px;
  padding: 40px 20px 20px 40px;

  display: flex;
  color: white;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
export const PostContentHeader = styled.div`
  display: flex;

  align-items: center;
  text-align: center;
  justify-content: center;

  width: 730px;

  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue-100']};

    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  margin-bottom: 20px;
`
export const PostDescription = styled.div`
  color: white;
  padding: 0px 350px 0px 350px;
  text-align: justify;

  p:first-child {
    margin-top: 170px;
    margin-bottom: 30px;
  }

  a {
    color: ${(props) => props.theme['blue-100']};
  }
`

export const PostCardCode = styled.div`
  align-items: center;
  padding: 16px;

  margin-top: 24px;

  width: 800px;
  height: 110px;

  background: #112131;
  border-radius: 2px;

  span {
    margin-left: 20px;
    color: #4f6173;
  }
`
