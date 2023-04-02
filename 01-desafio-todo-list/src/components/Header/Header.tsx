import todologo from '../../assets/todologo.svg'

import styles from './Header.module.css'

import { PlusCircle } from 'phosphor-react'

export function Header() {
    return(
        <header className={styles.header}>
           <img src={todologo} alt="logo ToDo" /> 

           <form className={styles.newTaskForm}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button type="submit" >
                Criar
                <PlusCircle size={20} />
            </button>
           </form>
        </header>
    ) 
}