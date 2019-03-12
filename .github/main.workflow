workflow "release" {
  on = "push"
  resolves = [
    "publish"
  ]
}

action "filter-branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "install" {
  needs = "filter-branch"
  uses = "actions/npm@master"
  args = "install"
}

action "document" {
  needs "install"
  uses = "actions/npm@master"
  args = "run document"
}

action "deploy-docs-site" {
  uses = "maxheld83/ghpages@v0.2.1"
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "docs/"
  }
  needs = "document"
}

action "build" {
  needs = "deploy-docs-site"
  uses = "actions/npm@master"
  args = "run build"
}

action "publish" {
  needs = "build"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
