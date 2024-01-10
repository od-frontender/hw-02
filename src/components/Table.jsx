import { useState, useEffect } from "react";

export default function Table({list}) {
  const [animals, setAnimals] = useState(list);
  return (
    <>
      <table>
        <tbody>
          {animals.map((item) => (
            <>
              <tr>
                {item.type}
                <td colSpan="2">{item.icon}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}
