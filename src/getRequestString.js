export default function getRequestString(paramReq) {
  let reqString = '';
  const propOfObj = Object.keys(paramReq, []);
  propOfObj.forEach((value) => {
    if (reqString === '') {
      reqString = `${value}=${paramReq[value]}`;
    } else {
      reqString += `&${value}=${paramReq[value]}`;
    }
  });
  return reqString;
}
