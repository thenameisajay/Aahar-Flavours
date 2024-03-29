'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { CartItem } from '@/types/interfaces/interfaces';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CartTable({ cartData }: { cartData: CartItem[] }) {
    const [cartTotal, setCartTotal] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    useEffect(() => {
        const total = cartData.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);

        setCartTotal(total);

        if (cartData.length > 0) {
            setCartEmpty(false);
        } else {
            setCartEmpty(true);
        }
    }, [cartData]);

    function clearCart() {
        localStorage.removeItem('cart');
        setCartTotal(0);
        setCartEmpty(true);
        toast.success('Cart cleared');
    }

    const TableContainerComponent = () => {
        const TableComponent = () => {
            return (
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartData.map((cartItem: CartItem) => (
                            <TableRow
                                key={cartItem.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="right">
                                    {cartItem.name}
                                </TableCell>
                                <TableCell align="right">
                                    {cartItem.quantity}
                                </TableCell>
                                <TableCell align="right">
                                    {'£ ' + cartItem.price}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">
                                {'£ ' + cartTotal}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            );
        };

        return (
            <div className="flex flex-col items-center justify-center mt-5">
                <TableContainer component={Paper}>
                    <TableComponent />
                    <Button onClick={() => clearCart()}>Clear All</Button>
                </TableContainer>
            </div>
        );
    };

    return (
        <div>
            {cartEmpty ? (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Your cart is empty
                    </h1>
                </div>
            ) : (
                <TableContainerComponent />
            )}
        </div>
    );
}
