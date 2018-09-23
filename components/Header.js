const Header = ({ title }) => (
  <div>
    <header>
      <span>{title}</span>
    </header>
    <style jsx>
      {`
        header {
          background: red;
          padding: 15px;
          text-align: center;
        }

        header span {
          color: black;
        }
      `}
    </style>
  </div>
)

export default Header
