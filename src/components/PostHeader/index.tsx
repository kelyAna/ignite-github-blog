import moment from 'moment'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsCalendarEventFill, BsFillChatFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { RxExternalLink } from 'react-icons/rx'
import {
  PostContainer,
  PostContent,
  PostContentHeader,
  PostInfo,
} from '../../screens/Post/styles'

type PostHeaderProps = {
  title: string
  updatedAt: number | Date
  comments: number
}

export const PostHeader = ({ title, comments, updatedAt }: PostHeaderProps) => {
  return (
    <PostContainer>
      <PostContent>
        <PostContentHeader>
          <a href="/">
            <IoIosArrowBack /> Voltar
          </a>
          <a href="https://github.com/kelyAna/ignite-github-blog/issues">
            <h5>VER NO GITHUB</h5> <RxExternalLink />
          </a>
        </PostContentHeader>
        <h3>{title}</h3>
        <PostInfo>
          <div>
            <AiOutlineGithub size={18} />
            <span>kelyAna</span>
          </div>
          <div>
            <BsCalendarEventFill size={18} />
            <span>{moment(updatedAt).startOf('day').fromNow()}</span>
          </div>
          <div>
            <BsFillChatFill size={18} />
            <span>{comments} comentários</span>
          </div>
        </PostInfo>
      </PostContent>
    </PostContainer>
  )
}
