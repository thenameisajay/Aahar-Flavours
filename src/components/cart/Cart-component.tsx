'use client';

import React, { useState } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Modal } from 'antd';
//TODO: Use localstorage from useHooks library
import { useLocalStorage } from 'usehooks-ts';

import CartTable from '@/components/cart/Cart-table';
import { Button } from '@/components/ui/button';

export default function CartComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartData, setCartData] = useLocalStorage('cart', []);

    const retrieveCart = () => {
        const storageCartData = JSON.parse(
            localStorage.getItem('cart') || '[]',
        );
        setCartData(storageCartData);
    };
    const showModal = () => {
        retrieveCart();
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="ml-4 flow-root lg:ml-6">
            <Button
                className="group -m-2 flex items-center p-2"
                onClick={showModal}
                variant={'ghost'}
            >
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
            </Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <CartTable cartData={cartData} />
            </Modal>
        </div>
    );
}
