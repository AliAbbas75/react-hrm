// components/EditDialog.jsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect } from "react"

export default function UpdateAsset({ rowData, onClose, onSuccess, endpoint }) {
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
                <DialogTitle>Edit Asset</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="assetName">Asset Name</Label>
                        <Input {...register("name")} id="assetName" required />
                    </div>
                    <div>
                        <Label htmlFor="type">Type</Label>
                        <Input {...register("type")} id="type" required />
                    </div>
                    <div>
                        <Label htmlFor="status">Status</Label>
                        <Input {...register("status")} id="status" required />
                    </div>
                    <div>
                        <Label htmlFor="assignedTo">Assigned To</Label>
                        <Input {...register("assignedTo")} id="assignedTo" required />
                    </div>
                    <Button type="submit">Save</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}





