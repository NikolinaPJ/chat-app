import "./Footer.styles.scss";

export function Footer() {
    return (
    <div className="footer-basic">
        <footer>
            <div className="footer-basic__social">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <ul className="footer-basic">
                <li className="list-inline-item"><p>Home</p></li>
                <li className="list-inline-item"><p>About</p></li>
                <li className="list-inline-item"><p>Privacy Policy</p></li>
            </ul>
            <p className="footer-basic__copyright">
                NikolinaPJ © 2022
            </p>
        </footer>
    </div>
    )
  
}