import React from 'react'

const Tab = ({ tabData, field, setField }) => {
  return (
    <div className="flex bg-white p-1 gap-x-1 my-6 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } py-2 px-5 rounded-full transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
  )
}

export default Tab