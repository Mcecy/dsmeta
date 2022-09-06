import icon from '../../img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div class="dsmeta-logo-container">
                <img src="logo.svg" alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig/">@devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header