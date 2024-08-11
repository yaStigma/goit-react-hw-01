import css from "./TransactionHistory.module.css";

export default function TransactionHistory ({items}) {

    return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map((item, index) => (
                <tr key={item.id} style={{backgroundColor: index % 2 && '#cccc' }}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
</table>



    )
}