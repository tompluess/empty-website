# Empty Website

This is an empty website template.

An opinionated starter project for creating lightning-fast websites with [Gatsby](https://gatsbyjs.org) v2 and [Netlify CMS](https://netlifycms.org) v2.

- **[Gatsby](https://gatsbyjs.org)** static site generator
- **[Netlify CMS](https://github.com/netlify/netlify-cms)** for content management

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)
[Netlify CMS Repo](https://github.com/netlify/netlify-cms)

## Deploy to vercel.com

- Grant access to your github repo to the [Now app](https://github.com/apps/now).
- Import project to [vercel.com](https://vercel.com/dashboard)
- Provide your secrets used in `now.json`. e.g. `now secret add tompluess_github_client_id aabbcddeexxx`
- Adapt `base_url` and env variable `ORIGIN` to your website url

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn` or `npm install`

1.  Run the development server

`yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).
