import { Header } from './components/Header'
import {Post} from './components/Post' 
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Jean Torres" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque natus voluptatem tenetur illum harum est, iste cupiditate ullam corporis, nisi cum fugit eius recusandae suscipit explicabo odio voluptatibus aspernatur architecto." 
          />
          <Post
            author="Levi Torres" 
            content="Um Novo Post "
          />
        </main>
      </div>
    </div>
    
  )

}


