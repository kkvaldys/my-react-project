import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";
import PaymentList from "./PaymentList";

export default function App() {
  return (
    <>
      <PageTitle text="Payments" />
      <PaymentList payments={initialPayments} />
    </>
  );
}
