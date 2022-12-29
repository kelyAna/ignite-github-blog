import styled from 'styled-components'

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme['blue-700']};
  position: absolute;
  left: calc(50% - 864px / 2);
  top: 208px;
  padding: 40px 20px 20px 80px;

  justify-content: center;

  display: flex;
  color: white;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
export const PostInfo = styled.div`
  display: flex;

  margin-top: 50px;

  color: ${(props) => props.theme['blue-gray']};

  div {
    margin-right: 24px;

    display: flex;

    span {
      margin-left: 8px;

      color: white;
    }
  }
`

export const PostContentHeader = styled.div`
  display: flex;

  width: 800px;

  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue-100']};

    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  a:last-child {
    margin-right: 20px;
  }

  margin-bottom: 20px;
`
export const PostDescription = styled.div`
  color: white;

  padding: 20px 350px 0px 350px;
  text-align: justify;

  p:first-child {
    margin-top: 170px;
    margin-bottom: 30px;
  }
`
export const PostContent = styled.div`
  margin-left: -40px;
`
