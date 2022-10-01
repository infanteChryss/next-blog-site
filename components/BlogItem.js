import Link from 'next/link'
import ProjectStyles from '../styles/Projects.module.css'

const BlogItem = ({ article }) => {
    return (
        <div className={[ProjectStyles.blog_item, "elevated"].join(" ")}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <Link href='/blog/[id]' as={`/blog/${article.id}`}>
                <a>Read More &rarr;</a>
            </Link>
        </div>
    )
}

export default BlogItem
