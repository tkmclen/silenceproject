"use client"

import type React from "react"

import { useState } from "react"
import { Check, Circle, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Task = {
  id: string
  text: string
  completed: boolean
}

export default function ProjectTodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Complete website layout design", completed: true },
    { id: "2", text: "Set up Supabase database", completed: false },
    { id: "3", text: "Create user authentication flow", completed: false },
    { id: "4", text: "Develop tinnitus tracking tools", completed: false },
    { id: "5", text: "Add resource library with YouTube videos", completed: false },
    { id: "6", text: "Implement user progress dashboard", completed: false },
    { id: "7", text: "Design and develop user profile page", completed: false },
  ])
  const [newTask, setNewTask] = useState("")

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask.trim(),
          completed: false,
        },
      ])
      setNewTask("")
    }
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 shadow-lg">
      <CardHeader className="border-b border-gray-700">
        <CardTitle className="text-xl font-semibold text-white">Project To-Do List</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex mb-4">
          <Input
            type="text"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-gray-700 border-gray-600 text-white"
          />
          <Button onClick={addTask} className="ml-2 bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mr-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {task.completed ? <Check className="h-5 w-5 text-purple-400" /> : <Circle className="h-5 w-5" />}
                </button>
                <span className={`${task.completed ? "line-through text-gray-500" : "text-white"}`}>{task.text}</span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-500 hover:text-red-400 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-400">
          {tasks.filter((t) => t.completed).length} of {tasks.length} tasks completed
        </div>
      </CardContent>
    </Card>
  )
}

