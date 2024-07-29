const FUNCTION = {
  GET: async (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://localhost:5000/get", requestOptions).then((response) =>
      response.json()
    );
  },
};
export default FUNCTION;
