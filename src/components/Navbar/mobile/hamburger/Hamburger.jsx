import css from './Hamburger.module.css'

const Hamburger = ( { toggleMenu } ) => {
    return (
        <div onClick={ toggleMenu } className={css.container}>
            <div className={css.bar1}></div>
            <div className={css.bar2}></div>
            <div className={css.bar3}></div>
        </div>
    )
}

export default Hamburger