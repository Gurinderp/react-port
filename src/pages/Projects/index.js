import React, {useState} from "react";

function Landing() {

    const [username, setUsername] = useState("");

    return (
        <body>
    <div className="background">
        <div className="loginPanel">
            <form action="action_page.php" method="post">
                <u className="loginHeader">Sign Up</u>
                <div>
                  <label for="username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="username" required />
                    
                  <label for="email"><b> E-mail</b></label>
                  <input type="email" placeholder="Enter Email" name="email" required />
              
                  <label for="password"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="password" required />
              
                  <button type="submit">Login</button>
                </div>
              </form>
        </div>
    </div>


<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
</body>
    );
}

export default Landing;