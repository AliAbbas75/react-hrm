import React from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"

function AddForm({endpoint}) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      if (endpoint) {
        console.log ("Current Endpoint:" ,endpoint)
        const response = await axios.post(`http://localhost:3001/${endpoint}`, data)
        console.log("Department added:", response.data)
        reset()
      } 
      else{
        console.log("Endpoint Error",endpoint);
      }
    } catch (error) {
      console.error(`Error posting ${endpoint}`, error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
      <div>
        <Label className="block font-medium mb-1">Name:</Label>
        <Input
          {...register("name")}
          placeholder="e.g. Engineering"
          className="border px-3 py-2 w-full"
          required
        />
      </div>

      <div>
        <Label className="block font-medium mb-1">Employee Count:</Label>
        <Input
          type="number"
          {...register("employeeCount", { valueAsNumber: true })}
          className="border px-3 py-2 w-full"
          required
        />
      </div>

      <button type="submit" className="bg-foreground text-white py-2 px-4 rounded">
        Add
      </button>
    </form>
  )
}

export default AddForm
