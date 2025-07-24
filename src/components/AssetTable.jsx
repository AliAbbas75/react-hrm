import { useAssetStore } from "@/store/assetStore"
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState,useEffect } from "react"

export default function AssetTable() {
  const { assets, deleteAsset } = useAssetStore()
  const [apiAssets, setAssets] = useState([])
  useEffect(() => {

    async function fetchData() {
      const apiAssetsDetail = await fetch('http://localhost:3001/assets');
      const data = await apiAssetsDetail.json();
      setAssets(data);
    }
    fetchData();
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow className={""}>
          <TableHead className={"text-center"}>Name</TableHead>
          <TableHead className={"text-center"}>Type</TableHead>
          <TableHead className={"text-center"}>Status</TableHead>
          <TableHead className={"text-center"}>Assigned To</TableHead>
          <TableHead className={"text-center"}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {apiAssets.map((asset) => (
          <TableRow key={asset.id}>
            <TableCell>{asset.name}</TableCell>
            <TableCell>{asset.type}</TableCell>
            <TableCell>
              <Badge variant={asset.status === "Assigned" ? "success" : "destructive"}>
                {asset.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
        {assets.map((asset) => (
          <TableRow key={asset.id}>
            <TableCell>{asset.name}</TableCell>
            <TableCell>{asset.type}</TableCell>
            <TableCell><Badge>{asset.status}</Badge></TableCell>
            <TableCell>{asset.assignedTo || "—"}</TableCell>
            <TableCell>
              <Button size="sm" variant="outline" onClick={() => deleteAsset(asset.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
