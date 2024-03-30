export default function PaymentCard({
  payment: { amount, description, cardNumber, cardType, cardOwner, date },
}) {
  return (
    <div>
      <p>Amount: {amount}</p>
      <p>Status: Paid or Pending</p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date: {date}</p>
      <hr />
    </div>
  );
}
