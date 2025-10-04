import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-primary-700"
      )}
    >
      <strong className={invert ? "text-white" : "text-primary-900"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Kerala - Cochin" invert={invert}>
          First floor, Kalathil Complex,
          <br />
          Bridge Rd, Periyar Nagar, Aluva,
          <br />
          Kerala 683101
          <br />
          <em>Visit us for in-person consultation</em>
        </Office>
      </li>
      <li>
        <Office name="Tamil Nadu - Coimbatore" invert={invert}>
          First floor Tristar Towers Avinashi Road,
          <br />
          Jn, Coimbatore, Tamil Nadu 641037
          <br />
          <em>Visit us for in-person consultation</em>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
