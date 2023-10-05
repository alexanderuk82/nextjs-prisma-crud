'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NewTask({ params }) {
  const id = params.id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Fetching data from database
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/tasks/${id}`, fetcher);

  // Loading data into state

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  const router = useRouter();

  // Submitting form on button click

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.desc.value;

    if (params.id) {
      // Updating existing task
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // Inserting new task into database

      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Redirecting to home page
    router.refresh();
    router.push('/');
  };

  // Onclick Delete task from database

  const deleteTask = async () => {
    const confirm = window.confirm(
      'Are you sure you want to delete this task?'
    );

    if (confirm) {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      router.refresh();
      router.push('/');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action=""
        className="bg-slate-700 p-10 rounded w-1/3"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-semibold text-sm leading-8 ">
          Title of this task
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="border border-gray-400 p-2 mb-4 w-full text-blue-950"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="desc" className="font-semibold text-sm leading-8 ">
          Description
        </label>
        <textarea
          name=""
          id="desc"
          cols="30"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-blue-950"
          placeholder="Description of your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex w-full justify-between">
          {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={deleteTask}
            >
              Delete task
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {params.id ? 'Update task' : 'Create task'}
          </button>
        </div>
      </form>
    </div>
  );
}
