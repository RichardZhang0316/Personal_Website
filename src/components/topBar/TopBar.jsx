import "./topBar.scss"
import { ReactComponent as Email } from '../../icons/youxiang.svg';
import { ReactComponent as Phone } from '../../icons/shouji.svg';
// import { ReactComponent as LinkedIn } from '../../icons/lingying.svg';


export default function topBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Kaixin</a>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>zhank20@wfu.edu</span>
                    </div>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>+1 743 216 2135</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
