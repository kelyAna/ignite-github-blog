import { PostInfo } from '../PostInfo'
import { FeedContainer, FeedHeader, FeedSearchInput, PostList } from './styles'

export const Feed = () => {
  return (
    <FeedContainer>
      <FeedHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </FeedHeader>

      <FeedSearchInput type="text" placeholder="Buscar conteúdo" />
      <PostList>
        <PostInfo />
        <PostInfo />
        <PostInfo />
        <PostInfo />
        <PostInfo />
      </PostList>
    </FeedContainer>
  )
}
