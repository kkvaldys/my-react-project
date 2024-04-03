import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import PaymentList from "../PaymentList";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum
        provident harum reprehenderit odit adipisci! Error quos assumenda
        asperiores minima corrupti, molestias et ipsam deleniti omnis temporibus
        neque expedita culpa.
      </p>
      <PageTitle> Styling React Components</PageTitle>
      <PaymentList payments={initialPayments} />
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
