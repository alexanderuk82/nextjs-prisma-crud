import TaskCard from '@/components/TaskCard';
import { prisma } from '@/libs/prisma';

async function loadTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

export default async function homePage() {
  const data = await loadTasks();
  return (
    <section className="container mx-auto p-9">
      <h1 className="text-center font-semibold text-5xl">Tasks</h1>
      <div className="grid grid-cols-3 gap-3 mt-10">
        {data.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </section>
  );
}
