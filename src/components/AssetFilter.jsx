import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useAssetStore } from "@/store/assetStore"

export default function AssetFilter() {
  const { assets, setAssets } = useAssetStore()
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    const filtered = assets.filter(a => a.name.toLowerCase().includes(value.toLowerCase()))
    setAssets(filtered)
  }

  return (
    <div className="mb-4">
      <Input placeholder="Search assets..." value={search} onChange={handleSearch} />
    </div>
  )
}
