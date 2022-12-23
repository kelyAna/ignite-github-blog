/* eslint-disable react/jsx-no-comment-textnodes */
import { PostHeader } from '../../components/PostHeader'
import { PostCardCode, PostDescription } from './styles'

export const Post = () => {
  return (
    <>
      <PostHeader />
      <PostDescription>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <a href="">Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <PostCardCode>
          <div>
            let foo = 42; <span>// foo is now a number</span>
          </div>
          <div>
            foo = ‘bar’; <span>// foo is now a string</span>
          </div>
          <div>
            foo = true; <span>// foo is now a boolean</span>
          </div>
        </PostCardCode>
      </PostDescription>
    </>
  )
}
