import {
  ProfileBio,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileName,
} from './styles'
import { AiOutlineGithub } from 'react-icons/ai'
import { HiOfficeBuilding } from 'react-icons/hi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RxExternalLink } from 'react-icons/rx'

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="https://avatars.githubusercontent.com/u/48291057?s=400&u=0c61eb305a9b1e13b37652c4f5b9d2667d7fb187&v=4" />
      <ProfileBio>
        <ProfileName>
          <h3>Ana Kely Lopes</h3>
          <a href="">
            <h4>Link</h4> <RxExternalLink />
          </a>
        </ProfileName>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfo>
          <div>
            <AiOutlineGithub size={18} />
            <span>kelyAna</span>
          </div>
          <div>
            <HiOfficeBuilding size={18} />
            <span>VTEX</span>
          </div>
          <div>
            <BsFillPeopleFill size={18} />
            <span>32 seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileBio>
    </ProfileContainer>
  )
}
