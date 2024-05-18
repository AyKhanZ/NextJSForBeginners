import React from 'react'
import styles from "./Header.module.css"
import { Todo } from '@/types';

interface Props {
    items:Todo[];
}

const Header = ({items}:Props) => {
  // console.log(items[0].title)
  return (
    <div className={styles.container}>
      <ul className={styles.elements}>
        {items != null &&   items.map((item:Todo,i:number)=>
            <ul key={i}>{item.title}</ul>
        )}
      </ul>
    </div>
  )
}

export default Header
