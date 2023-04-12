import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: false,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/blogs/${id}`

    const response = await fetch(url)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({
      blogDetails: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogDetails

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-container">
            <h1 className="blog-heading">{title}</h1>
            <div className="author-card">
              <img className="author-image" src={avatarUrl} alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img className="blog-details-image" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
