<img src="https://og.sznm.dev/api/generate?heading=Vite%2C+React-TS%2C++Material+UI&text=React+Vite+template+with+Material+UI+and+TypeScript+setup&template=color&center=true&height=330" />

This is a project bootstrapped with [`@vitejs/app`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`react-ts`), added with [Material UI](https://mui.com/) and [TypeScript](https://www.typescriptlang.org) setup.

- ⚡ blazing fast dev server and build
- 🔗 route management added (`react-router-dom` configured)

## Architecture

```
src/
├── App/
|   ├── App.tsx
├── UI/
|   ├── Buttons/
|   ├── Inputs/
|   ├── Modals/
├── api/
|   ├── auth/
|   ├── instace/
|   ├── endpoints.ts
├── assets/
|   ├── img/
|   ├── svg/
|   ├── icons/
├── components/
|   ├── Fields/
|   ├── Buttons/
|   ├── Footer/
|   ├── Header/
├── config/
├── context/
├── hooks/
|   ├── useBootstrap.ts
|   ├── useMedia.ts
|   ├── useSteps.ts
|   ├── useUpload.ts
├── interface/
├── layouts/
├── libs/
|   ├── formData.ts
|   ├── format.ts
|   ├── index.ts
|   ├── localStorage.ts
├── styles/
|   ├── base.css
|   ├── main.css
├── utils/
|   ├── addNotification.ts
|   ├── dateFormat.ts
|   ├── generals.ts
|   ├── history.ts
|   ├── intl.ts
|   ├── upload.ts
├── main.tsx
```


## Getting Started

You can either click [`Use this template`](https://github.com/Acadbek/vite-react-ts-mui-setup/) button on this repository and clone the repo or use npx degit like so:

```bash

```

Then, run the development server:

```bash
pnpm dev
```

## Deployment

- build command: `pnpm build`
- output directory: `dist`

## References

- [vite](https://vitejs.dev)
  - [avoid manual import](https://vitejs.dev/guide/features.html#jsx)
- [Material UI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org)
