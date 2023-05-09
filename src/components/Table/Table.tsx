import { Worker } from "../../types/Worker";
import classNames from 'classnames';
import './Table.scss';

type Props = {
  workers: Worker[],
};

export const Table: React.FC<Props> = ({ workers }) => {
  if (!workers.length) {
    return <span>Nothing was found for your request</span>
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__header-cell">Customer Name</th>
          <th className="table__header-cell">Company</th>
          <th className="table__header-cell">Phone Number</th>
          <th className="table__header-cell">Email</th>
          <th className="table__header-cell">Country</th>
          <th className="table__header-cell">Status</th>
        </tr>
      </thead>
      <tbody>
        {workers.map(worker => (
          <tr className="table__row">
            <td className="table__cell">{worker.name}</td>
            <td className="table__cell">{worker.company}</td>
            <td className="table__cell">{worker.phone}</td>
            <td className="table__cell">{worker.email}</td>
            <td className="table__cell">{worker.country}</td>

            <td className="table__cell">
              <span
                className={classNames(
                  'table__status',
                  { 'table__status--active': worker.status },
                  { 'table__status--inactive': !worker.status },
                )}
              >
                {worker.status ? 'Active' : 'Inactive'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
