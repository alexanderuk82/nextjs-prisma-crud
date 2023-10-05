'use client';

import { useRouter } from 'next/navigation';

function TaskCard(task) {
  const router = useRouter();
  return (
    <div className="bg-slate-100 text-slate-900 p-3 rounded hover:bg-slate-700 hover:text-slate-100 transition hover:cursor-pointer"
    onClick={() => router.push(`/task/edit/${task.id}`)}
    >
      <h1 className="text-2xl font-semibold mb-3 capitalize">{task.title}</h1>
      <p>{task.description}</p>
      <p className="text-sm mt-3 font-medium">
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
