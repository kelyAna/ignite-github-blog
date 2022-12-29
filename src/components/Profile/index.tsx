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
import { useEffect, useState } from 'react'

interface GithubDataType {
  avatar_url: string
  name: string
  login: string
  company: string
  followers: number
  bio: string
}

export const Profile = () => {
  const [githubData, setGithubData] = useState<GithubDataType>()

  const fetchData = () => {
    return fetch('https://api.github.com/users/kelyAna')
      .then((response) => response.json())
      .then((data) => setGithubData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImage src={githubData?.avatar_url} />
      <ProfileBio>
        <ProfileName>
          <h3>{githubData?.name}</h3>
          <a href="https://github.com/kelyAna">
            <h5>GITHUB</h5> <RxExternalLink />
          </a>
        </ProfileName>
        <p>{githubData?.bio} </p>
        <ProfileInfo>
          <div>
            <AiOutlineGithub size={18} />
            <span>{githubData?.login}</span>
          </div>
          <div>
            <HiOfficeBuilding size={18} />
            <span>{githubData?.company}</span>
          </div>
          <div>
            <BsFillPeopleFill size={18} />
            <span>{githubData?.followers} seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileBio>
    </ProfileContainer>
  )
}
