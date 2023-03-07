import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.Comment}>
            <img src="https://media.licdn.com/dms/image/D4D03AQHIMIqU-3U8zg/profile-displayphoto-shrink_200_200/0/1669337123913?e=1683763200&v=beta&t=Il-mZVoLEQZqUYIHzw9HN-E7JA9r5aJVNV03Zp9e82c" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jean Torres</strong>
                            <time title='07 de março ás 9:46h' dateTime="2023-03-07 9:46:30">Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}