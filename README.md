# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

import React from 'react';

const Breadcrumb = () => {
return (
<div
className="bg-[#0a0a0a] bg-cover bg-center"
style={{
        backgroundImage:
          "url('https://woodmart.xtemos.com/wp-content/uploads/2022/03/page-title-shop.jpg')",
      }} >
<div className="container mx-auto p-4">
<div className="flex items-center justify-between">
{/_ Back Button _/}
<div className="wd-back-btn wd-action-btn wd-style-icon">
<a href="#" rel="nofollow noopener" aria-label="Go back"></a>
</div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold">Lighting</h1>

          {/* Categories Button */}
          <div className="wd-btn-show-cat wd-action-btn wd-style-text">
            <a
              href="#"
              rel="nofollow"
              className="text-blue-600 hover:underline"
            >
              Categories
            </a>
          </div>
        </div>

        {/* Navigation List */}
        <ul className="mt-4 space-y-2">
          {[
            {
              name: 'Clocks',
              count: 12,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
              link: 'https://woodmart.xtemos.com/product-category/clocks/demo/retail/',
            },
            {
              name: 'Lighting',
              count: 17,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/light-bulb.svg',
              link: 'https://woodmart.xtemos.com/product-category/lighting/demo/retail/',
              active: true,
            },
            {
              name: 'Furniture',
              count: 33,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/chair.svg',
              link: 'https://woodmart.xtemos.com/product-category/furniture/demo/retail/',
            },
            {
              name: 'Accessories',
              count: 12,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/flower.svg',
              link: 'https://woodmart.xtemos.com/product-category/accessories/demo/retail/',
            },
            {
              name: 'Cooking',
              count: 12,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/knives.svg',
              link: 'https://woodmart.xtemos.com/product-category/cooking/demo/retail/',
            },
            {
              name: 'Toys',
              count: 12,
              img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/rocking-horse.svg',
              link: 'https://woodmart.xtemos.com/product-category/toys/demo/retail/',
            },
          ].map((category, index) => (
            <li
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-md ${
                category.active ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
            >
              <a href={category.link} className="flex items-center space-x-3">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-6 h-6"
                />
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-gray-500">
                  {category.count} products
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

);
};

export default Breadcrumb;
