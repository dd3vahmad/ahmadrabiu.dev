---
title: "pLICENSE"
summary: "A tiny CLI app that allows you to add open-source licenses to your project interactively."
date: "Oct 19 2025"
draft: false
tags:
  - Go
  - CLI
  - Public License
repoUrl: https://github.com/dd3vahmad/plicense
---

Copypasting license content everytime you start a new project is repetitive and boring, since you
even need to check if there any copyright information you need to change (It's a lot!).

pLICENSE is a simple and fast CLI tool for adding open-source licenses to your project.

## Installation Options

### 1. Download prebuilt binary
Grab the latest binary for your OS from [releases](https://github.com/dd3vahmad/plicense/releases).

Extract and move it into your `$PATH`:

```bash

tar -xzf plicense_linux_x86_64.tar.gz
sudo mv plicense /usr/local/bin/
```

### 2. Install with Homebrew
#### First tap installation
```bash

brew tap dd3vahmad/homebrew-tap
brew install plicense
```

#### After first tap
```bash

brew install dd3vahmad/tap/plicense
```

### 3. Install with Shell Script (Linux/macOS)
```bash

curl -fsSL https://raw.githubusercontent.com/dd3vahmad/plicense/master/install.sh | bash
```

### 4. Install with Go
```bash

go install github.com/dd3vahmad/plicense@latest
```

## Usage
### Root command (Confirm installation):
```bash

plicense           -> About plicense

plicense help
plicense --help    -> To get help
plicense -h

plicense version
plicense --version -> To check plicense version
plicense -v
```
### To update your plicense installation
```bash

plicense update
```
### To add new license:
```bash

plicense add
```
### To remove project license:
```bash

plicense remove
```
### To view project license:
> run this command only in the root of your project (where the LICENSE file is)

```bash

plicense view
```

## Advanced Usage
> You can use these commands in combinations too.

### To add default name
```bash

plicense config --name="Your name"
```
### To add default license
```bash

plicense config --default=<license_key>
```
### To show plicense configuration
```bash

plicense config --show

plicense config -s
```

