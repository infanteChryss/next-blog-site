import BlogItem from './BlogItem'
import ProjectStyles from '../styles/Projects.module.css'

const Blogs = ({ articles }) => {
    return (
        <div className={ProjectStyles.blogs}>
            {articles.map((article, i) => (
                <div className={ProjectStyles.blog} key={i}>
                    <BlogItem article={article} />
                </div>
            ))}
        </div>
    )
}

export default Blogs
