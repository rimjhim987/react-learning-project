import React from 'react'


function card(props) {
  console.log(props);
  return (
    
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/39336201/pexels-photo-39336201.jpeg?cs=srgb&dl=pexels-aaronburden-39336201.jpg&fm=jpg&_gl=1*4o5vny*_ga*MzQ3MjMyNDMxLjE3OTA4NzcyNTM.*_ga_8JE65Q40S6*czE3OTA5NDYyNzMkbzIkZzEkdDE3OTA5NDYzMDIkajMxJGwwJGgwg" />
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  )
}

export default card