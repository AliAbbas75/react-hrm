import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table'

const TableComponent = ({ data, columns,actions }) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="p-4">
        
        <div className="space-y-2 flex flex-row  justify-end gap-3 pt-2">
          <input
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="mb-4 px-2 py-1 border border-gray-300 rounded" />
          {/* 👇 Render Actions (if any) */}
          {actions && (
              <div className="">{actions}</div>
           
          )}
        </div>

        <Table className={"m-4 overflow-x-clip"}>
          <TableHeader className="bg-gray-100 text-center">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-2 cursor-pointer text-emerald-400 text-center"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? ''}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

    </>

  )
}

export default TableComponent


{/* <Table className={"m-4 overflow-x-clip"}>
                    <TableCaption>Total Days in 2025</TableCaption>
                    <TableHeader className={""}>
                        <TableRow>
                            <TableHead className="text-center font-bold text-xl">Leave Type</TableHead>
                            <TableHead className="text-center font-bold text-xl">Start Date</TableHead>

                            <TableHead className="text-center font-bold text-xl">End Date</TableHead>

                            <TableHead className="text-center font-bold text-xl">Number of Days</TableHead>
                            <TableHead className="text-center font-bold text-xl">Status</TableHead>
                            <TableHead className="text-center font-bold text-xl">Reason</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            leavesData.map((leave, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {leave.leaveType}
                                    </TableCell>
                                    <TableCell>
                                        {leave.startDate}
                                    </TableCell>
                                    <TableCell>
                                        {leave.endDate}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {leave.numberOfDays}
                                    </TableCell>
                                    <TableCell>
                                        {leave.status}
                                    </TableCell>
                                    <TableCell>
                                        {leave.reason}
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table> */}