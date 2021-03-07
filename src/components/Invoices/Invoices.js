// Invoices
// There are <!-- Add number here --> total invoices

// Filter by status
// Draft
// Pending
// Paid

// New Invoice

// <!-- No invoices -->
// There is nothing here
// Create an invoice by clicking the New Invoice button and get started
// <!-- No invoices end -->

// <!-- Create new invoice form -->
// Go back

// New Invoice

// Bill From

// Street Address
// City
// Post Code
// Country

// Bill To

// Client's Name
// Client's Email
// e.g. email@example.com
// Street Address
// City
// Post Code
// Country

// Invoice Date

// Payment Terms
// Net 1 day
// Net 7 days
// Net 14 days
// Net 30 days

// Project Description
// e.g. Graphic Design Service

// Item List

// Item Name
// Qty.
// Price
// Total

// Add New Item

// Discard
// Save as Draft
// Save & Send
// <!-- Create new invoice end -->

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json';

export const Invoices = () => {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    setInvoices(data);
  }, []);

  return invoices ? (
    <main>
      <Header>
        <h1>Invoices</h1>
      </Header>

      <InvoiceList>
        {invoices.map((invoice, i) => (
          <InvoiceListItem key={i}>{invoice.clientName}</InvoiceListItem>
        ))}
      </InvoiceList>
    </main>
  ) : null;
};

const Header = styled.header``;

const InvoiceList = styled.ul``;

const InvoiceListItem = styled.li``;

export default Invoices;
