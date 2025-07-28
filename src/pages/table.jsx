import TableComponent from '@/components/tanstack-table/TableComponent'

const data = [
  { name: 'Alice', age: 25, job: 'Developer' },
  { name: 'Bob', age: 30, job: 'Designer' },
  { name: 'Charlie', age: 28, job: 'Product Manager' },
  // add more data
]

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'job',
    header: 'Job Title',
  },
]

export default function TestTable() {
  return <TableComponent data={data} columns={columns} />
}