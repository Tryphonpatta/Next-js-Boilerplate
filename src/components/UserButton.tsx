'use client';

import { Modal } from 'antd';
import { useState } from 'react';

const UserButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        type="button"
        aria-label="User Button"
      >
        <div className=" cursor-pointer rounded-full hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </button>
      <Modal
        title="Basic Modal"
        open={showModal}
        footer={[]}
        onCancel={handleCancel}
      >
        <p>หน้า Login</p>
      </Modal>
    </>
  );
};

export default UserButton;
