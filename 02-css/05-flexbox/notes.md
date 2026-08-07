# CSS Flexbox (Part 5) Complete Study Notes

## 1. What is Flexbox & Display Flex
- Flexbox (Flexible Box Layout) is a 1D layout model designed for aligning elements in rows or columns.
- `display: flex`: Activates a flex context on a parent element, turning its immediate children into flex items.
- Flexbox operates on two main axes: **Main Axis** (primary layout direction) and **Cross Axis** (perpendicular to main axis).

## 2. Flex Direction (`flex-direction`)
Sets the primary orientation of the main axis:
- `row` (default): Horizontal left to right.
- `row-reverse`: Horizontal right to left.
- `column`: Vertical top to bottom.
- `column-reverse`: Vertical bottom to top.

## 3. Justify Content (`justify-content`)
Aligns flex items along the **Main Axis**:
- `flex-start` (default): Items packed at start of main axis.
- `flex-end`: Items packed at end of main axis.
- `center`: Items centered along main axis.
- `space-between`: First item at start, last at end, equal spacing between items.
- `space-around`: Equal spacing around each item (half-size space at ends).
- `space-evenly`: Equal spacing between any two items and edges.

## 4. Flex Wrap (`flex-wrap`)
Controls single-line vs multi-line flex containers:
- `nowrap` (default): Forces items onto a single line, shrinking them if needed.
- `wrap`: Items wrap onto multiple lines from top to bottom.
- `wrap-reverse`: Items wrap onto multiple lines in reverse direction.

## 5. Align Items (`align-items`)
Aligns flex items along the **Cross Axis** on the current line:
- `stretch` (default): Items stretch to fill container height (if height is auto).
- `flex-start`: Items placed at start of cross axis.
- `flex-end`: Items placed at end of cross axis.
- `center`: Items centered on cross axis.
- `baseline`: Items aligned by their text baseline.

## 6. Align Content (`align-content`)
Aligns flex lines when extra space exists on the cross-axis. **Only active when `flex-wrap: wrap` is enabled**:
- `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

## 7. Align Self (`align-self`)
Allows an individual flex item to override the container's `align-items` rule:
- Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

## 8. Flex Sizing (`flex-grow`, `flex-shrink`, `flex-basis`)
Controls dynamic resizing of flex items:
- `flex-grow`: Ratio determining how much available space an item absorbs (default: `0`).
- `flex-shrink`: Ratio determining how much an item contracts when space is limited (default: `1`).
- `flex-basis`: Initial size of an item before growing/shrinking (default: `auto`).

## 9. Flex Shorthand (`flex`)
Combines grow, shrink, and basis into a single rule:
- `flex: <flex-grow> <flex-shrink> <flex-basis>`
- `flex: 1` -> shorthand for `flex: 1 1 0%` (equal distribution).
- `flex: 0 0 200px` -> fixed width 200px (no grow, no shrink).

## 10. Common Mistakes & Interview Notes
- **Mistake**: Setting `justify-content` on a child flex item instead of the parent container.
- **Interview Question**: *How do you perfectly center a div horizontally and vertically using Flexbox?*
  ```css
  .parent {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  ```
