# Next.js Task Manager

This project is a Task Manager built with Next.js, utilizing Prisma for data handling, SWR for data fetching, and Vercel for deployment. It's backed by a PostgreSQL database. The `NewTask` component allows for the creation, update, and deletion of tasks.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repo
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up your PostgreSQL database** and configure your `.env` file with the necessary environment variables for connecting to your database.

5. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

### `NewTask` Component

The `NewTask` component is used for creating and updating tasks. When a task is being updated, the `params` prop should include the `id` of the task.

#### Props

- `params`: An object that contains the `id` of the task being updated. If `params.id` is provided, the component will fetch the existing data for the task and populate the form fields.

#### Example

````jsx
<NewTask params={{ id: 'task-id' }} />


## API Routes

- `GET /api/tasks/:id`: Fetches the data for a task with the given id.
- `PUT /api/tasks/:id`: Updates the task with the given id.
- `POST /api/tasks`: Creates a new task.
- `DELETE /api/tasks/:id`: Deletes the task with the given id.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Starting the Project


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
