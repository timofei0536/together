# Spec: Building a component from a screenshot
---

## 1. Design source
- **Input:** screenshot.
- **Style reference:** existing components under `src/components/*` and subcomponents under `src/components/ui/*` (`Title`, `Btn`, `content`, `content`, etc ).

---

## 2. Technical constraints

### 2.1 Allowed utilities

- **Only:** flex-properties, padding, margin, colors, font-size (fz), gap.
- **Values:** only those defined in `tailwind.config.js`. Arbitrary values (e.g. `p-[13px]`, `text-[17px]`) are forbidden.

### 2.2 Images / Icons

- Use assets from `public/images/`, `components/icons/`.

### 2.3 Not allowed

- Dynamic classes and custom SCSS. The component’s `.scss` file must remain empty.
- Utilities other than flex-properties, padding, margin, colors, font-size, gap.
- Arbitrary values; only config-defined values are allowed.
- Modifying `tailwind.config.js`.

---

## 3. Pre-commit checklist
- [ ] No dynamic classes or custom SCSS; component `.scss` file is empty.
- [ ] Only flex-properties, padding, margin, colors, font-size, gap; all values from `tailwind.config.js` (no arbitrary values).
- [ ] `tailwind.config.js` has not been changed.
- [ ] Icons/logos are loaded from `public/images/`, `components/icons/`.

---
