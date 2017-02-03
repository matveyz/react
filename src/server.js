import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';

const app = express();

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }
        if (error) {
            return res.status(500).send(error.message);
        }
        if (!renderProps) {
            return res.status(404).send('Not found');
        }
        const componentHTML = ReactDom.renderToString(<RouterContext {...renderProps} />);
        return res.end(renderHTML(componentHTML));
        });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      <style>
      body {
  background: pink;
  padding: 20px;
  margin: 0;
}
h1 {
      -moz-animation-duration: 3s;
      -webkit-animation-duration: 3s;
      -moz-animation-name: slidein;
      -webkit-animation-name: slidein;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 80px;
      margin-bottom: -10px;
      color: #2665b7;
      text-shadow: yellow 1px 1px 0, yellow -1px -1px 0, yellow -1px 1px 0, yellow 1px -1px 0;
     }

@-moz-keyframes slidein {
        from {
           margin-left:100%;
           width: 200%
        }
        to {
           margin-left: 0%;
           width: 100%;
        }
}

@-webkit-keyframes slidein {
        from {
           margin-left: 100%;
           width: 300%
        }
        to {
           margin-left: 0%;
           width: 100%;
        }
}

span {
  font-size: 35px;
}

#regards {
  font-family: Arial, sans-serif;
  font-size: 30px;
  color: #644e99;
}

h2 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 40px;
  color: green;
  text-shadow: white 1px 1px 0, white 1px 1px 0, white 1px 1px 0, white 1px 1px 0;
}

p {
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
}

ul {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
}

li {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
}

#head {
  color: yellow;
}

ul.header li {
  display: inline;
  list-style-type: none;
  margin: 0;
}
ul.header {
  background-color: #696a6d;
  padding: 0;
}
ul.header li a {
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
}
.content {
  background-color: #bfaaef;
  padding: 20px;
}
.content h2 {
  padding: 0;
  margin: 0;
}
.content li {
  margin-bottom: 10px;
}
.active {
  background-color: red;
}

      </style>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});