# refactionjs

Refactoring and showcase exercise for JavaScript.

To run:

```
npm install
npm start
```

Browse to [http://localhost:3000](http://localhost:3000)

## Notes
- The project has been split into 2 repositories. This repository is only for the frontend app.
- The app has been deployed on AWS S3 and can be accessed at https://ambit.darkskape.com
- Backend repo can be found at https://github.com/skpulla/developer-candidate-test-backend

## Features
- Bootstrapped using create-react-app.
- Runs on the latest version of Node 8.x (and not Node 10.x LTS or 12.x).
- Uses Webpack, Babel, ESLint by default. Explicit configs are not available as the bootstrapped version has not been 'ejected'.
- Uses [Material UI](https://github.com/mui-org/material-ui).
- Uses [Material UI Datatables](https://github.com/gregnb/mui-datatables)
- CI/CD using AWS CodePipeline
  - <a href="https://imgur.com/aciGjJl"><img src="https://i.imgur.com/aciGjJl.png" title="source: imgur.com" /></a>
  - <a href="https://imgur.com/V65F3sC"><img src="https://i.imgur.com/V65F3sC.png" title="source: imgur.com" /></a>
  - Code committed to Github.
  - Triggers AWS CodePipeline.
  - CodeBuild runs tests and builds packages.
  - Static website is then deployed to AWS S3.
  - An AWS CloudFront distribution has been setup to serve the static files on AWS S3.
  - Accepts both HTTP and HTTPS traffic. HTTP traffic is routed to HTTPS by default.
  - Route 53 is configured to use the CloudFront distribution as the target for ambit.darkskape.com.
  
