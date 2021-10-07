# Sass folder
Used to contain **GLOBAL** styles in one centralized location.
  ## mat-overrides
   * The mat-overrides folder is used to house all potential material style overrides. It needs to exist at the global/top-level of the project, so that it can properly override angular material styles
   * Any override we create must be included in the styles.sass file as a **mixin**, so that styles.sass does not become too big

  ## variables
   * Variables is used to hold all potential repetetive/consistent style attributes.
   * Examples: colors, breakpoints etc...

# Karma config

  ## ChromeHeadlessNoSandbox
   * ChromeHeadlessNoSandbox was needed so that AWS CodePipeline could properly run specs. It also helps speed up running the specs locally

# Workflows/Pipelines
 Pr and develop are both workflows for github actions. buildspec is used for AWS CodePipeline. The workflows and pipelines are structured to be able to continuously deploy whenever a successful PR gets merged. This is so that we can constantly push new features and have many potential builds to roll back on when needed.
  ## pr
   * The pr workflow is used to ensure tests run and pass before merging to develop

  ## develop
   * The develop workflow is there to run tests once again before merging itself(develop) into master. Once it has succesfully merged itself into master, it will merge master back into develop, so that neither master or develop is behind a commit.

  ## buildspec
   * Once there has been a merge to master, the buildspec will run tests one last time. If successful, a build for prod will kickoff. Lastly, the artifacts from the build will be stored on S3 to be hosted.

# Issue/Pull-request Templates
  These are templates to help improve the developer experience.

  ## Issue templates
   * This helps speed up the issue creation process, by removing the repetive process of creating each section by hand

  ## Pull-request Template
   * Easy and fast way to create a consistent checklist that can be used on pull-requests by all developers