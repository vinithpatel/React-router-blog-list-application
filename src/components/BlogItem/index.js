import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <li>
      <Link className="blog-link" to={`blogs/${id}`}>
        <div className="blog-item">
          <div className="blog-image-card">
            <img className="blog-image" src={imageUrl} alt={topic} />
          </div>
          <div className="blog-desc-card">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="author-card">
              <img className="author-image" src={avatarUrl} alt="author" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
