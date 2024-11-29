"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[145],{8332:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Nix","metadata":{"permalink":"/notes/blog/Nix","source":"@site/blog/2023-03-05-nix/index.md","title":"Nix Pkg Manager","description":"Nix is a powerful, purely functional package manager that provides a unique approach to software deployment and system configuration. Unlike traditional package managers, Nix focuses on:","date":"2023-03-05T00:00:00.000Z","tags":[{"inline":false,"label":"nix","permalink":"/notes/blog/tags/nix","description":"Nix OS and Functional Package Manager"}],"readingTime":4.205,"hasTruncateMarker":false,"authors":[{"name":"rakesh","title":"Sr. Engineering Manager","url":"https://qubitai.in","page":{"permalink":"/notes/blog/authors/rakesh"},"socials":{"w":"https://qubitai.in","github":"https://github.com/rvbug"},"imageURL":"https://avatars.githubusercontent.com/u/10928536?v=4","key":"rakesh"}],"frontMatter":{"slug":"Nix","title":"Nix Pkg Manager","authors":["rakesh"],"tags":["nix"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/notes/blog/welcome"}},"content":"Nix is a powerful, purely functional package manager that provides a unique approach to software deployment and system configuration. Unlike traditional package managers, Nix focuses on:\\n\\n>-  Reproducibility  \\n>-  Atomic upgrades and rollbacks  \\n>-  Consistent development environments  \\n>-  Cross-platform compatibility  \\n\\n# Installation\\n\\n## MacOS\\n\\n```bash\\n# Install Nix using the official installer\\nsh <(curl -L https://nixos.org/nix/install)\\n\\n# For Apple Silicon (M1/M2) machines, use:\\nsh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store\\n```\\n\\n## Linux\\n```bash\\n# For most Linux distributions\\ncurl -L https://nixos.org/nix/install | sh\\n\\n# Multi-user installation (recommended)\\ncurl -L https://nixos.org/nix/install | sh -s -- --daemon\\n```\\n\\n\\n## Post Installation\\nSource the Nix profile. I prefer using zshrc.\\n\\n```bash\\n# Add to your shell configuration (.zshrc, .bashrc)\\nsource ~/.nix-profile/etc/profile.d/nix.sh\\n```\\n\\n## Nix Flakes\\nFlakes are a new feature in Nix that provide better reproducibility and composability. Create a `flake.nix` file in your project:\\n\\n```nix\\n{\\n  description = \\"My Dev Environment\\";\\n\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixos-unstable\\";\\n    home-manager = {\\n      url = \\"github:nix-community/home-manager\\";\\n      inputs.nixpkgs.follows = \\"nixpkgs\\";\\n    };\\n\\n    # Add inputs for your dotfile repositories\\n    nvim-config = {\\n      url = \\"github:yourusername/nvim-config\\";\\n      flake = false;  # Just fetch the source\\n    };\\n\\n    tmux-config = {\\n      url = \\"github:yourusername/tmux-config\\";\\n      flake = false;\\n    };\\n\\n    i3-config = {\\n      url = \\"github:yourusername/i3-config\\";\\n      flake = false;\\n    };\\n\\n  };\\n\\n  outputs = { self, nixpkgs, home-manager, nvim-config, tmux-config, i3-config }:\\n    let\\n      # This needs to be adjusted based on your system\\n      system = \\"x86_64-linux\\";  \\n      pkgs = nixpkgs.legacyPackages.${system};\\n    in {\\n      homeConfigurations.mydevenv = home-manager.lib.homeManagerConfiguration {\\n        inherit pkgs;\\n        modules = [ \\n          ./home.nix \\n          {\\n            # Pass the inputs to home-manager configuration\\n            home.file = {\\n              \\".config/nvim\\".source = nvim-config;\\n              \\".config/tmux\\".source = tmux-config;\\n              \\".config/i3\\".source = i3-config;\\n            };\\n          }\\n        ];\\n      };\\n    };\\n}\\n\\n```\\n\\n## Development Environment Setup\\n\\nCreate a `home.nix` file for comprehensive development environment configuration.  \\nHere\'s how my configuration looks like\\n\\n```nix\\n{ config, pkgs, ... }:\\n\\n{\\n  home = {\\n    username = \\"yourusername\\";\\n    homeDirectory = \\"/home/yourusername\\";\\n    stateVersion = \\"23.11\\";\\n\\n    packages = with pkgs; [\\n      # Development tools\\n      git\\n      neovim\\n      wezterm\\n      starship\\n      curl\\n      tmux\\n      rofi\\n      dunst\\n      feh\\n\\n      tmux\\n      \\n      # Language-specific tools\\n      python3\\n      rustup\\n      nodejs\\n      rust-analyzer\\n      \\n      # Utility tools\\n      ripgrep\\n      fd\\n      npm\\n      yarn\\n      lazygit\\n      tree\\n      tree-sitter\\n    ];\\n  };\\n\\n  # Neovim configuration from GitHub\\n  programs.neovim = {\\n    enable = true;\\n    extraConfig = \'\'\\n      lua << EOF\\n      -- Load configuration from GitHub repo\\n      vim.cmd(\'source ~/.config/nvim/init.lua\')\\n      EOF\\n    \'\';\\n  };\\n\\n  # Starship prompt configuration\\n  programs.starship = {\\n    enable = true;\\n    settings = {\\n      add_newline = false;\\n      character = {\\n        success_symbol = \\"[\u279c](bold green)\\";\\n        error_symbol = \\"[\u279c](bold red)\\";\\n      };\\n    };\\n  };\\n\\n  # WezTerm configuration\\n  programs.wezterm = {\\n    enable = true;\\n    extraConfig = \'\'\\n      return {\\n        font = wezterm.font(\\"JetBrains Mono\\"),\\n        color_scheme = \\"Dracula\\",\\n      }\\n    \'\';\\n  };\\n\\n  # Tmux configuration\\n    programs.tmux = {\\n        enable = true;\\n        shell = \\"${pkgs.zsh}/bin/zsh\\";\\n        terminal = \\"screen-256color\\";\\n        plugins = with pkgs.tmuxPlugins; [\\n            resurrect\\n            continuum\\n            # Add your preferred tmux plugins\\n        ];\\n        extraConfig = \'\'\\n            source-file ${../dotfiles/tmux/tmux.conf}\\n        \'\';\\n        };\\n}\\n\\n```\\n\\n\\n## Managing Dotfiles with Nix\\nTo manage dotfiles, create a separate repository with your configuration files and reference them in your Nix configuration:\\n\\n```nix\\n{\\n  home.file = {\\n    \\".config/nvim\\" = {\\n      source = fetchFromGitHub {\\n        owner = \\"yourusername\\";\\n        repo = \\"nvim-config\\";\\n        rev = \\"main\\";  # Or specific commit\\n        sha256 = \\"xxx\\";\\n      };\\n      recursive = true;\\n    };\\n  };\\n}\\n```\\n\\n## Applying the Configuration\\n\\n```nix\\n# Initialize and update flakes\\nnix flake update\\n\\n# Apply the home-manager configuration\\nhome-manager switch --flake .#mydevenv\\n```\\n\\n## Benefits of this Approach\\n\\n- Reproducibility: Exact same environment across machines\\n- Declarative Configuration: Define your entire setup in code\\n- Easy Rollbacks: Simple to revert to previous configurations\\n- Isolated Environments: No dependency conflicts\\n\\n## My Nix Configuration \\n\\n```markdown\\nnix-config/\\n\u2502\\n\u251c\u2500\u2500 flake.nix           # Main Nix flake configuration\\n\u251c\u2500\u2500 flake.lock          # Locked dependencies\\n\u2502\\n\u251c\u2500\u2500 home.nix            # Home Manager configuration\\n\u2502\\n\u251c\u2500\u2500 hosts/              # Machine-specific configurations\\n\u2502   \u251c\u2500\u2500 macbook/\\n\u2502   \u2502   \u2514\u2500\u2500 default.nix\\n\u2502   \u2514\u2500\u2500 workstation/\\n\u2502       \u2514\u2500\u2500 default.nix\\n\u2502\\n\u251c\u2500\u2500 modules/            # Reusable configuration modules\\n\u2502   \u251c\u2500\u2500 neovim/\\n\u2502   \u2502   \u251c\u2500\u2500 default.nix\\n\u2502   \u2502   \u2514\u2500\u2500 plugins.nix\\n\u2502   \u251c\u2500\u2500 starship.nix\\n\u2502   \u251c\u2500\u2500 wezterm.nix\\n\u2502   \u2514\u2500\u2500 git.nix\\n\u2502   \u251c\u2500\u2500 tmux/\\n\u2502   \u2502   \u251c\u2500\u2500 default.nix\\n\u2502   \u2502   \u2514\u2500\u2500 tmp.nix\\n\u2502   \u251c\u2500\u2500 i3/\\n\u2502   \u2502   \u2514\u2500\u2500 default.nix\\n\u2502   \\n\u2502   \\n\u251c\u2500\u2500 dotfiles/           # Actual dotfile configurations\\n\u2502   \u251c\u2500\u2500 nvim/\\n\u2502   \u2502   \u251c\u2500\u2500 init.lua\\n\u2502   \u2502   \u2514\u2500\u2500 lua/\\n\u2502   \u251c\u2500\u2500 starship.toml\\n\u2502   \u2514\u2500\u2500 wezterm.lua\\n\u2502   \u251c\u2500\u2500 tmux/\\n\u2502   \u2502   \u251c\u2500\u2500 tmux.conf   # Main tmux configuration\\n\u2502   \u2502   \u2514\u2500\u2500 plugins/   \\n\u2502   \u2502       \u251c\u2500\u2500 tpm/    # Tmux Plugin Manager (TPM) plugins\\n\u2502   \u2502       \u2514\u2500\u2500 other-plugins/\\n\u2502   \u251c\u2500\u2500 i3/\\n\u2502   \u2502   \u251c\u2500\u2500 config\\n\u2502   \\n\u2514\u2500\u2500 scripts/            # Utility scripts\\n    \u251c\u2500\u2500 setup.sh\\n    \u2514\u2500\u2500 update.sh\\n    \u2514\u2500\u2500 tmux-setup.sh  # Optional setup script for tmux\\n```\\n\\n## Troubleshooting\\n\\n- Ensure Nix daemon is running\\n- Check `~/.config/nixpkgs/config.nix` for global configurations\\n- Use nix-shell for temporary environments\\n\\n## Conclusion\\nNix provides a powerful, reproducible way to manage your development environment. By leveraging Nix flakes and home-manager, you can create consistent, version-controlled setups across multiple machines. If you want to know more about the nix functional package manager. Check out my quick guide [here](http://quibitai.in/notes/)\\n\\n## Additional Resources\\n\\n- Nix Official Documentation\\n- Home Manager GitHub\\n- Nix Flakes Guide\\n- [Nix Functional Package](http://quibitai.in/notes/)"},{"id":"welcome","metadata":{"permalink":"/notes/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Welcome to my blog site which is hosted on QuBiTAi using Docusaurus.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/notes/blog/tags/hello","description":"Hello tag description"}],"readingTime":0.06,"hasTruncateMarker":false,"authors":[{"name":"rakesh","title":"Sr. Engineering Manager","url":"https://qubitai.in","page":{"permalink":"/notes/blog/authors/rakesh"},"socials":{"w":"https://qubitai.in","github":"https://github.com/rvbug"},"imageURL":"https://avatars.githubusercontent.com/u/10928536?v=4","key":"rakesh"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["rakesh"],"tags":["hello"]},"unlisted":false,"prevItem":{"title":"Nix Pkg Manager","permalink":"/notes/blog/Nix"},"nextItem":{"title":"Introduction to Docusaurus","permalink":"/notes/blog/Intro to Docusaurus"}},"content":"Welcome to my blog site which is hosted on [QuBiTAi](https://qubitai.in) using Docusaurus."},{"id":"Intro to Docusaurus","metadata":{"permalink":"/notes/blog/Intro to Docusaurus","source":"@site/blog/2021-01-01-Docusarus.md","title":"Introduction to Docusaurus","description":"Docusaurus is an open-source static site generator specifically designed for creating documentation websites. Developed by Facebook (Meta), it provides a powerful and intuitive platform for building, deploying, and maintaining documentation sites with ease.","date":"2021-01-01T00:00:00.000Z","tags":[{"inline":true,"label":"docusaurus","permalink":"/notes/blog/tags/docusaurus"}],"readingTime":2.295,"hasTruncateMarker":true,"authors":[{"name":"rakesh","title":"Sr. Engineering Manager","url":"https://qubitai.in","page":{"permalink":"/notes/blog/authors/rakesh"},"socials":{"w":"https://qubitai.in","github":"https://github.com/rvbug"},"imageURL":"https://avatars.githubusercontent.com/u/10928536?v=4","key":"rakesh"}],"frontMatter":{"slug":"Intro to Docusaurus","title":"Introduction to Docusaurus","authors":["rakesh"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/notes/blog/welcome"}},"content":"# Introduction\\n\\nDocusaurus is an open-source static site generator specifically designed for creating documentation websites. Developed by Facebook (Meta), it provides a powerful and intuitive platform for building, deploying, and maintaining documentation sites with ease.\\n\\n\x3c!-- truncate --\x3e\\n\\n# What is Docusaurus?\\nDocusaurus is a modern static website generator that helps developers and teams create, build, and publish documentation websites quickly and efficiently. It leverages React and provides a clean, customizable interface with built-in features that make documentation management seamless.\\n\\n# Key Features and Advantages\\n### Easy Setup and Configuration\\n\\n- Quick initialization with minimal configuration\\n- Built-in best practices for documentation sites\\n- Supports both single and multi-version documentation\\n\\n### Powerful Customization\\n\\n- Fully customizable React-based themes\\n- Support for custom layouts and components\\n- Flexible styling options\\n\\n### Developer-Friendly Features\\n\\n- Markdown support with enhanced features\\n-  Built-in search functionality\\n- Internationalization (i18n) support\\n- Versioning for documentation\\n\\n### Performance and SEO\\n- Static site generation for fast loading\\n- Optimized for search engines\\n- Responsive design out of the box\\n\\n# Getting Started with Docusaurus\\n## Installation\\nYou can create a new Docusaurus project using either `yarn` or `npm`:\\n\\n### Using Yarn\\n\\n```bash\\nyarn create docusaurus my-website classic\\n```\\n\\n### Using npm\\n```bash\\nnpx create-docusaurus@latest my-website classic\\n```\\n\\n\\n### project Structure\\n```markdown\\nmy-website/\\n\u2502\\n\u251c\u2500\u2500 docs/                  # Markdown documentation files\\n\u251c\u2500\u2500 blog/                  # Blog posts\\n\u251c\u2500\u2500 src/                   # Custom React components\\n\u2502   \u251c\u2500\u2500 components/\\n\u2502   \u2514\u2500\u2500 pages/\\n\u251c\u2500\u2500 static/                # Static assets\\n\u251c\u2500\u2500 docusaurus.config.js   # Configuration file\\n\u251c\u2500\u2500 sidebars.js            # Sidebar configuration\\n\u2514\u2500\u2500 package.json           # Project dependencies\\n\\n```\\n\\n\\n\\n### Confguration\\n\\nThe primary configuration file is `docusaurus.config.js`. Here\'s a basic example:\\n\\n```js\\nmodule.exports = {\\n  title: \'My Documentation Site\',\\n  tagline: \'Awesome Documentation\',\\n  url: \'https://your-website.com\',\\n  baseUrl: \'/\',\\n  theme: \'@docusaurus/theme-classic\',\\n  presets: [\\n    [\\n      \'@docusaurus/preset-classic\',\\n      {\\n        docs: {\\n          sidebarPath: require.resolve(\'./sidebars.js\'),\\n        },\\n        blog: {\\n          showReadingTime: true,\\n        },\\n        theme: {\\n          customCss: require.resolve(\'./src/css/custom.css\'),\\n        },\\n      },\\n    ],\\n  ],\\n};\\n```\\n\\n### Bulding the site\\n\\nStart the local development server\\n```bash\\nyarn start\\n# or\\nnpm run start\\n```\\n\\n### Publishing the site\\n\\nDocusaurus provides built-in support for GitHub Pages:\\n\\n```bash\\nGIT_USER=<GITHUB_USERNAME> yarn deploy\\n# or\\nUSE_SSH=true yarn deploy\\n```\\n\\n# Best Practices\\n\\n1. Keep documentation organized\\n2. Use clear, concise language\\n3. Implement versioning for stable releases\\n4. Utilize built-in search and navigation features\\n5. Regularly update and maintain documentation\\n\\n\\n# Markdown\\n```markdown\\n---\\nid: getting-started\\ntitle: Getting Started\\nsidebar_label: Introduction\\n---\\n\\n# Welcome to Our Documentation\\n\\nThis is a sample documentation page with some information.\\n\\n## Key Concepts\\n\\n- Simple markdown writing\\n- Easy configuration\\n- Powerful features\\n```\\n\\n# Conclusion\\nDocusaurus provides a modern, efficient solution for creating and maintaining documentation websites. Its combination of ease of use, powerful features, and flexibility makes it an excellent choice for projects of all sizes."}]}}')}}]);