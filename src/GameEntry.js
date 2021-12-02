function GameEntry(props) {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.player}</td>
      <td>{props.date}</td>
      <td>{props.earnings}</td>
    </tr>
  )
}

export default GameEntry;