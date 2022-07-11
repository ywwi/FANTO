<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/fonts.css">
    <link rel="stylesheet" href="./style/reset.css">
    <link rel="stylesheet" href="./style/global.css">
    <link rel="stylesheet" href="./style/style.css">
    <title>FANTO | NFT Collection</title>
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
    <div class="intro-wrapper">
        <div>
            <h1>FANTO</h1>
        </div>
    </div>
    <div class="cursor"></div>
    <main>
        <section class="main">
            <?php include($_SERVER['DOCUMENT_ROOT']."/FANTO/included/included.php"); ?>
            <canvas class="webgl"></canvas>
            <div class="content">
                <h1>Beautiful <span id="trigger">FANTOS</span> for everyone</h1>
                <p class="p-text">We are innovating the NFT market. Choose your favorite FANTO card from the collection. The new future.</p>
                <div class="main-buttons">
                    <a class="cta-button" href="#">
                        <div>
                            <span>Connect wallet</span>
                        </div>
                    </a>
                    <a href="#about">
                        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 1.625L10.5 11L1 1.625" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <section class="about" id="about">
            <div class="about-content">
                <div class="headings">
                    <div>
                        <h1 class="sections-heading">About <span>FANTOS</span></h1>
                        <p class="p-text">Take a look to our Fanto World! FANTOS is a collection of 20 unique cards.</p>
                    </div>
                    <div>
                        <h1 class="sections-heading">20</h1>
                        <p class="p-text">Only 20 unique Fantos are available worldwide.</p>
                    </div>
                </div>
                <div class="tape-wrapper">
                    <div class="tape">
                        <div class="tape-line"></div>
                        <div class="tape-line-text">
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                        </div>
                        <div class="tape-line"></div>
                    </div>
                    <div class="tape">
                        <div class="tape-line"></div>
                        <div class="tape-line-text">
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                            <h4>FANTOS</h4>
                            <h4>ABOUT</h4>
                        </div>
                        <div class="tape-line"></div>
                    </div>
                    <img class="nft-row" src="./style/imgs/nfts-row.png" alt="NFTs image row">
                </div>
            </div>
        </section>
        <section class="faq" id="faq">
            <h1>
                FAQ
                <img class="fantooo" src="./style/imgs/FANTOOOO.svg" alt="FANTOOOOO">
            </h1>
            <div class="faq-items">
                <div class="faq-item">
                    <div class="faq-item-top">
                        <h1 class="faq-heading">What is a FANTO?</h1>
                        <div class="faq-item-cross">
                            <div class="cross-line"></div>
                            <div class="cross-line"></div>
                        </div>
                    </div>
                    <div class="p-answer">
                        <p class="p-text">A FANTO is a NFT-card, in three dimensions, with different themes... basically.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-top">
                        <h1 class="faq-heading">How many FANTOS are available?</h1>
                        <div class="faq-item-cross">
                            <div class="cross-line"></div>
                            <div class="cross-line"></div>
                        </div>
                    </div>
                    <div class="p-answer">
                        <p class="p-text">Bruh just read the about section.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-top">
                        <h1 class="faq-heading">What is a NFT?</h1>
                        <div class="faq-item-cross">
                            <div class="cross-line"></div>
                            <div class="cross-line"></div>
                        </div>
                    </div>
                    <div class="p-answer">
                        <p class="p-text">A non-fungible token (NFT) is a unique unit of data on a blockchain that can be linked to digital and physical objects to provide an immutable proof of ownership.</p>
                        <p class="p-text">The data an NFT contains can be tied to digital images, songs, videos, avatars, and more. However, they can also be used to give an NFT owner access to exclusive merchandise, tickets to live or digital events, or be linked to physical assets like cars, yachts, and much more.</p>
                        <a href="https://nftnow.com/" target="_blank" rel="noopener noreferrer">— nftnow.com</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <script src="./scripts/cursor.js"></script>
    <script src="./scripts/menu.js"></script>
    <script type="module" src="./scripts/main.js"></script>
</body>
</html>