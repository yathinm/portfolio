declare module "*.jpg" {
  const src: import("next/dist/shared/lib/get-img-props").StaticImageData;
  export default src;
}

declare module "*.png" {
  const src: import("next/dist/shared/lib/get-img-props").StaticImageData;
  export default src;
}
