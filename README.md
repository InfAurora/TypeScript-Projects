# TypeScript-Projects

# READ EVERYTHING BEFORE CREATING PULL-REQUESTS

## Project Prerequisites

- Have Nodejs Installed Locally [You can find the lastest version here](https://nodejs.org/en/)
- After Installing Nodejs Install the Angular CLI as a global package.

```
npm install -g @angular/cli
```

- Create a Fork of this Repo by clicking the **Fork** Icon on the Top right.
- Download or Clone your Fork.

```
git clone <your-fork-repo-url>
```

- Navigate Inside your Cloned Fork.

```
cd TypeScript-Projects
```

- Setup an Upstream of this Repo to get Latest Changes.

```
git remote add upstream https://github.com/InfAurora/TypeScript-Projects.git
```

### Install Simple-Blog

- Navigate Inside the Project.

```
cd simple-blog
```

- Install the required Dependencies to Run the Project.

```
npm install
```

### Run Simple-Blog

- Start the Project in your Local Development Server.

```
npm start
```

### Pull-Request standard

1. DO NOT PUSH DIRECTLY TO DEVELOP OR MASTER!!!!!!
1. All PRs will come off of the **develop** branch.
1. **All branch names for PRs must include a "-"(hyphen)**. Example: issue-5-update-pipeline.
1. When creating a pr for an issue, start branch name with '**issue-**' or '**pr-**' then follow with the issue number, and finally a short description of what the pr is. (This is to so issues pr's can be more easily searched for in git history).
1. At least **one** approval before merging.
1. If the update is a visual(front-end) change, please attach an image, so that we can see the change.

# Testing standards

1. Use TDD(test driven development) or some form of TDD.
1. Any dom, or logic changes need to be unit tested.
1. Find out how to create basic unit tests in angular <a href="https://angular.io/guide/testing">here</a>.

### Note: this project is using karma/jasmine as the testing framework.

### Link to <a href="http://simple-blog-s3-bucket.s3-website.us-east-2.amazonaws.com/">Simple-Blog</a>.

### Those needing basic angular cli commands, go <a href="https://github.com/InfAurora/TypeScript-Projects/blob/develop/simple-blog/README.md">here.</a>
