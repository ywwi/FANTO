<header>
    <div class="upper-header">
        <a href="#" class="logo">Fanto</a>
        <div class="nav">
            <div class="menu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="nav close">
            <img src="/FANTO/style/imgs/menu-close.svg" alt="Close menu cross">
        </div>
    </div>
    <div class="menu-m">
        <div class="links-wrapper">
            <?php require_once('config.php'); ?>
            <a href="<?= $path ?>FANTO/index.php#about" class="link">
                <h6>01.</h6>
                <h1>About</h1>
            </a>
            <a href="<?= $path ?>FANTO/index.php#faq" class="link">
                <h6>02.</h6>
                <h1>FAQ</h1>
            </a>
            <a href="<?= $path ?>FANTO/login/login.php" class="link" rel="noopener noreferrer">
                <h6>03.</h6>
                <h1>Connect Wallet</h1>
            </a>
        </div>
    </div>
</header>