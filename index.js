/* 
░░░░░░░▐█▀█▄░░░░░░░░░░▄█▀█▌
░░░░░░░█▐▓░█▄░░░░░░░▄█▀▄▓▐█
░░░░░░░█▐▓▓░████▄▄▄█▀▄▓▓▓▌█
░░░░░▄█▌▀▄▓▓▄▄▄▄▀▀▀▄▓▓▓▓▓▌█
░░░▄█▀▀▄▓█▓▓▓▓▓▓▓▓▓▓▓▓▀░▓▌█
░░█▀▄▓▓▓███▓▓▓███▓▓▓▄░░▄▓▐█▌
░█▌▓▓▓▀▀▓▓▓▓███▓▓▓▓▓▓▓▄▀▓▓▐█
▐█▐██▐░▄▓▓▓▓▓▀▄░▀▓▓▓▓▓▓▓▓▓▌█▌
█▌███▓▓▓▓▓▓▓▓▐░░▄▓▓███▓▓▓▄▀▐█
█▐█▓▀░░▀▓▓▓▓▓▓▓▓▓██████▓▓▓▓▐█▌
▓▄▌▀░▀░▐▀█▄▓▓██████████▓▓▓▌█ 
*/
const express = require("express");

const app = express()

const randint = (max) => {  
    return Math.floor(
        Math.random() * (max + 1)
    )
}

app.use(express.static("THE GALLERY"));


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`<!DOCTYPE html>
                <html>
                    <head>
                        <title>❤️ Cédric ❤️</title>
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <meta name="description" content="I ❤️ Cédric" />
                        <style>
                            * {
                                margin: 0;
                                background-color: black;
                            }

                            img { height: 100vh }

                            div {
                                display: flex;
                                justify-content: center;
                            }
                        </style>
                    </head>
                    <body>
                        <div>
                            <img src="${randint(8)}.jpg" />
                        </div>
                    </body>
                </html`);
    res.end();
});

app.get("/wide", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`<!DOCTYPE html>
                <html>
                    <head>
                        <title>❤️ Cédric ❤️</title>
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <meta name="description" content="I ❤️ Cédric" />
                        <style>
                            * {
                                margin: 0;
                                background-color: black;
                            }

                            img { 
                                height: 100vh;
                                width: 100%;
                            }

                            div {
                                display: flex;
                                justify-content: center;
                            }
                        </style>
                    </head>
                    <body>
                        <div>
                            <img src="${randint(8)}.jpg" />
                        </div>
                    </body>
                </html`);
    res.end();
});

app.listen(3000);
