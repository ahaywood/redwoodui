declare module "*?url" {
  const result: string;
  export default result;
}

declare module "*.module.css" {
  export default Record<string, string>;
}
