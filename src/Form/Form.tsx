import React, { useCallback, useRef } from 'react';

interface FormProps {
  submit(): void
  setValueList(list: string[]): void
  valueList: string[]
}

export const Form = ({ submit, setValueList, valueList }: FormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setRef = useCallback(node => {
    if (node) {
      node.focus()
      inputRef.current = node
    }
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newList = valueList;
    newList[index] = event.target.value

    setValueList([...newList])
  }

  function handleInputRemove(value: string) {
    const filterArray = valueList.filter(item => item !== value);

    setValueList(filterArray)
  }

  function handleAddAnother(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setValueList([...valueList, ''])
  }

  return (
    <form className="mt-8" action="#" onSubmit={handleAddAnother}>
      <div className="rounded-md">
        {valueList.map((value, index) => (
          <div key={index} className="flex mb-3">
            <input ref={setRef} onChange={(event) => handleChange(event, index)} aria-label="value" value={value} name={'value' + (index)} type="text" required className="appearance-none rounded-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Value" />
            {index !== 0 && (
              <button onClick={() => handleInputRemove(value)} type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 ml-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.875 28.489"><path d="M108.993,0c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.682-6.26,13.958-13.942,14.018c-31.683,0.222-63.368,0.444-95.051,0.666C6.2,28.549-0.016,22.369,0,14.685 C0.018,7.002,6.261,0.726,13.943,0.667C45.626,0.445,77.311,0.223,108.993,0L108.993,0z" /></svg>
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Add extra field
          </button>
      </div>
      <div className="mt-2">
        <button onClick={submit} type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Randomise
          </button>
      </div>
    </form>
  )
}