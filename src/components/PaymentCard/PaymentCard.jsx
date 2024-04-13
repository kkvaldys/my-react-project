import clsx from "clsx";
import css from "./PaymentCard.module.css";

export default function PaymentCard({
  payment: {
    amount,
    description,
    cardNumber,
    cardType,
    cardOwner,
    date,
    isPaid,
  },
}) {
  clsx(css.text, isPaid ? css.isPaid : css.isPending);

  const statusClassNames = clsx(css.text, isPaid ? css.isPaid : css.isPending);

  return (
    <div className={css.container}>
      <p className={css.text}>Amount: {amount}</p>
      <p className={statusClassNames}>Status: {isPaid ? "paid" : "pending"}</p>
      <p className={css.text}>Description: {description}</p>
      <p className={css.text}>Card Number: {cardNumber}</p>
      <p className={css.text}>Card Type: {cardType}</p>
      <p className={css.text}>Card Holder Name: {cardOwner}</p>
      <p className={css.text}>Payment Date: {date}</p>
    </div>
  );
}
