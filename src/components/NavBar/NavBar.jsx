import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './NavBar.module.css'

export default function NavBar(props) {
  return (
    <div className={styles.Nav}>
        <div>
            <button>Home</button>
        </div>
        <div>
            <button>Filter</button>
        </div>
        <div>
            <SearchBar onSearch= {props.onSearch}/>
        </div>
    </div>
  )
}
