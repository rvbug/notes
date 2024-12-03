---
slug: Nix
title: Nix Pkg Manager
authors: [rakesh]
tags: [nix]
---

# Introduction
Nix is a powerful, purely functional package manager that provides a unique approach to software deployment and system configuration. Unlike traditional package managers, Nix focuses on:

>-  Reproducibility  
>-  Atomic upgrades and rollbacks  
>-  Consistent development environments  
>-  Cross-platform compatibility  

# Installation

## MacOS

```bash
# Install Nix using the official installer
sh <(curl -L https://nixos.org/nix/install)

# For Apple Silicon (M1/M2) machines, use:
sh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store
```

## Linux
```bash
# For most Linux distributions
curl -L https://nixos.org/nix/install | sh

# Multi-user installation (recommended)
curl -L https://nixos.org/nix/install | sh -s -- --daemon
```


## Post Installation
Source the Nix profile. I prefer using zshrc.

```bash
# Add to your shell configuration (.zshrc, .bashrc)
source ~/.nix-profile/etc/profile.d/nix.sh
```

## Nix Flakes
Flakes are a new feature in Nix that provide better reproducibility and composability. Create a `flake.nix` file in your project:

```nix
{
  description = "My Dev Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # Add inputs for your dotfile repositories
    nvim-config = {
      url = "github:yourusername/nvim-config";
      flake = false;  # Just fetch the source
    };

    tmux-config = {
      url = "github:yourusername/tmux-config";
      flake = false;
    };

    i3-config = {
      url = "github:yourusername/i3-config";
      flake = false;
    };

  };

  outputs = { self, nixpkgs, home-manager, nvim-config, tmux-config, i3-config }:
    let
      # This needs to be adjusted based on your system
      system = "x86_64-linux";  
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      homeConfigurations.mydevenv = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        modules = [ 
          ./home.nix 
          {
            # Pass the inputs to home-manager configuration
            home.file = {
              ".config/nvim".source = nvim-config;
              ".config/tmux".source = tmux-config;
              ".config/i3".source = i3-config;
            };
          }
        ];
      };
    };
}

```

## Development Environment Setup

Create a `home.nix` file for comprehensive development environment configuration.  
Here's how my configuration looks like

```nix
{ config, pkgs, ... }:

{
  home = {
    username = "yourusername";
    homeDirectory = "/home/yourusername";
    stateVersion = "23.11";

    packages = with pkgs; [
      # Development tools
      git
      neovim
      wezterm
      starship
      curl
      tmux
      rofi
      dunst
      feh

      tmux
      
      # Language-specific tools
      python3
      rustup
      nodejs
      rust-analyzer
      
      # Utility tools
      ripgrep
      fd
      npm
      yarn
      lazygit
      tree
      tree-sitter
    ];
  };

  # Neovim configuration from GitHub
  programs.neovim = {
    enable = true;
    extraConfig = ''
      lua << EOF
      -- Load configuration from GitHub repo
      vim.cmd('source ~/.config/nvim/init.lua')
      EOF
    '';
  };

  # Starship prompt configuration
  programs.starship = {
    enable = true;
    settings = {
      add_newline = false;
      character = {
        success_symbol = "[➜](bold green)";
        error_symbol = "[➜](bold red)";
      };
    };
  };

  # WezTerm configuration
  programs.wezterm = {
    enable = true;
    extraConfig = ''
      return {
        font = wezterm.font("JetBrains Mono"),
        color_scheme = "Dracula",
      }
    '';
  };

  # Tmux configuration
    programs.tmux = {
        enable = true;
        shell = "${pkgs.zsh}/bin/zsh";
        terminal = "screen-256color";
        plugins = with pkgs.tmuxPlugins; [
            resurrect
            continuum
            # Add your preferred tmux plugins
        ];
        extraConfig = ''
            source-file ${../dotfiles/tmux/tmux.conf}
        '';
        };
}

```


## Managing Dotfiles with Nix
To manage dotfiles, create a separate repository with your configuration files and reference them in your Nix configuration:

```nix
{
  home.file = {
    ".config/nvim" = {
      source = fetchFromGitHub {
        owner = "yourusername";
        repo = "nvim-config";
        rev = "main";  # Or specific commit
        sha256 = "xxx";
      };
      recursive = true;
    };
  };
}
```

## Applying the Configuration

```nix
# Initialize and update flakes
nix flake update

# Apply the home-manager configuration
home-manager switch --flake .#mydevenv
```

## Benefits of this Approach

- Reproducibility: Exact same environment across machines
- Declarative Configuration: Define your entire setup in code
- Easy Rollbacks: Simple to revert to previous configurations
- Isolated Environments: No dependency conflicts

## My Nix Configuration 

```markdown
nix-config/
│
├── flake.nix           # Main Nix flake configuration
├── flake.lock          # Locked dependencies
│
├── home.nix            # Home Manager configuration
│
├── hosts/              # Machine-specific configurations
│   ├── macbook/
│   │   └── default.nix
│   └── workstation/
│       └── default.nix
│
├── modules/            # Reusable configuration modules
│   ├── neovim/
│   │   ├── default.nix
│   │   └── plugins.nix
│   ├── starship.nix
│   ├── wezterm.nix
│   └── git.nix
│   ├── tmux/
│   │   ├── default.nix
│   │   └── tmp.nix
│   ├── i3/
│   │   └── default.nix
│   
│   
├── dotfiles/           # Actual dotfile configurations
│   ├── nvim/
│   │   ├── init.lua
│   │   └── lua/
│   ├── starship.toml
│   └── wezterm.lua
│   ├── tmux/
│   │   ├── tmux.conf   # Main tmux configuration
│   │   └── plugins/   
│   │       ├── tpm/    # Tmux Plugin Manager (TPM) plugins
│   │       └── other-plugins/
│   ├── i3/
│   │   ├── config
│   
└── scripts/            # Utility scripts
    ├── setup.sh
    └── update.sh
    └── tmux-setup.sh  # Optional setup script for tmux
```

## Troubleshooting

- Ensure Nix daemon is running
- Check `~/.config/nixpkgs/config.nix` for global configurations
- Use nix-shell for temporary environments

## Conclusion
Nix provides a powerful, reproducible way to manage your development environment. By leveraging Nix flakes and home-manager, you can create consistent, version-controlled setups across multiple machines. If you want to know more about the nix functional package manager. Check out my quick guide [here](http://quibitai.in/notes/)

## Additional Resources

- Nix Official Documentation
- Home Manager GitHub
- Nix Flakes Guide
- [Nix Functional Package](http://quibitai.in/notes/)