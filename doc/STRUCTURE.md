# App structure

```
# setup app startup on client and server

rm -f client/*
echo "import '/imports/startup/client';" > client/main.js
touch client/main.html

rm server/*
echo "import '/imports/startup/server';" > server/main.js

# create the app structure
mkdir i18n
touch i18n/i18n.js

# create the app structure
mkdir imports

# startup
# client
mkdir imports/startup
mkdir imports/startup/client
touch imports/startup/client/index.js
# routes
mkdir imports/startup/client/routes
touch imports/startup/client/routes/root.js
echo "import './routes/root.js';" > imports/startup/client/index.js
# (... more routes: posts, tasks, polls, records ...)

# server
mkdir imports/startup/server
touch imports/startup/server/index.js

# setup the api directory

mkdir imports/api

# setup the users api (the same for every api)

mkdir imports/api/users
mkdir imports/api/users/server
touch imports/api/users/index.js
touch imports/api/users/users.js
touch imports/api/users/methods.js
touch imports/api/users/server/publications.js

# (... more apis: posts, tasks, polls, records ...)

# ui components

mkdir imports/ui

# main components

mkdir imports/ui/layout
touch imports/ui/layout/layout.html
touch imports/ui/layout/layout.js

mkdir imports/ui/sidebar
touch imports/ui/sidebar/sidebar.html
touch imports/ui/sidebar/sidebar.js

mkdir imports/ui/navbar
touch imports/ui/navbar/navbar.html
touch imports/ui/navbar/navbar.js

mkdir imports/ui/footer
touch imports/ui/footer/footer.html
touch imports/ui/footer/footer.js
# /end of main components


# pages (every routed page)

mkdir imports/ui/pages

# dashboard
mkdir imports/ui/pages/dashboard
touch imports/ui/pages/dashboard/dashboard.html
touch imports/ui/pages/dashboard/dashboard.js

# user pages
mkdir imports/ui/pages/user
touch imports/ui/pages/user/login.html
touch imports/ui/pages/user/login.js
touch imports/ui/pages/user/profile.html
touch imports/ui/pages/user/profile.js

# (... more pages: posts, tasks, polls, records ...)

# components (construction components)

mkdir imports/ui/components

# charts

mkdir imports/ui/components/charts

# dates chart

mkdir imports/ui/components/charts/dates
touch imports/ui/components/charts/dates/dates.html
touch imports/ui/components/charts/dates/dates.js

# (... more charts: pie, gauges, worlmap, ...)

# (... more components: checkbox, forms, cards ...)
```
