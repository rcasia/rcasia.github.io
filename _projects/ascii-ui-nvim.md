---
layout: page
title: ascii-ui.nvim
description: ASCII-based UI components for Neovim
img:
importance: 3
category: open-source
github: https://github.com/rcasia/ascii-ui.nvim
---

A Neovim plugin that provides ASCII-based UI components for creating beautiful and functional interfaces within Neovim. This plugin offers a collection of reusable UI elements built with ASCII characters, perfect for building custom Neovim plugins and interfaces.

## Features

- ASCII-based UI components
- Reusable and customizable elements
- Lightweight and performant
- Easy to integrate into existing plugins
- Supports various UI patterns (dialogs, menus, forms, etc.)

## Installation

Install using your favorite Neovim package manager:

```lua
-- Using lazy.nvim
{
  "rcasia/ascii-ui.nvim",
  config = function()
    require("ascii-ui").setup({
      -- Configuration options
    })
  end,
}
```

## Usage

Use the provided UI components to build custom interfaces in your Neovim plugins. The plugin offers a simple API for creating dialogs, menus, and other interactive elements.
