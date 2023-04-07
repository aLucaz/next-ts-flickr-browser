# Flickr Browser 🏃🏾‍♂️

Simple and clean web app to make searchs using the Flickr API.

## Tech used
- nextJS
- typescript
- flickr SDK
- npm
- docker

## Run 🚀
### First
add a .env file in the root with this content
```dotenv
FLICKR_API_KEY=<api key here>
```
install dependencies
```bash
npm install
```
### Option  1: Localhost
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
### Option 2: Docker
```bash
make up-next
```