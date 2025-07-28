// components/EditDialog.jsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect } from "react"

export default function UpdateForm({ rowData, onClose, onSuccess,endpoint }) {
  const { register, handleSubmit, reset } = useForm()

  // Prefill form when rowData changes
  useEffect(() => {
    if (rowData) reset(rowData)
  }, [rowData])

  const onSubmit = async (data) => {
    try {
      await axios.patch(`http://localhost:3001/${endpoint}/${rowData.id}`, data)
      onSuccess?.() // Notify parent to refresh or close dialog
      onClose()     // Close the dialog
    } catch (err) {
      console.error("Update failed:", err)
    }
  }

  return (
    <Dialog open={!!rowData} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Edit</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} id="name" required />
          </div>
          <div>
            <Label htmlFor="employeeCount">Employee Count</Label>
            <Input
              type="number"
              {...register("employeeCount", { valueAsNumber: true })}
              id="employeeCount"
              required
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}


