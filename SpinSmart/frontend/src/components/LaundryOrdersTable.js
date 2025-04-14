import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function LaundryOrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/orders');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON only if the response is valid
        setOrders(data.data); // Use the "data" field from the JSON response
      } catch (error) {
        console.error('Error fetching orders:', error.message);
        alert('Failed to fetch orders. Please try again later.');
      }
    };
    fetchOrders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Card Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Item Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.card_number}>
              <TableCell>{order.card_number}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.item_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LaundryOrdersTable;