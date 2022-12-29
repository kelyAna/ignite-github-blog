import { useEffect, useRef, useState } from 'react'
import { api } from '../../lib/axios'
import { PostInfo } from '../PostInfo'
import { FeedContainer, FeedHeader, FeedSearchInput, PostList } from './styles'

const USER_GIHUB = 'kelyAna'
const REPO_NAME = 'ignite-github-blog'

interface IssueDataType {
  id: string
  title: string
  body: string
  created_at: number | Date
  number: number
}

export const Feed = () => {
  const [usersIssue, setUsersIssue] = useState<IssueDataType[]>([])
  const inputSearchRef = useRef<HTMLInputElement>(null)
  const [searchQuery, setSearchQuery] = useState('')

  async function getIssues(query: string) {
    await api
      .get(`/search/issues?q=${query}%20repo:${USER_GIHUB}/${REPO_NAME}`)
      .then((response) => setUsersIssue(response.data.items))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getIssues(searchQuery)
  }, [searchQuery])

  return (
    <FeedContainer>
      <FeedHeader>
        <h3>Publicações</h3>
        <span>{usersIssue.length} publicações</span>
      </FeedHeader>
      <FeedSearchInput
        type="text"
        ref={inputSearchRef}
        placeholder="Buscar conteúdo"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PostList>
        {usersIssue.map((issue) => {
          return (
            <PostInfo
              numberIssue={issue.number}
              key={issue.id}
              createdAt={issue.created_at}
              title={issue.title}
              description={issue.body}
            />
          )
        })}
      </PostList>
    </FeedContainer>
  )
}
