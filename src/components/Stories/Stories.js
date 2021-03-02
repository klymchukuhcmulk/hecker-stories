import StoriesGrid from '../StoriesGrid/StoriesGrid'
import Paginator from '../Paginator/Paginator'

import './Stories.scss'

export default function Stories ({ stories }) {
  return (
    <main className="main-page">
      <StoriesGrid stories={stories} />
      <Paginator />
    </main>
  )
}
