# Gen API Docs

Small project to serve API docs of your project using express from a .json file that follows the OpenAPI specification, thanks to [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express).

And optionally convert a .yml file (that follows OpenAPI specification) to a .json format, so it can be used by the main feature of this project.

## Prerequisites

Clone the repository

```bash
git clone https://github.com/Pipexlul/Gen-API-Docs.git
```

## Installation

Install dependencies

```bash
npm i
```

## Usage

Since this is a small project, there are some hardcoded values the code expects.

1. If your API documentation file is in .json format
   1. Rename your file to `api.json`
   2. Place `api.json` inside the `/data` folder (Overwrite if needed)
   3. Build Project
   ```bash
   npm run build
   ```
   4. Run server
   ```bash
   npm run start
   ```
   5. Go see your docs! By default they should be hosted at `localhost:3000/api-docs`
2. If your API documentation file is in .yml format
   1. Rename your file to `apiContract.yml`
   2. Place `apiContract.yml` inside the `/data` folder (Overwrite if needed)
   3. Run conversion script (This will build and run the necessary files)
   ```bash
   npm run convertYaml
   ```
   4. Build Project
   ```bash
   npm run build
   ```
   5. Run server
   ```bash
   npm run start
   ```
   6. Go see your docs! By default they should be hosted at `localhost:3000/api-docs`

## Libraries used

- [typescript](https://www.npmjs.com/package/typescript)
- [express](https://www.npmjs.com/package/express)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [read-js-yaml](https://www.npmjs.com/package/read-js-yaml)

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
