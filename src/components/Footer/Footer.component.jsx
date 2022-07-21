import "./Footer.styles.scss";

export function Footer() {
    return (
    <div className="footer-basic">
        <footer>
            <div className="footer-basic__social">
                <a href="#"><i className="icon-social-instagram"></i></a>
                <a href="#"><i className="icon ion-social-snapchat"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-facebook"></i></a>
                </div>
            <ul className="footer-basic">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="footer-basic__copyright">
                NikolinaPJ © 2022
            </p>
        </footer>
    </div>
    )
  
}