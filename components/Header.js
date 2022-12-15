import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>Aam Aadmi Party</span> Community
            </h1>
            <p className={headerStyles.description}>
                Join us in our journey to make India a better place to live.
            </p>
        </div>
    )
}
export default Header;