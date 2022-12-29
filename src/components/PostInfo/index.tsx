import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { PostInfoContent, PostInfoHeader } from './styles'

type PostInfoProps = {
  title: string
  description: string
  createdAt: number | Date
  numberIssue: number
}

export const PostInfo = ({
  title,
  description,
  createdAt,
  numberIssue,
}: PostInfoProps) => {
  const navegate = useNavigate()
  const postClick = () => {
    navegate(`/post?number=${numberIssue}`)
  }
  return (
    <PostInfoContent onClick={postClick}>
      <PostInfoHeader>
        <h4>{title}</h4>
        <span>{moment(createdAt).startOf('day').fromNow()}</span>
      </PostInfoHeader>
      <p>{description}</p>
    </PostInfoContent>
  )
}
