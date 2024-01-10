import { useState, useEffect } from 'react';

export default function Table({ list }) {
  const [animals, setAnimals] = useState(list);
  return animals.length ? (
    <>
      <table>
        <tbody>
          {animals.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : null;
}
