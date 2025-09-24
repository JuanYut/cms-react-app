import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            onClick={() => onClick(c.id)}
            key={c.id}
            style={{ cursor: "pointer" }}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
