import { useState } from 'react'

export default function UserForm() {
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/idea/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })

    if (response.ok) {
      const newUser = await response.json()
      console.log(newUser)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

