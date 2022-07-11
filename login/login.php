<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/fonts.css">
    <link rel="stylesheet" href="../style/reset.css">
    <link rel="stylesheet" href="../style/global.css">
    <link rel="stylesheet" href="./login.css">
    <title>Login | FANTO</title>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
    <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
    <script type="importmap">
    {
        "imports": {
        "three": "https://unpkg.com/three@0.142.0/build/three.module.js"
        }
    }
    </script>
    <div class="cursor"></div>
    <main>
        <section class="main">
            <?php include($_SERVER['DOCUMENT_ROOT']."/FANTO/included/included.php"); ?>
            <div class="content">
                <div class="form">
                    <div class="welcome">
                        <h1>Login</h1>
                        <p>Welcome back.</p>
                    </div>
                    <form action="#" method="post">
                        <label>
                            <span>Email</span>
                            <div class="input">
                                <input type="email" name="email" id="email" placeholder="Type your email">
                            </div>
                        </label>
                        <label>
                            <span>Password</span>
                            <div class="input">
                                <input type="password" name="pass" id="pass" placeholder="Type your password">
                                <!-- <span class="hide">Show</span> -->
                            </div>
                        </label>
                        <input type="submit" value="Sign in">
                        <div class="no-account">
                            <a href="#">Don't have an account? <strong>Well, create one</strong></a>
                        </div>
                    </form>
                </div>
                <div id="container">
                    <canvas class="webgl"></canvas>
                </div>
            </div>
        </section>
    </main>
    <script type="module" src="./login.js"></script>
    <script src="../scripts/cursor.js"></script>
    <script src="../scripts/menu.js"></script>
</body>
</html>