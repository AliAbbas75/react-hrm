// components/EditDialog.jsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useEffect } from "react"

export default function DeleteRow({ rowData, onClose, onSuccess,endpoint }) {


  const onDelete = async (data) => {
    try {
      await axios.delete(`http://localhost:3001/${endpoint}/${rowData.id}`, data)
      onSuccess?.() // Notify parent to refresh or close dialog
      onClose()     // Close the dialog
    } catch (err) {
      console.error("Delete failed:", err)
    }
  }

  return (
    <Dialog open={!!rowData} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Confirm Delete</DialogTitle>
        <div className="flex flex-row items-center justify-center gap-10">
            <Button variant={"destructive"} onClick = {()=>onDelete(rowData)}>
                Delete
            </Button>
            <Button onClick = {onClose}>
                Cancel
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


