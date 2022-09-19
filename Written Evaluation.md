# Question:

## Question 1: Right now the data for the posts are coming from a JSON file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

- We used the Pagination component in BlogList and passed the posts data to the Pagination component.
  When we get data from the API, the first thing we need to pay attention to is that this is an asynchronous task.

- We can use the useEffect hook function, in which we send HTTP requests.
  When we pass in an empty array ([]) as deps, useEffect can simulate React's "componentDidMount" lifecycle method.
- Since it will take time to obtain data from the API, we need to pay attention that when rendering the pagination component for the first time without obtaining the data, it will cause an error.

- Therefore, we can create the loading state, or the skeleton screen, and temporarily not render the paging component. The pagination component is rendered only when the data is fetched. In this way, errors can be avoided and the user experience can be improved.

- In addition, as a component, BlogList usually should not handle the logic of fetching data. We can put the request logic in the upper layer(view or page layer), for example, HatchwayBlog.jsx, and pass the required data to the BlogList component as props.

## Question 2: Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

- Our original intention is to use the key to improve the performance of React because React uses the key attribute to identify whether this is a new DOM element or an old element. Therefore, each element should have a unique and stable key.
- However，- In the application, we used nanoid like this:

```
        const key = nanoid();
```

- In this way, every time the page is re-rendered, this method will be invoked to generate a new nanoid. Therefore, the key is always changing, which increases the burden of React. Frequent calls to nanoid methods can also have negative effects

- As an alternative, we can generate a nanoid when the user creates a new post and pass it to the backend server. The server stores the id, and when we access the blog list, we can read the id from the data returned by the backend and use it as the key.
