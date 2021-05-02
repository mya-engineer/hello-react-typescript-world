import React, { useRef } from 'react'

interface ToDoFormProps {
  onAdd(title: string): void
}

export const ToDoForm: React.FC<ToDoFormProps> = props => {
  // const [title, setTitle] = useState('')

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      // console.log(ref.current!.value) // ! means that it is OK
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // setTitle('')
    }
  }

  return (
    <div className='input-field mt-2'>
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type='text'
        id='title'
        placeholder='ToDooshka Goes Here...'
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        ToDooshka Goes Here...
      </label>
    </div>
  )
}
