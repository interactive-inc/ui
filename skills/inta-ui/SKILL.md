---
name: inta-ui
description: Build React UI with interactive-inc/ui (shadcn registry @inta, powered by UI SDK). Covers choosing components, coding rules and agent support.
---

# inta-ui

Build screens with interactive-inc/ui components. Read https://ui.inta.site/llms.txt first, then https://ui.inta.site/components/<name>.md for each component you use.

## Install

- Add `"@inta": "https://ui.inta.site/r/{name}.json"` to registries in components.json
- Put `@layer ui-sdk;` at the top of your CSS, before the tailwind import
- Add components with `vp dlx shadcn@latest add @inta/<name>`, or all of them with `vp dlx shadcn@latest add @inta/all`

## How to write code with this library

- Add a component with `vp dlx shadcn@latest add @inta/<name>` and import it from `@/components/ui/<name>`
- Behavior comes from UI SDK (@ui-sdk/react). Components own keyboard handling, focus and ARIA, so do not write your own roles, aria attributes or key handlers
- Replace the rendered element with `render` (for example `render={<a href="/" />}`). There is no `asChild`
- `className` is a string or a function of the component state. Style states with data attributes (`data-checked`, `data-disabled`, `data-open`, `data-highlighted`, `data-invalid` and so on)
- Put `@layer ui-sdk;` at the top of your CSS, before the tailwind import
- Popups render in the top layer, so no Portal is needed. Right-to-left languages work without a provider
- Receive changes through callbacks such as `onValueChange`, `onCheckedChange` and `onOpenChange`. Do not keep state in `onClick` or `onKeyDown`
- Wrap form inputs in `Field` and `FieldLabel` so every input has a name
- Do not place bare `<button>`, `<input>` or `<select>` elements. Use Button, Input, Select and the like (agents cannot operate bare elements)

## Letting agents operate the UI

- Create a bridge with `import { createAgent, registerTools } from "@ui-sdk/react/agent"` and agents can find and operate components by name. It can also register with WebMCP
- Give every interactive component a name that is unique on the page (FieldLabel, aria-label or the button text)
- Add `data-agent-confirm="what will happen"` to actions that need a human to confirm, such as delete, send or pay. In a confirm dialog, put it on the confirm button
- Add `data-agent-secret` to inputs whose value agents must not read, and `data-agent-hidden` to regions agents must not see
- Details: https://ui-sdk.dev/docs/react/agents

## When a component is missing

Do not hand-write markup for components that are not listed here. Build them with UI SDK core (`definePrimitive` and behaviors): https://ui-sdk.dev/docs/core/llms.txt

## Layout guidelines

How the screen is divided and what goes where: regions, their roles, the shape of a row, page structure and spacing.

### Three regions

- The screen has three regions. The header sits at the very top and spans the full width. The sidebar and the page sit below it, side by side.
- The header and the sidebar share one surface and form the chrome. The page is a darker surface that sits on the chrome. When scrolling, only the page moves; the chrome stays.
- On mobile the sidebar is hidden and opened from a button at the left end of the header. The roles of the regions do not change.
- To implement it, put the header, Sidebar (variant inset) and SidebarInset inside SidebarProvider. Pass the header height as --header-height and the Sidebar starts below it. Make the header translucent with backdrop-blur over the page scrolling beneath.

### What each region holds

- Things that concern the whole service go in the header: the service title and settings used on every page, such as the theme switch.
- Things for moving between pages go in the sidebar. Do not put the title or settings in the sidebar.
- Everything that concerns only the current page goes inside the page. Never lift page actions into the header.

### Two ends of a row

- The header, the page heading and a section heading are all the same kind of row: the name at the left end and the actions pushed to the opposite right end, with the space between left empty.
- This way names are found along the left line and actions along the right line, on every screen.
- Only actions go at the right end. Supplementary items such as categories and external links are not actions; make them Badges below the name.
- Write the header title as the logo followed by a path (logo / service / app). The logo is a plain image link and the path is text links, not buttons.

### Page structure

- A page is a heading followed by stacked sections. The heading holds an h1 title and a one or two sentence description; below it, stack one section per meaningful block.
- Wrap each section in a Card with an h2 in CardTitle. Put an action at the head of the scope it affects: the page heading for the whole page, CardAction for one section. Actions that conclude a section, such as form submit, go at the right end of CardFooter.
- Use a single primary Button for the main action and secondary for the rest.
- For a list of same-shaped items, do not wrap the whole list in one Card: put the heading outside and give each item its own Card. Never nest Cards; divide the inside with Separator or the subtle surface.

### Gutter and spacing

- Keep a 24px (p-6) gutter from the screen edges. The header's left and right ends, the text of sidebar items and the page content all sit on the same lines. Do not stack paddings: an item's inner padding counts toward the 24px. Use 16px (p-4) on mobile.
- Use three spacing steps: 32px (gap-8) between sections, 16px (gap-4) inside a section and 8px (gap-2) between inline controls.
- Pages use the full width and the heading row reaches the right edge; cap only long prose. Leave padding and radius to the components and do not add extra borders or backgrounds around them.

## Color guidelines

Colors are specified with role-based design tokens. Their order of darkness is fixed so surfaces and selection never collide.

| Tokens | Role | Light | Dark |
| --- | --- | --- | --- |
| sidebar | Chrome: header and sidebar | oklch(0.985 0 0) | oklch(0.205 0 0) |
| page | Page ground: the surface cards sit on | oklch(0.94 0 0) | oklch(0.175 0 0) |
| card, popover | Surface: cards and popups | oklch(1 0 0) | oklch(0.205 0 0) |
| muted | Subtle surface: insets and previews inside a surface | oklch(0.97 0 0) | oklch(0.269 0 0) |
| secondary, sidebar-accent | Secondary actions and selected items | oklch(0.9 0 0) | oklch(0.269 0 0) |
| accent | Hover and highlight on a surface | oklch(0.97 0 0) | oklch(0.269 0 0) |
| primary | Primary actions and the selected toggle | oklch(0.205 0 0) | oklch(0.922 0 0) |
| foreground | Text | oklch(0.145 0 0) | oklch(0.985 0 0) |
| muted-foreground | Quiet text: captions and dates | oklch(0.556 0 0) | oklch(0.708 0 0) |
| border | Lines: dividers and input outlines | oklch(0.922 0 0) | oklch(1 0 0 / 10%) |

### Layered surfaces

- A screen is built by layering surfaces of different darkness. From the outside in: chrome, page ground, surface and subtle surface.
- Actions sit on top of the surfaces. The darker one is the primary action; the lighter one is a secondary action or a selected item.
- The sections below explain surfaces, layering order, actions, and lines and text one at a time.

### Four surfaces

- sidebar is the chrome surface formed by the header and the sidebar. It is the outermost surface.
- page is the page ground. It sits on the chrome and is where cards are placed.
- card is the surface that holds content, used for cards and popups. It is the lightest of the four.
- muted is a subtle surface for dividing the inside of a surface, used for previews and notes.

### Layering order

- The order is sidebar, page, card, then muted. The figure adds one surface at a time from left to right.
- Do not skip or swap the order. For example, do not put card directly on the chrome or page on top of card.
- Do not stack surfaces of the same color and rely on a border alone. Show the boundary with the difference in color.

### Action colors

- primary is for the most important action on a surface and for the selected toggle. Keep one primary per surface.
- secondary is for every other action and for selected items. It is clearly distinct from every surface, so it stays visible on all four.
- Never give page and secondary the same color; a selected item would merge with the page ground.
- Directly on the page ground (page heading: badges, action buttons), secondary controls take the card color: set --secondary: var(--card) on that region. Light theme only.
- Only destructive (irreversible actions) and charts carry hue. Do not add color for decoration.

### Lines and text

- foreground is the normal text color for headings, body and descriptions.
- muted-foreground is quiet text for short, skippable bits such as captions and dates. Never use it for prose meant to be read.
- border is the line color, used for dividers inside a surface and input outlines. Do not use it for the boundary between surfaces.

### Token list

- In components, write colors by token name: bg-card, bg-page, bg-secondary, text-muted-foreground and so on.
- Never write oklch or hex values, or Tailwind's gray-100 and the like, in components. A single color outside the tokens breaks the order of darkness between surfaces.

### Light and dark

- In dark mode each token keeps its role and only the values change, so components need no dark: color overrides.
- The only exception is code blocks, which stay dark regardless of the theme.

## Choosing components guidelines

Which component to use in common situations. See the use case and component pages for details.

### Laying out inputs

- Always wrap an input in Field. Field pairs a FieldLabel with its input, so people, screen readers and agents all know what the input is for.
- When there are several Fields, stack them vertically inside FieldGroup. Place Fields side by side only when two of them form one meaning, such as family name and given name.
- Show a validation error inside its Field with FieldError. Do not collect errors at the top of the form.

### Empty and waiting states

- When there is nothing to show yet, use Empty. Say in a few words why it is empty and offer one next action.
- While loading, use Skeleton. Trace the shape of the content to come so the layout does not jump when it arrives.
- For tasks that take more than a few seconds, use Progress so people can see how far it has gone. For short waits with no measurable progress, use Spinner.

### Overlays

- Use Dialog for a task that finishes on the spot and returns to the screen behind it, such as editing an item or checking details. The screen behind is dimmed and inert.
- Use Sheet for details you want to read next to a list. It slides in from the edge, so the list stays visible beside it.
- Use AlertDialog to confirm an irreversible action. Before deleting or sending, state what will happen. The confirm button is destructive.
- For a small note or setting there is no need to block the screen; use Popover, which appears in place.

### Showing code

- Put code, commands and config file contents in CodeBlock. Do not write long code inline in prose.
- CodeBlock is a dark, terminal-like surface in both light and dark themes. Add a copy button so the code can be pasted as is.

## Components by task

### Press

- [Button](https://ui.inta.site/components/button.md): Triggers an action such as save, submit, or delete. For a button that stays pressed, use Toggle.
- [Button Group](https://ui.inta.site/components/button-group.md): Visually joins related buttons or inputs into one unit. If arrow keys should move between them, use Toolbar.
- [Toggle](https://ui.inta.site/components/toggle.md): A button that stays on once pressed, for things like bold, pin, or favorite. To enable or disable a setting, use Switch.
- [Toolbar](https://ui.inta.site/components/toolbar.md): Groups buttons and toggles into a single tab stop and moves between them with arrow keys. Use it for bulk action bars on lists and formatting bars in editors.
- [Kbd](https://ui.inta.site/components/kbd.md): Displays the keys of a keyboard shortcut. Display only.

### Enter text

- [Input](https://ui.inta.site/components/input.md): A single-line text input, named with Field and FieldLabel. For multiple lines use Textarea; for numbers use Number Input.
- [Textarea](https://ui.inta.site/components/textarea.md): A multi-line text input for notes, comments, and body text.
- [Input Group](https://ui.inta.site/components/input-group.md): Adds icons, buttons, or units before or after an input. Use it for search fields and URL displays with a copy button.
- [Field](https://ui.inta.site/components/field.md): Binds a label, description, and error to an input component. Wrap every form input in a Field.
- [Label](https://ui.inta.site/components/label.md): The name of an input component. Normally use FieldLabel inside a Field instead.
- [Number Input](https://ui.inta.site/components/number-input.md): A numeric input whose value can be changed with step buttons and arrow keys. For currency, set step={0.01}.
- [Password Input](https://ui.inta.site/components/password-input.md): A password input with a show/hide toggle button. Agents cannot read its value.
- [Input OTP](https://ui.inta.site/components/input-otp.md): A one-time code input split into one box per digit.
- [Autocomplete](https://ui.inta.site/components/autocomplete.md): Suggests options while the user types freely, and also accepts values outside the suggestions. If the user must pick from the options, use Combobox.
- [Token Input](https://ui.inta.site/components/token-input.md): Lets users type text mixed with tokens such as people, files, or tags.
- [Trigger Menu](https://ui.inta.site/components/trigger-menu.md): Opens a menu when the user types @, /, or # in an input, and inserts a mention or command.

### Choose

- [Checkbox](https://ui.inta.site/components/checkbox.md): Turns independent items on or off one by one. Use it for multiple selection and consent; it also has an indeterminate state.
- [Radio Group](https://ui.inta.site/components/radio-group.md): Picks one option from a small set. Use it when all the options need to be visible at once.
- [Switch](https://ui.inta.site/components/switch.md): Enables or disables a setting immediately, for settings that take effect without waiting for a save button.
- [Select](https://ui.inta.site/components/select.md): Picks one or more items from a popup list. If the list is long enough to need search, use Combobox.
- [Native Select](https://ui.inta.site/components/native-select.md): The browser's built-in select. Choose it only when you want the native mobile picker; otherwise use Select.
- [Combobox](https://ui.inta.site/components/combobox.md): Filters a list by typing and picks one or more items. Selections can be shown as chips.
- [Listbox](https://ui.inta.site/components/listbox.md): Picks from a list that is always visible. Use it when a popup is not wanted.
- [Segmented Control](https://ui.inta.site/components/segmented-control.md): Picks one option from a few in a compact horizontal strip, such as for switching views.
- [Toggle Group](https://ui.inta.site/components/toggle-group.md): A set of toggle buttons where either one or several can be pressed.
- [Slider](https://ui.inta.site/components/slider.md): Chooses a number or range by dragging a thumb. If an exact value is required, use Number Input.
- [Rating](https://ui.inta.site/components/rating.md): Gives a score using stars or similar marks.
- [Color Picker](https://ui.inta.site/components/color-picker.md): Chooses a color, with hue, saturation, a color code field, and presets.
- [Preferences](https://ui.inta.site/components/preferences.md): A mechanism that saves and reads user setting values. Combine it with Switch or Select on screens such as notification settings.

### Dates and times

- [Calendar](https://ui.inta.site/components/calendar.md): Picks a date or range from a monthly grid. To combine it with an input field, use Date Picker.
- [Date Input](https://ui.inta.site/components/date-input.md): Types a date into separate year, month, and day fields, with no calendar.
- [Date Picker](https://ui.inta.site/components/date-picker.md): Combines a date input field with a calendar popup. It can also select a range.
- [Time Input](https://ui.inta.site/components/time-input.md): Types a time into separate hour and minute fields.

### Files and images

- [File Input](https://ui.inta.site/components/file-input.md): Selects, drops, or pastes files, with a file list and delete buttons.
- [Image Cropper](https://ui.inta.site/components/image-cropper.md): Crops an image, with zoom and rotation.
- [Attachment](https://ui.inta.site/components/attachment.md): Shows an attached file as a card with its name, type, and status.
- [Avatar](https://ui.inta.site/components/avatar.md): A person's image that shows initials when it cannot load. Give it a name with aria-label, or mark it aria-hidden if decorative.
- [Aspect Ratio](https://ui.inta.site/components/aspect-ratio.md): A box that keeps the aspect ratio of an image or video.

### Overlays

- [Dialog](https://ui.inta.site/components/dialog.md): Has the user do a single task on top of the page, such as filling in a form or checking details.
- [Alert Dialog](https://ui.inta.site/components/alert-dialog.md): Asks for confirmation before an irreversible action. Make the confirm button AlertDialogClose value="confirm" and add data-agent-confirm.
- [Sheet](https://ui.inta.site/components/sheet.md): A panel that slides in from the edge of the screen, used for detail views and filter conditions.
- [Drawer](https://ui.inta.site/components/drawer.md): A panel pulled in from the screen edge that can be dismissed by swiping. Best suited to mobile.
- [Popover](https://ui.inta.site/components/popover.md): Opens a small panel next to a button for quick editing or confirmation in place.
- [Hover Card](https://ui.inta.site/components/hover-card.md): Shows a content preview when the pointer rests on a link.
- [Tooltip](https://ui.inta.site/components/tooltip.md): Shows a short name or hint for things like icon buttons.
- [Command](https://ui.inta.site/components/command.md): A command palette that searches and runs actions. It works in a dialog or on its own.

### Menus

- [Dropdown Menu](https://ui.inta.site/components/dropdown-menu.md): Opens a list of actions from a button. Use it for per-row "more actions".
- [Context Menu](https://ui.inta.site/components/context-menu.md): Opens a list of actions on right-click or long press.
- [Menubar](https://ui.inta.site/components/menubar.md): The application menu bar at the top, lining up items such as File, Edit, and View.

### Navigate

- [Header](https://ui.inta.site/components/header.md): A full-width header at the top of the screen, with the logo and product path on the left and global settings at the right end.
- [Sidebar](https://ui.inta.site/components/sidebar.md): Navigation placed on the left of an app, with collapsing and mobile support.
- [Navigation Menu](https://ui.inta.site/components/navigation-menu.md): Site navigation where each item can open a panel of links.
- [Breadcrumb](https://ui.inta.site/components/breadcrumb.md): Shows the hierarchy down to the current location as links.
- [Tabs](https://ui.inta.site/components/tabs.md): Switches between panels in the same place.
- [Pagination](https://ui.inta.site/components/pagination.md): Moves through pages of results.

### Show content

- [Card](https://ui.inta.site/components/card.md): Puts a self-contained piece of content on a single surface, with header, body, and action sections.
- [Table](https://ui.inta.site/components/table.md): Presents row and column data as a table.
- [Item](https://ui.inta.site/components/item.md): A single row of a list with an icon, title, description, and actions. Use it for settings lists and people lists.
- [Tree](https://ui.inta.site/components/tree.md): Navigates a hierarchy by expanding and collapsing nodes, such as departments or folders.
- [Timeline](https://ui.inta.site/components/timeline.md): Lines up events in chronological order, for showing progress and history.
- [Waterfall](https://ui.inta.site/components/waterfall.md): Lays out segments along a time axis, for breaking down processing time or lead time.
- [Chart](https://ui.inta.site/components/chart.md): Adds theme colors, a legend, and tooltips to recharts graphs.
- [Accordion](https://ui.inta.site/components/accordion.md): Expands and collapses multiple sections, as for FAQs. If there is only one section, use Collapsible.
- [Collapsible](https://ui.inta.site/components/collapsible.md): Expands and collapses a single section.
- [Carousel](https://ui.inta.site/components/carousel.md): Scrolls through slides horizontally.
- [Resizable](https://ui.inta.site/components/resizable.md): Panels whose size can be changed by dragging the divider.
- [Scroll Area](https://ui.inta.site/components/scroll-area.md): A scroll region with a styled appearance.
- [Separator](https://ui.inta.site/components/separator.md): A line that divides content.

### Show status

- [Alert](https://ui.inta.site/components/alert.md): Keeps a notice or error visible within the page. For a temporary notification, use Toast.
- [Toast](https://ui.inta.site/components/toast.md): Briefly reports the result of an action, and can hold actions such as undo.
- [Progress](https://ui.inta.site/components/progress.md): Shows how far a task has progressed. Use the indeterminate display when the end is unknown.
- [Meter](https://ui.inta.site/components/meter.md): Shows an amount within a range, such as achievement rate or usage. For task progress, use Progress.
- [Spinner](https://ui.inta.site/components/spinner.md): A rotating indicator showing that loading is in progress.
- [Skeleton](https://ui.inta.site/components/skeleton.md): A placeholder showing the shape of content while it loads.
- [Badge](https://ui.inta.site/components/badge.md): Shows a status or category as a short label.
- [Empty](https://ui.inta.site/components/empty.md): Shown when there is no data, with a suggested next action.
- [Marker](https://ui.inta.site/components/marker.md): Marks a spot in body text to draw attention to it.

### Chat and AI

- [Message](https://ui.inta.site/components/message.md): A single chat message, with sender, body, and actions.
- [Bubble](https://ui.inta.site/components/bubble.md): Wraps message text in a speech bubble shape.
- [Message Scroller](https://ui.inta.site/components/message-scroller.md): A chat message list that scrolls to the bottom on new messages and shows a button to jump back.
- [Questionnaire](https://ui.inta.site/components/questionnaire.md): Has the AI ask the user questions one after another, answered by choices or free text.
- [Code Block](https://ui.inta.site/components/code-block.md): Displays code with line numbers, diffs, and a copy button.
- [Trace](https://ui.inta.site/components/trace.md): Shows the AI's processing steps and tool calls in an expandable form.
