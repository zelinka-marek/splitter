import PropTypes from "prop-types";

export function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 33 45"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.1 2.91 8.45 11.1c-2.28 4 .53 9 5.06 8.98h19.45L23.28 3.01c-2.3-4.01-7.9-3.96-10.18-.1ZM24.6 33.78l-4.66 8.19a5.84 5.84 0 0 1-10.2.04L.02 24.9l19.4-.02a6 6 0 0 1 5.18 8.9Z" />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
