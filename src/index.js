async function test() {
  try {
    const response = await fetch("https://localhost:8000/endpoint");

    const result = await response.json();
    console.log(result);
  } catch (e) {
    throw new Error(
      "Failed to fetch in the endpoint because the endpoint does not exist"
    );
  }
}

test();
