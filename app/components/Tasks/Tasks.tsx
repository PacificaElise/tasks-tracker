'use client';
import { useGlobalState } from '../../context/globalProvider';
import React from 'react';
import styled from 'styled-components';
import CreateContent from '../Modals/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { add } from '../../utils/icons';
import Modal from '../Modals/Modal';

interface Props {
  title: string;
  tasks: any[];
}

const Tasks = ({ title, tasks }: Props) => {
  const { theme, openModal, modal, setSelectedTheme, selectedTheme } =
    useGlobalState();

  const switchTheme = () => {
    setSelectedTheme((selectedTheme: any) => (selectedTheme === 0 ? 1 : 0));
  };

  return (
    <TaskStyled theme={theme}>
      {modal && <Modal content={<CreateContent />} />}

      <div className='title flex justify-between'>
        <h1>{title}</h1>
        <p className='flex justify-between items-center gap-2 font-semibold text-xl'>
          <span>Switch Theme</span>
          <label
            htmlFor='switch'
            className='switch'
          >
            <input
              type='checkbox'
              onChange={switchTheme}
              name='switch'
              id='switch'
            />
            <span className='slider'></span>
          </label>
        </p>
      </div>

      <div className='tasks grid'>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button
          className='create-task'
          onClick={openModal}
        >
          {add}
          Add New Task
        </button>
      </div>
    </TaskStyled>
  );
};

const TaskStyled = styled.main`
  color: ${(props) => props.theme.colorGrey2};
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 4.9rem;
    right: 5.1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: ${(props) => props.theme.colorBg};
    border: 2px solid ${(props) => props.theme.borderColor2};
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .tasks {
    margin: 2rem auto;
  }

  .title {
    margin: 0 auto;
    color: ${(props) => props.theme.colorGrey0};
  }

  .title h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background: ${(props) => props.theme.colorGreenDark};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.colorGreenDark};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey4};
      color: ${(props) => props.theme.colorGrey1};
    }
  }
`;

export default Tasks;
