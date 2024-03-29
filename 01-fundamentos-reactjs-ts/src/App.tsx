import { Header } from './components/Header'
import {Post, PostType} from './components/Post' 
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

// author: { avatar_url:"", name:"", role:""}
// publishedAt: Date
// content: string

const posts: PostType[] =[
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/JeanTowers.png',
      name: 'Jean Torres',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},   
    ],
    publishedAt: new Date ('2023-03-03 10:48:00')
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/GabrielleCSD.png',
      name: 'Gabrielle Demberck',
      role: 'Flutter Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},   
    ],
    publishedAt: new Date ('2023-03-7 18:05:00')
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        {posts.map(post =>{
          return (
            <Post 
              key={post.id}
              post={post}
            />
            )
        })}
        </main>
      </div>
    </div>
    
  )

}


