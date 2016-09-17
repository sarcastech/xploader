# xploader
Autoload all applications/router for your ExpressJS app. Or blow it up. Whatever.

## Huh?
`xploader` is a module that will auto load your applications/routers for your ExpressJS project.
It does make a couple of assumptions:

### Directory Structure
Your Express app should specify a "main" directory for your routes/applications, and all immediate child directories would contain your different routes. For example:
```
/express
  /app // defaults to "app", but if you use a different folder name, you can pass it in the conifg
    /home
      index.js // exported routes for "home" for autoload
    /store
      index.js // exported routes for "store" for autoload
    /blog
      index.js //exported routes for "blog" for autoload
    /* and so on... */
```

### `index.js` Exists for Each Route Directory
As `xploader` auto loads your routes, it assumes you've named your point of entry file as `index.js`.
Location follows example above, where the contents could be something similar to:
```javascript
// index.js
'use strict'
let express = require('express')
let router = express.Router()

router.get('/', function (req, res) {
  // handle your request/response
})

// add more routes as needed

module.exports = router
```