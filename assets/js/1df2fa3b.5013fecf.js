"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[836],{1478:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var o=i(6764),t=i(4848),s=i(8453);const r={slug:"Nix",title:"Nix Pkg Manager",authors:["rakesh"],tags:["nix"]},a="Introduction",l={authorsImageUrls:[void 0]},c=[{value:"MacOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2},{value:"Post Installation",id:"post-installation",level:2},{value:"Nix Flakes",id:"nix-flakes",level:2},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Managing Dotfiles with Nix",id:"managing-dotfiles-with-nix",level:2},{value:"Applying the Configuration",id:"applying-the-configuration",level:2},{value:"Benefits of this Approach",id:"benefits-of-this-approach",level:2},{value:"My Nix Configuration",id:"my-nix-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Nix is a powerful, purely functional package manager that provides a unique approach to software deployment and system configuration. Unlike traditional package managers, Nix focuses on:"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Reproducibility"}),"\n",(0,t.jsx)(e.li,{children:"Atomic upgrades and rollbacks"}),"\n",(0,t.jsx)(e.li,{children:"Consistent development environments"}),"\n",(0,t.jsx)(e.li,{children:"Cross-platform compatibility"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(e.h2,{id:"macos",children:"MacOS"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Install Nix using the official installer\nsh <(curl -L https://nixos.org/nix/install)\n\n# For Apple Silicon (M1/M2) machines, use:\nsh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store\n"})}),"\n",(0,t.jsx)(e.h2,{id:"linux",children:"Linux"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# For most Linux distributions\ncurl -L https://nixos.org/nix/install | sh\n\n# Multi-user installation (recommended)\ncurl -L https://nixos.org/nix/install | sh -s -- --daemon\n"})}),"\n",(0,t.jsx)(e.h2,{id:"post-installation",children:"Post Installation"}),"\n",(0,t.jsx)(e.p,{children:"Source the Nix profile. I prefer using zshrc."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Add to your shell configuration (.zshrc, .bashrc)\nsource ~/.nix-profile/etc/profile.d/nix.sh\n"})}),"\n",(0,t.jsx)(e.h2,{id:"nix-flakes",children:"Nix Flakes"}),"\n",(0,t.jsxs)(e.p,{children:["Flakes are a new feature in Nix that provide better reproducibility and composability. Create a ",(0,t.jsx)(e.code,{children:"flake.nix"})," file in your project:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nix",children:'{\n  description = "My Dev Environment";\n\n  inputs = {\n    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";\n    home-manager = {\n      url = "github:nix-community/home-manager";\n      inputs.nixpkgs.follows = "nixpkgs";\n    };\n\n    # Add inputs for your dotfile repositories\n    nvim-config = {\n      url = "github:yourusername/nvim-config";\n      flake = false;  # Just fetch the source\n    };\n\n    tmux-config = {\n      url = "github:yourusername/tmux-config";\n      flake = false;\n    };\n\n    i3-config = {\n      url = "github:yourusername/i3-config";\n      flake = false;\n    };\n\n  };\n\n  outputs = { self, nixpkgs, home-manager, nvim-config, tmux-config, i3-config }:\n    let\n      # This needs to be adjusted based on your system\n      system = "x86_64-linux";  \n      pkgs = nixpkgs.legacyPackages.${system};\n    in {\n      homeConfigurations.mydevenv = home-manager.lib.homeManagerConfiguration {\n        inherit pkgs;\n        modules = [ \n          ./home.nix \n          {\n            # Pass the inputs to home-manager configuration\n            home.file = {\n              ".config/nvim".source = nvim-config;\n              ".config/tmux".source = tmux-config;\n              ".config/i3".source = i3-config;\n            };\n          }\n        ];\n      };\n    };\n}\n\n'})}),"\n",(0,t.jsx)(e.h2,{id:"development-environment-setup",children:"Development Environment Setup"}),"\n",(0,t.jsxs)(e.p,{children:["Create a ",(0,t.jsx)(e.code,{children:"home.nix"})," file for comprehensive development environment configuration.",(0,t.jsx)(e.br,{}),"\n","Here's how my configuration looks like"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nix",children:'{ config, pkgs, ... }:\n\n{\n  home = {\n    username = "yourusername";\n    homeDirectory = "/home/yourusername";\n    stateVersion = "23.11";\n\n    packages = with pkgs; [\n      # Development tools\n      git\n      neovim\n      wezterm\n      starship\n      curl\n      tmux\n      rofi\n      dunst\n      feh\n\n      tmux\n      \n      # Language-specific tools\n      python3\n      rustup\n      nodejs\n      rust-analyzer\n      \n      # Utility tools\n      ripgrep\n      fd\n      npm\n      yarn\n      lazygit\n      tree\n      tree-sitter\n    ];\n  };\n\n  # Neovim configuration from GitHub\n  programs.neovim = {\n    enable = true;\n    extraConfig = \'\'\n      lua << EOF\n      -- Load configuration from GitHub repo\n      vim.cmd(\'source ~/.config/nvim/init.lua\')\n      EOF\n    \'\';\n  };\n\n  # Starship prompt configuration\n  programs.starship = {\n    enable = true;\n    settings = {\n      add_newline = false;\n      character = {\n        success_symbol = "[\u279c](bold green)";\n        error_symbol = "[\u279c](bold red)";\n      };\n    };\n  };\n\n  # WezTerm configuration\n  programs.wezterm = {\n    enable = true;\n    extraConfig = \'\'\n      return {\n        font = wezterm.font("JetBrains Mono"),\n        color_scheme = "Dracula",\n      }\n    \'\';\n  };\n\n  # Tmux configuration\n    programs.tmux = {\n        enable = true;\n        shell = "${pkgs.zsh}/bin/zsh";\n        terminal = "screen-256color";\n        plugins = with pkgs.tmuxPlugins; [\n            resurrect\n            continuum\n            # Add your preferred tmux plugins\n        ];\n        extraConfig = \'\'\n            source-file ${../dotfiles/tmux/tmux.conf}\n        \'\';\n        };\n}\n\n'})}),"\n",(0,t.jsx)(e.h2,{id:"managing-dotfiles-with-nix",children:"Managing Dotfiles with Nix"}),"\n",(0,t.jsx)(e.p,{children:"To manage dotfiles, create a separate repository with your configuration files and reference them in your Nix configuration:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nix",children:'{\n  home.file = {\n    ".config/nvim" = {\n      source = fetchFromGitHub {\n        owner = "yourusername";\n        repo = "nvim-config";\n        rev = "main";  # Or specific commit\n        sha256 = "xxx";\n      };\n      recursive = true;\n    };\n  };\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"applying-the-configuration",children:"Applying the Configuration"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nix",children:"# Initialize and update flakes\nnix flake update\n\n# Apply the home-manager configuration\nhome-manager switch --flake .#mydevenv\n"})}),"\n",(0,t.jsx)(e.h2,{id:"benefits-of-this-approach",children:"Benefits of this Approach"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Reproducibility: Exact same environment across machines"}),"\n",(0,t.jsx)(e.li,{children:"Declarative Configuration: Define your entire setup in code"}),"\n",(0,t.jsx)(e.li,{children:"Easy Rollbacks: Simple to revert to previous configurations"}),"\n",(0,t.jsx)(e.li,{children:"Isolated Environments: No dependency conflicts"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"my-nix-configuration",children:"My Nix Configuration"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markdown",children:"nix-config/\n\u2502\n\u251c\u2500\u2500 flake.nix           # Main Nix flake configuration\n\u251c\u2500\u2500 flake.lock          # Locked dependencies\n\u2502\n\u251c\u2500\u2500 home.nix            # Home Manager configuration\n\u2502\n\u251c\u2500\u2500 hosts/              # Machine-specific configurations\n\u2502   \u251c\u2500\u2500 macbook/\n\u2502   \u2502   \u2514\u2500\u2500 default.nix\n\u2502   \u2514\u2500\u2500 workstation/\n\u2502       \u2514\u2500\u2500 default.nix\n\u2502\n\u251c\u2500\u2500 modules/            # Reusable configuration modules\n\u2502   \u251c\u2500\u2500 neovim/\n\u2502   \u2502   \u251c\u2500\u2500 default.nix\n\u2502   \u2502   \u2514\u2500\u2500 plugins.nix\n\u2502   \u251c\u2500\u2500 starship.nix\n\u2502   \u251c\u2500\u2500 wezterm.nix\n\u2502   \u2514\u2500\u2500 git.nix\n\u2502   \u251c\u2500\u2500 tmux/\n\u2502   \u2502   \u251c\u2500\u2500 default.nix\n\u2502   \u2502   \u2514\u2500\u2500 tmp.nix\n\u2502   \u251c\u2500\u2500 i3/\n\u2502   \u2502   \u2514\u2500\u2500 default.nix\n\u2502   \n\u2502   \n\u251c\u2500\u2500 dotfiles/           # Actual dotfile configurations\n\u2502   \u251c\u2500\u2500 nvim/\n\u2502   \u2502   \u251c\u2500\u2500 init.lua\n\u2502   \u2502   \u2514\u2500\u2500 lua/\n\u2502   \u251c\u2500\u2500 starship.toml\n\u2502   \u2514\u2500\u2500 wezterm.lua\n\u2502   \u251c\u2500\u2500 tmux/\n\u2502   \u2502   \u251c\u2500\u2500 tmux.conf   # Main tmux configuration\n\u2502   \u2502   \u2514\u2500\u2500 plugins/   \n\u2502   \u2502       \u251c\u2500\u2500 tpm/    # Tmux Plugin Manager (TPM) plugins\n\u2502   \u2502       \u2514\u2500\u2500 other-plugins/\n\u2502   \u251c\u2500\u2500 i3/\n\u2502   \u2502   \u251c\u2500\u2500 config\n\u2502   \n\u2514\u2500\u2500 scripts/            # Utility scripts\n    \u251c\u2500\u2500 setup.sh\n    \u2514\u2500\u2500 update.sh\n    \u2514\u2500\u2500 tmux-setup.sh  # Optional setup script for tmux\n"})}),"\n",(0,t.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ensure Nix daemon is running"}),"\n",(0,t.jsxs)(e.li,{children:["Check ",(0,t.jsx)(e.code,{children:"~/.config/nixpkgs/config.nix"})," for global configurations"]}),"\n",(0,t.jsx)(e.li,{children:"Use nix-shell for temporary environments"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(e.p,{children:["Nix provides a powerful, reproducible way to manage your development environment. By leveraging Nix flakes and home-manager, you can create consistent, version-controlled setups across multiple machines. If you want to know more about the nix functional package manager. Check out my quick guide ",(0,t.jsx)(e.a,{href:"http://quibitai.in/notes/",children:"here"})]}),"\n",(0,t.jsx)(e.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Nix Official Documentation"}),"\n",(0,t.jsx)(e.li,{children:"Home Manager GitHub"}),"\n",(0,t.jsx)(e.li,{children:"Nix Flakes Guide"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"http://quibitai.in/notes/",children:"Nix Functional Package"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var o=i(6540);const t={},s=o.createContext(t);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(s.Provider,{value:e},n.children)}},6764:n=>{n.exports=JSON.parse('{"permalink":"/notes/blog/Nix","source":"@site/blog/2023-03-05-nix/index.md","title":"Nix Pkg Manager","description":"Nix is a powerful, purely functional package manager that provides a unique approach to software deployment and system configuration. Unlike traditional package managers, Nix focuses on:","date":"2023-03-05T00:00:00.000Z","tags":[{"inline":false,"label":"nix","permalink":"/notes/blog/tags/nix","description":"Nix OS and Functional Package Manager"}],"readingTime":4.205,"hasTruncateMarker":false,"authors":[{"name":"rakesh","title":"Sr. Engineering Manager","url":"https://qubitai.in","page":{"permalink":"/notes/blog/authors/rakesh"},"socials":{"w":"https://qubitai.in","github":"https://github.com/rvbug"},"imageURL":"https://avatars.githubusercontent.com/u/10928536?v=4","key":"rakesh"}],"frontMatter":{"slug":"Nix","title":"Nix Pkg Manager","authors":["rakesh"],"tags":["nix"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/notes/blog/welcome"}}')}}]);