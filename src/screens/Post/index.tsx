/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { PostHeader } from '../../components/PostHeader'
import { api } from '../../lib/axios'
import { PostDescription } from './styles'

const USER_GIHUB = 'kelyAna'
const REPO_NAME = 'ignite-github-blog'

interface PostDataType {
  id: string
  title: string
  body: string
  updated_at: number | Date
  number: number
  comments: number
}

export const Post = () => {
  const [post, setPost] = useState<PostDataType[]>([])
  const params = new URLSearchParams(window.location.search)

  async function getIssues() {
    await api
      .get(
        `/search/issues?q=${params.get(
          'number',
        )}%20repo:${USER_GIHUB}/${REPO_NAME}`,
      )
      .then((response) => setPost(response.data.items))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <>
      {post.map((postInfo) => {
        return (
          <>
            <PostHeader
              updatedAt={postInfo.updated_at}
              comments={postInfo.comments}
              title={postInfo.title}
            />
            <PostDescription>
              <ReactMarkdown>{postInfo.body}</ReactMarkdown>
            </PostDescription>
          </>
        )
      })}
    </>
  )
}
