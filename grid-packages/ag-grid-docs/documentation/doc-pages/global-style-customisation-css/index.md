---
title: "Using CSS"
---

This page contains information for troubleshooting and advanced use of CSS

As described in [Customising Global Styles](/global-style-customisation/), you can set CSS variables and write CSS rules that target the grid's CSS class names:

```css
.ag-theme-quartz {
    --ag-background-color: #ddd;
}
.ag-theme-quartz .ag-header-cell-label {
    font-style: italic;
}
```

### Setting CSS Variables

CSS variables should be set using a CSS selector that targets the theme class.

Themes define their own default values for many variables. So that your values override the defaults, ensure that:

1. You use a CSS selector that targets the theme class, rather than for example setting the variables on `body`.
2. Your CSS is loaded after the theme CSS - it should be further down in the same CSS file, or loaded using a `<link>` element further down in the page's HTML.

### Using your app's existing CSS Variables

If your app already defines a colour scheme using CSS variables and you want to use those existing variable names rather than the `--ag-{variable-name}`
provided by the grid, you can do this by passing a CSS `var()` value to a CSS variable. For example, if your application defines a CSS variable `--appMainTextColor` and you want to set the `--ag-foreground-color` variable at runtime using this variable, you can do so like this:


```css
.ag-theme-quartz {
    --ag-foreground-color: var(--appMainTextColor);
}
```

This will cause the text in grid cells to be set at runtime to the value of the `--myDataColorVar`.

### Variable Cascading

A variable cascade is when one variable defaults to another, which may itself default to a different variable. In this way we can have very general purpose variables like `--ag-grid-size` which changes the compactness of the grid, and more specific variables like `--ag-cell-horizontal-padding` which is defined as a multiple of the grid size. Altering `--ag-grid-size` affects the size and padding in hundreds of places throughout our provided themes.

This is implemented by setting default values for variables that reference other variables. Here are the default values for a few variables:

```scss
// cascades for colours
--ag-foreground-color: #000;
--ag-data-color: var(--ag-foreground-color);

// cascades for sizes can perform calculations
--ag-grid-size: 4px;
--ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 3);
--ag-header-height: var(--ag-row-height);

// blending cascades for colours (Quartz theme only)
--ag-selected-row-background-color:
    color-mix(in srgb, transparent, var(--ag-active-color) 8%);
```

If you provide a value for `--ag-grid-size` of "10px" then `--ag-cell-horizontal-padding` will default to "30px" and `--ag-header-height` to "10px". However it is still possible to override these defaults with your own values.

Likewise, if you provide a value for `--ag-active-color` of red "rgb(255,0,0)" then --ag-selected-row-background-color will default to an 8% semi-transparent red "rgba(255,0,0,0.08)".

<note>
Colour Blending on CSS variables is currently only implemented in the Quartz theme. Other themes need to specify their own colours for each variable, or use the Sass Styling API which implements [Colour Blending](../global-style-customisation-sass/#colour-blending) for all themes.
</note>

## Customising Themes using CSS Rules

Some design effects can't be achieved through CSS variables alone. For example, there is no variable to set the `font-style` on header cells. If you want your column headers to be italic, use regular CSS.

It is important to include the name of the theme in the rule. Without the theme name, your styles will not override the theme's built-in styles due to CSS selector specificity rules:

```css
.ag-theme-quartz .ag-header-cell-label {
    font-style: italic;
}
```

The best way to find the right class name to use in a CSS rule is using the browser's developer tools. You will notice that components often have multiple class names, some more general than others. For example, the [row grouping panel](/tool-panel-columns/#example) is a component onto which you can drag columns to group them. The internal name for this is the "column drop" component, and there are two kinds - a horizontal one at the top of the header and a vertical one in the columns tool panel. You can use the class name `ag-column-drop` to target either kind, or `ag-column-drop-vertical` / `ag-column-drop-horizontal` to target one only.

### Referencing Variable Values in CSS Rules

You can reference CSS variables in your own CSS rules:

```css
.ag-theme-quartz .ag-header-cell-label {
    /* invert colours in header cells */
    background-color: var(--ag-foreground-color);
    foreground-color: var(--ag-background-color);
}
```

You can use `calc()` expressions to perform real-time calculations on size values:

```css
.ag-theme-quartz .ag-header-cell-label {
    padding-left: calc(var(--ag-grid-size) * 2)
}
```

### Understanding CSS rule maintenance and breaking changes

With each release of the grid we add features and improve existing ones, and as a result the DOM structure changes with every release - even minor releases. Of course we test and update the CSS rules in our themes to make sure they still work, and this includes ensuring that customisations made via CSS variables does not break between releases. But if you have written your own CSS rules, you will need to test and update them.

The simpler your CSS rules are, the less likely they are to break between releases. Prefer selectors that target a single class name where possible.

### Avoiding Breaking the Grid with CSS Rules

Browsers use the same mechanism - CSS - for controlling how elements work (e.g. scrolling and whether they respond to mouse events), where elements appear, and how elements look. Our "structural stylesheet" (ag-grid.scss) sets CSS rules that control how the grid works, and the code depends on those rules not being overridden. There is nothing that we can do to prevent themes overriding critical rules, so as a theme author you need to be careful not to break the grid. Here's a guide:

- Visual styles including margins, paddings, sizes, colours, fonts, borders etc are all fine to change in a theme.

- Setting a component to `display: flex` and changing flex child layout properties like `align-items`, `align-self` and `flex-direction` is probably OK if you're trying to change how something looks on a small scale, e.g. to change the alignment of some text or icons within a container; but if you're trying to change the layout of the grid on a larger scale e.g. turning a vertical scrolling list into a horizontal one, you are likely to break Grid features.

- The style properties `position`, `overflow` and `pointer-events` are intrinsic to how the grid works. Changing these values will change how the grid operates, and may break functionality now or in future minor releases.