# Pies

This is NeonTribe's pie picker, written in VueJS and PHP.

## Installation

Run `npm install` in the repo root directory, then `npm run dev` to start the front-end server.

To start the backend server, run `sudo backend/server.sh`. Warning: this will install PHP if not already installed.

## Configuration

To configure at which URL the front-end app should find the back end server, change the `serverURL` getter in `store.js`.

Both servers will run on `localhost` at ports `8080` and `80` for front and back end respectively.

These could then be port forwarded, and attached to a domain name/IP of your choice.