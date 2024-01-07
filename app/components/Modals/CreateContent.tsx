'use client';
import { useGlobalState } from '@/app/context/globalProvider';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import Button from '../Button/Button';
import { add } from '@/app/utils/icons';

function CreateContent() {
  const {
    tasks,
    theme,
    allTasks,
    closeModal,
    edit,
    finishEdit,
    updateTask,
    ID,
  } = useGlobalState();
  // @ts-ignore
  const choosenTask = tasks.find((task) => task.id === ID);

  const [title, setTitle] = useState(choosenTask?.title);
  const [description, setDescription] = useState(choosenTask?.description);
  const [date, setDate] = useState(choosenTask?.date);
  const [completed, setCompleted] = useState(choosenTask?.isCompleted);
  const [important, setImportant] = useState(choosenTask?.isImportant);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'completed':
        setCompleted(e.target.checked);
        break;
      case 'important':
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  console.log(choosenTask);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (edit) {
      const task = {
        id: ID,
        title: title,
        description: description,
        date: date,
        isCompleted: completed,
        isImportant: important,
      };
      updateTask(task);
      console.log(task);
      closeModal();
      finishEdit();
    } else {
      const task = {
        title,
        description,
        date,
        completed,
        important,
      };
      try {
        const res = await axios.post('/api/tasks', task);

        if (res.data.error) {
          toast.error(res.data.error);
        }

        if (!res.data.error) {
          toast.success(
            edit ? 'Task updated successfully' : 'Task created successfully'
          );
          allTasks();
          closeModal();
          finishEdit();
        }
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <CreateContentStyled
      onSubmit={handleSubmit}
      theme={theme}
    >
      <h1>Create a Task</h1>
      <div className='input-control'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          name='title'
          onChange={handleChange('title')}
          placeholder='e.g, Next.js Auth'
        />
      </div>
      <div className='input-control'>
        <label htmlFor='description'>Description</label>
        <textarea
          value={description}
          onChange={handleChange('description')}
          name='description'
          id='description'
          rows={4}
          placeholder='e.g, Learn Next.js Auth'
        ></textarea>
      </div>
      <div className='input-control'>
        <label htmlFor='date'>Date</label>
        <input
          value={date}
          onChange={handleChange('date')}
          type='date'
          name='date'
          id='date'
        />
      </div>
      <div className='input-control toggler'>
        <label htmlFor='completed'>Toggle Completed</label>
        <input
          value={completed}
          onChange={handleChange('completed')}
          type='checkbox'
          name='completed'
          id='completed'
        />
      </div>
      <div className='input-control toggler'>
        <label htmlFor='important'>Toggle Important</label>
        <input
          value={important}
          onChange={handleChange('important')}
          type='checkbox'
          name='important'
          id='important'
        />
      </div>

      <div className='submit-btn flex justify-end'>
        <Button
          type='submit'
          name={edit ? 'Edit Task' : 'Create Task'}
          icon={add}
          padding={'0.8rem 2rem'}
          borderRad={'0.8rem'}
          fw={'500'}
          fs={'1.2rem'}
          background={theme.colorPrimary}
        />
      </div>
    </CreateContentStyled>
  );
}

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimary2} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }
`;

export default CreateContent;
