import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios'

export default function AssetForm() {
  const [formData, setFormData] = useState({ name: "", type: "", status: "", assignedTo: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function addAsset(newAsset){
    const res = await axios.post('http://localhost:3001/assets',newAsset);
    const addedAsset = res.status
    console.log ("Adding asset:", addedAsset);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAsset = { id: Date.now(), ...formData }
    addAsset(newAsset)
    setFormData({ name: "", type: "", status: "Available", assignedTo: "" })
  }

  return (
    <form className="space-y-4">
      <Input name="name" placeholder="Asset Name" value={formData.name} onChange={handleChange} />
      <Input name="type" placeholder="Asset Type" value={formData.type} onChange={handleChange} />
      <Input name="status" placeholder="Status (Available/In Use)" value={formData.status} onChange={handleChange} />
      <Input name="assignedTo" placeholder="Assigned To (optional)" value={formData.assignedTo} onChange={handleChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  )
}
