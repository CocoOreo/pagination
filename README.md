# Hatchways Times

Hatchways Times is a website that lists blog posts. All data is located in `src/data/blogs.json` file and loaded directly into client without a server.

Example blog post data:

```json
{
  "id": 1,
  "author": "Esmeralda Vanne",
  "title": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "excerpt": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "1634439025000",
  "image": "http://dummyimage.com/200x134.png/cc0000/ffffff",
  "readingTimeMinutes": 9,
  "tags": ["crypto", "health"]
}
```

# Getting Started

- System requirements
  - Node.JS v14
- Install dependencies
  ```
  yarn
  ```
- Start client
  ```
  yarn start
  ```

# Getting Started (Docker)

Instead of following the steps above, you can also use Docker to set up your environment.

- System requirements
  - [Docker Compose](https://docs.docker.com/compose/install/)
- Run `docker-compose up` to run the client.
- Enter `Ctrl-C` in the same same terminal or `docker-compose down` in a separate terminal to shut down the server.

# Verify That Everything Is Set Up Correctly

If your application is running correctly, you should be able to access it from your browser by going to [http://localhost:3000/](http://localhost:3000/).

# Helpful Commands

- `yarn test` : This repository contains a non-comprehensive set of unit tests used to determine if your code meets the basic requirements of the assignment. **Please do not modify these tests.**
- `yarn prettier --write .` : Runs auto-formatter
