///// shared-schedule-app /////

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const port = process.env.PORT || 3080;
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static('./dist/shared-schedule-app'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: 'dist/shared-schedule-app/'}
  );
});

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});