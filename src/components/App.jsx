import PaymentCard from "./PaymentCard";

const data1 = {
  id: "1",
  cardNumber: "1234 5678 9012 3456",
  cardType: "Visa",
  cardOwner: "John Doe",
  date: "2024-01-01",
  amount: 100,
  description: "Payment for groceries",
  isPaid: true,
};

const data2 = {
  id: "2",
  cardNumber: "1212 5634 9742 1111",
  cardType: "Mastercard",
  cardOwner: "Alice Smith",
  date: "2024-01-05",
  amount: 1000,
  description: "Payment for utilities",
  isPaid: false,
};

export default function App() {
  return (
    <>
      <h1>Payments</h1>
      <PaymentCard payment={data1} />
      <PaymentCard payment={data2} />
    </>
  );
}
