import React from 'react';
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap';
import { currencyFormatter } from '../Utils';

const BudgetCard = ({ name, amount, max, gray }) => {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }

  return (
    <Card className={classNames.join(' ')}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>

{/* Format budget list name, amount, & max in card */}
          <div className='me-2'>{name}</div>
          <div className='d-flex align-items-baseline'>
            {currencyFormatter.format(amount)} / 
            <span className='text-muted fs-6 ms-1'>
            {currencyFormatter.format(max)}</span>
          </div>
        </Card.Title>

{/* Create Progress Bar */}
        <ProgressBar 
        className='rounded-pill' 
        variant={getProgressBarVariant(amount, max)} //Change colors, see below
        min={0}
        max={max}
        now={amount}/>

{/* Create Add Expense & View Expense Buttons */}
        <Stack 
        direction='horizontal' 
        gap='2'
        className='mt-4'>
          <Button variant='outline-primary' className='ms-auto'>Add Expense</Button>
          <Button variant='outline-secondary'>View Expenses</Button>
        </Stack>

      </Card.Body>
    </Card>
  );
};

// Set progress bar to change colors based on amount and max
const getProgressBarVariant = (amount, max) => {
  const ratio = amount / max;
  if(ratio < 0.5 ) {
    return 'primary'
  }

  if(ratio < 0.75 ) {
    return 'warning'
  } else {
    return 'danger'
  }
};

export default BudgetCard;