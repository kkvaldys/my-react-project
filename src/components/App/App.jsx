import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import PaymentList from "../PaymentList/PaymentList";
import Text from "../TextTest/Text";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <PageTitle> Styling React Components</PageTitle>
      <PaymentList payments={initialPayments} />
      <Text />
    </div>
  );
}

// const Panel = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };
