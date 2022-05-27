import { DocumentData } from 'firebase/firestore'
import React from 'react'

interface Props {
  products: DocumentData[]
}
const Table = ({ products }: Props) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product: DocumentData) => (
            <td className="tableDataFeature">{product.price}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
