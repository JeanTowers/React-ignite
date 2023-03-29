import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content}) {
    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://github.com/GabrielleCSD.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jean Torres</strong>
                            <time title='07 de março ás 9:46h' dateTime="2023-03-07 9:46:30">Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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