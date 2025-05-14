import { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
]

export default function App() {
  const [selection, setSelection] = useState(null);
  const handleChange = (value) => {
    setSelection(value);
  }
  return <div>
    <Dropdown options={options} value={selection} onChange={handleChange} />
  </div>
}