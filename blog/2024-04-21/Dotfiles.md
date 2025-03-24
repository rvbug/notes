---
slug: dotfiles
title: Dotfiles 
authors: [rakesh]
tags: [dotfiles]
--- 

# Introduction

In the first part of my `Productivity` series, we talked about configuring [Neovim](https://neovim.io/) as your IDE. You can check out that [blog](https://rvbug.hashnode.dev/configuring-neovim) and my configuration [here](https://github.com/rvbug/neovim).

<!-- truncate -->

---

In this part, let us talk about the magic of **.dotfiles**, how to automate your development workflow, manage repetitive tasks by installing softwares, setting up editor shortcuts, and even configuring the development environment across multiple machines for a unified experience.

# dotfiles - What are they?

dotfiles are configuration files with a dot(.) leading the filename. They are usually found on all \*nix based systems helping store various settings and configurations.

Here's how to find them - Open your favourite terminal and try the following command to show all the hidden files/directories.

```bash
$> ls -a
```

# OS

This script has been tested on:

* Mac Sonoma
    
* Mac Ventura (Virtual Environment)
    
* Ubuntu (Virtual Environment)
    
* Fedora (Virtual Environment)
    
* Docker - Ubuntu, Fedora and Debian
    

# Workflow

Download the repo

```bash
# clone the repo
$> git clone https://github.com/rvbug/.dotfiles

# check if the .dotfile directory is available
$> ls -a 

# cd into the folder
$> cd .dotfiles

# run the first script 
$> ./install.sh

# Note: if you want to run it in a debug mode, try
# $> sh -x install.sh
```

`install.sh` is the entry point which checks for OS version

```bash
#check the OS version
os=$(uname -s)

# If it is Darwin then should be mac 
if [ $os == "Darwin" ]; then 
#...
# run mac script
./macos.sh
#...
# Linux variant 
elif [ $os == "Linux" ]; then
#...
# call linux script
./linux.sh
```

## The List

Since these are highly personal configurations, the requirement was to make these scripts flexible and easy to use and maintain . The newer version now uses text files from the previous `YAML` based configuration.

Below are the three text files used in the script:

`software_list.txt` - List of all softwares to be installed on your machine.

`pip_list.txt` - If you are into Data Science or ML then you can add or remove the libraries. e.g. If you use PyTorch , just swap it with Tensorflow.

`config_list.txt` - List of all dotfiles to be maintained.

`Note`: YAML is a widely used data serialization language for writing configuration files.

## Mac

If mac is detected then it will look if [Homebrew](https://brew.sh/) (package manager) and git is installed already.

### Homebrew & Git

```bash
# check if homebrew is already installed
if command -v brew &>/dev/null; then
  echo "Homebrew already installed"
else
# if not install 
  echo "##### Installing homebrew..."
#...
fi

#...

# checking for git on your machine.
if command -v git &>/dev/null; then
  echo "git already installed..."
#...
```

### Installing softwares

The next step is to check if `software_list.txt` file is available to start the installation process. For certain softwares like Lua, specific version is required. For OCaml, users have an option to skip the installation.

`Note:` Ocaml is a general purpose "functional" programming language. You can read more about it [here](https://ocaml.org/).

```bash
 # check if lua is already is installed
if brew list lua &>/dev/null; then
#...
# if not then install via brew
brew install lua@5.4

#...

# check with user for OCaml installation
read -p "do you want to install ocaml? (y/n): " choice
#...
```

### Data Science and ML

Then comes installing Data Science tools. The only requirement is to have `pyyaml` installed on your machine.

```bash
# check for pyyaml installation
# install if not available.
if brew list pyyaml &>/dev/null; then
```

I have a [repo](https://github.com/rvbug/cookie-ml) where you get a cookie-cutter template for ML projects. It downloads the repo and sets up your machine to get you started immediately.

```bash
# checks if cookie-cutter is already installed
# in your home directory
if [ -d "$HOME/ml-cookie-cutter" ]; then

# if not then download the repo 
# install and activate virtual env 
echo "####### activating the venv..."
source venv/bin/activate 

# ensure pip is installed and then start 
# installing the ML libraries
pip3 install $cfg

# Once done the cleanup starts...
# delete the downloaded repo and 
# deactivate the virtual env
#...
```

### Final configuration

Now on to the final steps of the installation process - Back up the existing configuration files and check for Neovim.

```bash
# Take the backup of the existing config files
cp $HOME/$line $HOME/$line.bak.$(date +%Y-%m-%d-%H:%M:%S)

# If Neovim is already installed, need to 
# backup the existing configuration
cp -r $HOME/.config/nvim/ $HOME/.config/nvim.bak.$dt
```

The script will check for xcode command-line tools

```bash
# check for commandline tools
xcode-select --version > /dev/null

# if not then install them
xcode-select --install
```

## Linux

For Linux, most of the process remains the same with a few subtle differences.

### OS and Package Manager

The script first checks the version of Linux and sets the package manager.

```bash
# if Ubuntu or Debian, then set the package as ap-get
pkg_mgr=apt-get
# If Fedora, then go for dnf 
pkg_mgr=dnf 
# if dnf is not available go for yum
```

### Additional checks

Never (**ever**) run any script as a root user, the script warns if you do so and also check for sudo access. Few software installations are skipped if it is not supported by that operating system.

```bash
# caution the user if it is root user
user=$(whoami)
if [ "$user" == "root" ]; then

# Option to run this with sudo access
read -p "do you want to run this script as sudo (y/n)?" choice

# check if you want to upgrade your system
# before starting the installation
$su_user $pkg_mgr update -y
```

## Docker Support

If you want to try out this script on docker containers then here are some helpful commands. You can download the images and run the container as shown below.

```bash
# To pull the images
docker pull fedora # debian # or ubuntu

# run the container
$> docker run --name fedora -d -i -t fedora /bin/bash

# check the processes
$> docker ps

# to drop inside the container
# replace the container-id with the number 
# shown with the above command
$> docker exec -it "container-id" /bin/bash
```

`Note` If you are using the docker machine, you will be dropped into the container as "root".

## Config files

I used the following files for my machine configuration:

1. .zshrc - This helps to configure your shell and is known to provide great customization.
    
2. .tmux.conf - If you are like me managing multiple projects, why not consider a terminal multiplexer like tmux. It helps create sessions with multiple windows and panes which can be attached and detached easily.
    
3. .wezterm.lua - I migrated from iterm to a rust based terminal called wezterm, which uses lua based configuration.
    
4. startship.toml - It is used for customizing your shell prompt.
    

# Conclusion

Here's how I created a simple script to set the installation and configuration automatically. Use this as an inspiration to build your own personalized configuration.

# Reference

[Productivity Series I - Blog](https://rvbug.hashnode.dev/configuring-neovim)

[My Neovim Configuration](https://github.com/rvbug/neovim)

[My Dotfiles - Github](https://github.com/rvbug/.dotfiles)

[Terminal Multiplexer](https://github.com/tmux/tmux/wiki)

[Wezterm - Rust based Terminal](https://wezfurlong.org/wezterm/index.html)

[Starship - Customizable Shell Prompt](https://starship.rs/)

[Docker](https://www.docker.com/)

[OCaml - Functional Programming Lang](https://ocaml.org/)