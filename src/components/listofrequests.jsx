import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';

function JoinRequestsList() {
  const [join, setJoin] = useState(null);

  const handleCheckClick = () => {
    setJoin(true);
  };

  const handleCrossClick = () => {
    setJoin(false);
  };

  return (
    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2">
      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center">
          user one
          <XIcon className="h-5 w-5 text-dark cursor-pointer ml-auto" onClick={handleCrossClick} />
          <CheckIcon className="h-5 w-5 text-black cursor-pointer ml-2" onClick={handleCheckClick} />
        </div>
      </li>
      {/* Add similar structure for other list items */}
    </ul>
  );
}

export default JoinRequestsList;