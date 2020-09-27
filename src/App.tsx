import React, { useState } from 'react';
import { Form } from './Form/Form';
import { Table } from './Table/Table';

function App() {
  const [valueList, setValueList] = useState<string[]>([''])
  const [isTableVisible, setIsTableVisible] = useState(false)
  const [tableData, setTableData] = useState<string[]>()

  function shuffleArray() {
    const array = [...valueList];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setTableData(array.filter(Boolean))
  }

  function handleSubmit() {
    shuffleArray()
    setIsTableVisible(true)
  }

  function handleGoBack() {
    setTableData([''])
    setValueList([''])
    setIsTableVisible(false)
  }

  function renderTable() {
    if (!tableData) return null

    return (
      <>
        <Table tableData={tableData} />
        <div className="mt-2">
          <button onClick={handleGoBack} type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            Go back
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <p className="font-sans text-4xl text-gray-800 text-center">Randomizer</p>
          {(isTableVisible && !!tableData?.length)
            ? renderTable()
            : <Form submit={handleSubmit} valueList={valueList} setValueList={setValueList} />}
        </div>
      </div>
    </>
  );
}

export default App;
