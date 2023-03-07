import styles from  './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src='https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQHIMIqU-3U8zg/profile-displayphoto-shrink_200_200/0/1669337123913?e=1683763200&v=beta&t=Il-mZVoLEQZqUYIHzw9HN-E7JA9r5aJVNV03Zp9e82c" />
                <strong>Jean Torres</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}