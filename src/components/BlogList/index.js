import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formatedData = data.map(eachBlogObj => ({
      id: eachBlogObj.id,
      title: eachBlogObj.title,
      imageUrl: eachBlogObj.image_url,
      avatarUrl: eachBlogObj.avatar_url,
      author: eachBlogObj.author,
      topic: eachBlogObj.topic,
    }))

    this.setState({
      blogList: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="blogs-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-items-container">
            {blogList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogData={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
