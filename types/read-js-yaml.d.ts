declare module "read-js-yaml" {
  export default function readJsYaml(
    path: string,
    asYaml?: boolean
  ): Promise<any>;
}
