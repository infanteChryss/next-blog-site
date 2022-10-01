import Head from 'next/head'
import Blogs from '../components/Blogs'
import ProjectStyles from '../styles/Projects.module.css'

const projects = ({ articles }) => {
    return(
        <section className={ProjectStyles.my_blogs}>
          <Head> 
            <title>My Blogs</title>
          </Head>
          <div className={"content"}>
            <h2 className={ProjectStyles.heading}>Blogs</h2>
            <Blogs articles={articles}/>
          </div>
        </section>
    )
}

export default projects

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()
    return {
      props: {
        articles
      }
    }
}