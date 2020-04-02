export default function selectLotDetails(lotId) {
  return state => {
    const { lots: { lotDetails } } = state;
    return lotDetails[lotId];
  };
}
