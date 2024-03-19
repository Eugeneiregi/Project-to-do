
import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db'
import { TodoItem } from '@/components/TodoItems'

function getTodos() {
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await getTodos()
  function toggleTodo(todoId: string, completed: boolean): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700
      focus-within:bg-slate-700 outline-none'
          href="/new">New </Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          //  <li key={todo.id}>{todo.title}</li>
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>


  )
}
{/* <ul>
{[...Array(5)].map((_, index) =>
(<li key={index}>
  <div
  style={{
    width:'fit-content',
    height:"6rem",
    backgroundColor:`${Math.floor((Math.random()*16777215
      + 1))}`,display:'inline-block'}}></div>
      <p>{`Todo ${index+1}`}</p>

</li>
</ul> */}