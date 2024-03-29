import React, { useEffect, useState } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Modal } from 'antd';

import CartTable from '@/components/cart/cart-table';
import { Button } from '@/components/ui/Button';

//TODO: Use localstorage from useHooks library

export default function CartComponent() {
    const [carts, setCarts] = useState([]);
    function retrieveCart() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCarts(cart);
    }

    useEffect(() => {
        retrieveCart();

        window.addEventListener('storage', retrieveCart);

        return () => {
            window.removeEventListener('storage', retrieveCart);
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
        retrieveCart();
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
                <CartTable cart={carts} />
            </Modal>
        </div>
    );
}
