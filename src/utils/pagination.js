const uniqueID = () =>
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 9)

const pagination = num =>
  Array.from({ length: num })
    .fill("")
    .map((v, index) => ({
      id: uniqueID(),
      value: index + 1,
    }))

export default pagination
