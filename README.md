<p align="center"><a href="https://maalexi.com"><img src="https://www.maalexi.com/images/hires_logo.png"></a></p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/fd115659-8e28-48a9-8d09-8094c07667ee/deploy-status)](https://app.netlify.com/sites/practical-bhabha-7087cc/deploys)

# Google Product Category Finder

A browser only site to find the Google Product Category ID for any product type by simply searching in the Web Interface.
Built using [Next.js](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/).

## How it works

The app uses the official list of Product Taxonomy by Google, last updated on 2019-07-10.

You can find the original data [here](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt)

At the root directory of the project, there contains a `script.js` file, which parses this data into a Javascript readable JSON format with the following schema:

```json
[
    {
        "id": 0 // Category ID
        "level1": "Level 1 of taxonomy",
        "level2": "Level 2 of taxonomy", // Optional
        "level3": "Level 3 of taxonomy", // Optional
        "level4": "Level 4 of taxonomy", // Optional
        "level5": "Level 5 of taxonomy", // Optional
        "level6": "Level 6 of taxonomy", // Optional
    }

]
```

The Web App is browser only. Which means no API calls or backend is required to search and query this data.
This is achieved by the Open Source library Fuse.js. You can read more about them [here](https://fusejs.io/).
## Contributing

### Local Setup

1. Fork this project and clone it locally
2. Do `yarn install` to install the dependencies.
3. Run `yarn dev` to and then visit [localhost:3000](https://localhost:3000) in your browser

#### This repo is [commitizen](http://commitizen.github.io/cz-cli/) friendly
It is recommended to commit with `git cz` instead of `git commit`.

## Maintainers
@manishprivet - Manish Kumar

## Powered By
[Maalexi](https://maalexi.com) - Maalexi is a secured B2B digital marketplace for African Buyers to get Excess Inventory Items delivered from Manufacturers in India, UAE and Europe.
