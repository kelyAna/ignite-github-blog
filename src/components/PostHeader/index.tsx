import { AiOutlineGithub } from 'react-icons/ai'
import { BsCalendarEventFill, BsFillChatFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { RxExternalLink } from 'react-icons/rx'
import { PostContainer, PostContentHeader } from '../../screens/Post/styles'
import { ProfileBio, ProfileInfo } from '../Profile/styles'

export const PostHeader = () => {
  return (
    <PostContainer>
      <ProfileBio>
        <PostContentHeader>
          <a href="/">
            <IoIosArrowBack /> Voltar
          </a>
          <a href="">
            <h4>Link</h4> <RxExternalLink />
          </a>
        </PostContentHeader>
        <h3>JavaScript data types and data structures</h3>
        <ProfileInfo>
          <div>
            <AiOutlineGithub size={18} />
            <span>kelyAna</span>
          </div>
          <div>
            <BsCalendarEventFill size={18} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <BsFillChatFill size={18} />
            <span>5 comentários</span>
          </div>
        </ProfileInfo>
      </ProfileBio>
    </PostContainer>
  )
}
