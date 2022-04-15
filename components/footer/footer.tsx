import Styles from './footer.module.css';

export function Footer() {
    return (
        <footer className="max-w-7xl mx-auto">
            <div className={Styles.footer}>
                <p>@ 2022 - OnFood by gabtonete</p>
            </div>
        </footer>
    )
}