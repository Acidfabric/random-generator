import React from 'react'
import classNames from 'classnames'

interface TableProps {
  tableData: string[]
}

export const Table = ({ tableData }: TableProps) => (
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Number</th>
        <th className="px-4 py-2">Value</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((data, index) => {
        const style = classNames({ 'bg-gray-100': index % 2 === 1 })
        return (
          <tr key={index} className={style}>
            <td className="border px-4 py-2">{index + 1}.</td>
            <td className="border px-4 py-2">{data}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)