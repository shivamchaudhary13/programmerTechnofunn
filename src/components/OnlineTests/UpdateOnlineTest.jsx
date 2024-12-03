import constants from "../../utils/constants";

export const UpdateOnlineTest = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="updateOnlineTest">
        <h1>{constants.changePassword}</h1>
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="old password"
            name="oldPass"
            value={data.oldPass}
            onChange={handleInput}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="new password"
            name="newPass"
            value={data.newPass}
            onChange={handleInput}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="confirm password"
            name="cPass"
            value={data.cPass}
            onChange={handleInput}
            required
          />
          <br />
          <br />
          <Button type="submit" variant="outline-success" className="change">
            {constants.change}
          </Button>
          <Button onClick={cancel} variant="outline-danger" className="cancel">
            {constants.cancel}
          </Button>
        </form>
      </div>
      {showModal ? <ChangePasswordModal changemsg={response} /> : ""}
    </div>
  );
};
