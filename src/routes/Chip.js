import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const AutoCompleteChips = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([
    { label: 'Anya Navarro', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg' },
    { label: 'Elias Thorton', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg' },
  ]);
  const [availableItems, setAvailableItems] = useState([
    { label: 'Anya Navarro', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg' },
    { label: 'Elias Thorton', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg' },
    { label: 'Kaia Patel', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/38.jpg' },
    { label: 'Silas Jones', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/15.jpg' },
    { label: 'Lyra Mitchell', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg' },
    { label: 'Roan Sharma', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/17.jpg' },
    { label: 'Zaria Ramirez', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/18.jpg' },
    { label: 'Mato Thopson', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/19.jpg' },
    { label: 'Amara Khan', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/20.jpg' },
    { label: 'Ezekiel Moore', imageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/21.jpg' },
  ]);

  const handleInputChange = (e) => {
    if (e.key === 'Backspace' && inputValue === '' && selectedItems.length > 0) {
      const lastSelectedItem = selectedItems[selectedItems.length - 1];
      setSelectedItems(selectedItems.slice(0, -1));
      setAvailableItems([...availableItems, lastSelectedItem]);
    } else {
      setInputValue(e.target.value);

      if (e.key === 'Enter' && availableItems.length > 0) {
        handleItemClick(availableItems[0]);
      }
    }
  };

  const handleItemClick = (item) => {
    const newItem = { label: item.label, imageUrl: item.imageUrl };
    setSelectedItems([...selectedItems, newItem]);
    setAvailableItems(availableItems.filter((i) => i.label !== item.label));
    setInputValue('');
  };

  const handleChipDelete = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.label !== item.label));
    setAvailableItems([...availableItems, item]);
  };

  const showAllItems = () => {
    setInputValue('');
  };

  return (
    <div className='relative w-full h-full flex flex-col items-center justify-center'>
      <div className='w-2/5 pb-20 flex flex-col justify-start'>
        <span className='text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-app-pink to-app-orange'>
            Hello Gaurav!
        </span>
        <p className='mt-2 text-lg text-app-purple'>
            Vasu this side, and here is my submission for the Zepto Frontend assignment you posted on LinkedIn a few hours ago. 
            I have used ReactJS and Tailwind for this project.
        </p>
        <span className='text-sm mt-2'> 
           Try using 'ENTER/return' ket to enter chips and also 'BACKSPACE/detele' to delete.
        </span>
      </div>
      <div className='relative mt-10'>
        <div className='border border-b-blue-500 flex relative z-10 w-fit '>
          <div className='flex'>
            {selectedItems.map((item) => (
              <div key={item.label} className='m-1'>
                <div className='flex items-center bg-white border-2 rounded-full px-3 py-2 min-w-max'>
                  <img
                    src={item.imageUrl}
                    alt='avatar'
                    className='w-6 h-6 rounded-full mr-2'
                  />
                  <span className='text-sm'>{item.label}</span>
                  <button
                    onClick={() => handleChipDelete(item)}
                    className='ml-1 text-sm font-semibold focus:outline-none hover:text-red-600'
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <input
            id='autocompleteInput'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            onFocus={showAllItems}
            placeholder='Type to enter...'
            className='w-full py-2 px-4 bg-app-bg outline-none'
          />
        </div>
        {(inputValue || document.activeElement === document.getElementById('autocompleteInput')) && (
          <div className='absolute top-full right-0 bg-white border rounded-md mt-1 w-fit shadow-md z-20'>
            {availableItems
              .filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()))
              .map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  className='p-2 cursor-pointer hover:bg-gray-200 flex items-center'
                >
                  <img
                    src={item.imageUrl}
                    alt='avatar'
                    className='w-6 h-6 rounded-full mr-2'
                  />
                  {item.label}
                </div>
              ))}
          </div>
        )}
      </div>
      <div className='w-1/3 mt-40 flex flex-col justify-center items-center'>
        <span className='text-xl font-semibold text-app-purple'>
            Connect with me:
        </span>
        <p className='mt-8 text-app-purple flex gap-16'>
        <a href='https://vasu1712.vercel.app/'><Icon icon='fluent-mdl2:website' color='#3d006a' width='30' height='30' /></a> 
        <a href='https://github.com/Vasu1712/'><Icon icon='mdi:github' color='#3d006a' width='30' height='30' /></a> 
        <a href='https://www.linkedin.com/in/vasu-pal-300448203/'><Icon icon='cib:linkedin' color='#3d006a' width='30' height='30' /></a> 
        </p>
      </div>
    </div>
  );
};

export default AutoCompleteChips;
