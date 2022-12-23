import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 864px;

  background-color: ${(props) => props.theme['blue-700']};
  position: absolute;
  left: calc(50% - 864px / 2);
  top: 208px;
  padding: 40px 32px 32px 40px;

  display: flex;

  color: white;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;

  left: 40px;
  top: calc(50% - 148px / 2);

  border-radius: 8px;
`
export const ProfileBio = styled.div`
  margin-left: 32px;
`

export const ProfileName = styled.div`
  display: flex;

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

export const ProfileInfo = styled.div`
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
