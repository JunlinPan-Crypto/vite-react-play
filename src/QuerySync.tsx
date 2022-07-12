import { useState, useEffect, useCallback } from 'react'
import { useQueryParams } from 'raviger'
import { debounce } from 'lodash-es'

let count = 1
function call(value) {
  console.log('count', count++, value)
}

function useQuery() {
  const [{ search = '' }, setQuery] = useQueryParams<{ search: string }>()
  const [input, setInput] = useState(search)
  const debouncedSetQuery = useCallback(
    debounce((search: string) => {
      setQuery({ search })
    }, 500),
    [],
  )

  function handleInputChange(value: string) {
    setInput(value)
    debouncedSetQuery(value)
  }

  useEffect(() => {
    setInput(search)
  }, [search])
  return {
    input,
    handleInputChange,
    searchValue: search,
  }
}

export default function QuerySync() {
  const { input, handleInputChange, searchValue } = useQuery()
  console.log('🚀 ~ QuerySync ~ searchValue', searchValue)
  return (
    <div>
      <h2>QuerySync</h2>
      <div>
        <input
          value={input}
          onChange={e => handleInputChange(e.target.value)}
        />
        <p>input: {input}</p>
        <p>search value: {searchValue}</p>
      </div>
    </div>
  )
}
