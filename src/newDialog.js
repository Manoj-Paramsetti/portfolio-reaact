function navbar(){
    return(
        <body>
        <div id = "NavBar">
            <div id = "NavBar__Left__Part">
                <ul>
                    <a href=".#">About</a>
                    <a href="./education">Education</a>
                    <a href="./projects">Projects</a>
                    <a target="_blank" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view">Resume</a>
                </ul>
            </div>
            <div id="NavBar__Right__Part">
                <span id="linkedin">
                    <a href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height = "25px" srcset=""></img></a>
                </span>
                <span id="github">
                    <a href="http://github.com/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt=""  height = "29px" srcset=""></img></a>
                </span>    
            </div>
        </div>
        <section style={{height: "88px"}}>
    </section>
    <section id="Home">
        <section id="Home__Box">
            <div id="Home__Right__Part">
                <span id="img"></span>
            </div>
        <div id="Home__Left__Part"> 
            {'\n'}{'\n'}
            <h2 style={{fontSize: "33px", fontFamily: 'Montserrat', fontWeight: 700, color: "#FF5555", display: "inline"}}>Hi!</h2>
            <h1 style={{fontSize: "33px", fontFamily: 'Montserrat', fontWeight: 700,  display: "inline"}}>&#160;I'm Paramsetti Manoj</h1>
            {'\n'}
            <h4>I love to do <b>Security Management</b> and <b>Software Development</b></h4>
                {'\n\n'}
                <h2 style={{fontSize: "28px", color: "#FF5555"}}>About me</h2>
                <p style={{textAlign: "justify"}}>I’m a  Computer Engineering  student  at Sathyabama University.
                    Basically, I’m from Chennai and I’m familiar with Flutter 2.0, Python3,
                    JS, Kotlin, Sass and Java. I’m a Technical Team Member <b>@Developer Student Club</b> then Software App developer (<i>intern</i>)
                    at The Spark Foundation (<b>@TSF</b>), Campus fellow (<i>intern</i>) <b>@eduAlgo</b> and also an Executive Member at CodeChef SIST Chapter</p>
            </div>
        </section>
    </section>
    <div id="aboutme">
        <div class="sub-container">
            <div class="close">
                <h3>Contact Details </h3>
                <button2 onClick="hideContact()"><img src="https://icons.getbootstrap.com/assets/icons/x.svg" height="30em" alt="" srcset=""></img></button2>
            </div>
            {'\n'}
            <div class="sub-container-1">
                <h5>
                    <p>
                        <button><a href="https://t.me/ManojParamsetti"target="_blank">    
                            <img src="https://icons.getbootstrap.com/assets/icons/telegram.svg" alt="" srcset="" style={{filter: "invert()"}} height="10px"></img>
                            Telegram             
                            </a>
                        </button>
                        <button><a href="mailto:paramsetti.manoj@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://icons.getbootstrap.com/assets/icons/envelope-fill.svg" alt="" srcset="" style={{filter: "invert()"}} height="10px"></img>
                            e-mail              
                            </a>
                        </button>
                        <button>
                            <a href="http://linkedin.com/in/manoj-paramsetti" target="_blank" rel="noopener noreferrer">
                            <img src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height="10px" style={{filter: "invert()"}} srcset=""></img>
                            LinkedIn
                            </a>
                        </button>
                        <button> <a href="http://github.com/manoj-paramsetti" target="_blank" rel="noopener noreferrer">
                            <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt="" height="10px" style={{filter: 'invert()'}} srcset=""></img>
                            github                       
                            </a>
                        </button>
                    </p>
                </h5>
            </div>
        </div>
    </div>
    <section id="DarkMode1">
        <a onclick="contacts()"><section id="CommImg"></section></a>
    </section>
    <section id="DarkMode">
        <section id="DarkModeImg" onclick="darkMode()"></section>
    </section>
        </body>
    )
}

export default navbar;