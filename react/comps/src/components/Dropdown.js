import { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click');
    }
  }, [])

  const handleClick = () => {
    setIsOpen(prev => !prev);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    onChange(option)
  }

  const renderedOptions = options.map(option => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  return <div ref={divEl} className="w-48 relative">
    <Panel
      className="flex justify-between items-center cursor-pointer"
      onClick={handleClick}>
      {selectedOption?.label || "Select..."}
      <GoChevronDown className="text-lg" />
    </Panel>
    {isOpen &&
      <Panel className="absolute top-full">{renderedOptions}</Panel>
    }
  </div>
}
export default Dropdown;