workflow "release" {
  on       = "push"
  resolves = ["publish"]
}

action "install" {
  uses = "actions/npm@master"
  args = "install"
}

action "tag" {
  needs = "install"
  uses  = "actions/bin/filter@master"
  args  = "tag"
}

action "filter-branch" {
  needs = "tag"
  uses  = "actions/bin/filter@master"
  args  = "branch master"
}

action "filter-environment" {
  needs = "filter-branch"
  uses  = "actions/bin/filter@master"
  args  = "environment production"
}

action "document" {
  needs = "filter-environment"
  uses  = "actions/npm@master"
  args  = "run document"
}

action "deploy-docs-site" {
  uses    = "maxheld83/ghpages@v0.2.1"
  secrets = ["GH_PAT"]

  env = {
    BUILD_DIR = "docs/"
  }

  needs = "document"
}

action "build" {
  needs = "deploy-docs-site"
  uses  = "actions/npm@master"
  args  = "run build"
}

action "publish" {
  needs   = "build"
  uses    = "actions/npm@master"
  args    = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
