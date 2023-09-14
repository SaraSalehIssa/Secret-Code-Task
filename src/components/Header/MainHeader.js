import classes from './MainHeader.module.css';

function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.row}>
            <h1 className={classes.title}>Find the secret code</h1>
        </div>
    </header>
}

export default MainHeader;