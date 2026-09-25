---
title: 'ascii-ui.nvim'
description: 'Neovim plugin UIs as components, not buffer juggling — state, diffing, and input via a fiber reconciler. Hooks, layout primitives, live reload, zero dependencies.'
importance: 3
category: 'open-source'
github: 'https://github.com/ascii-ui/ascii-ui.nvim'
tech: ['Lua', 'Neovim']
---

A declarative UI framework for Neovim plugins: describe the interface as functional components and let a fiber-based reconciler handle diffing, state updates, and re-renders.

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
  "ascii-ui/ascii-ui.nvim",
  config = function()
    require("ascii-ui").setup({
      -- Configuration options
    })
  end,
}
```

## Usage

Use the provided UI components to build custom interfaces in your Neovim plugins. The plugin offers a simple API for creating dialogs, menus, and other interactive elements.
