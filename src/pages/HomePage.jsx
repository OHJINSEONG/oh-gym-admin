import { useEffect } from 'react';
import styled from 'styled-components';
import useSaleStore from '../hooks/useSaleStore';
import Graph from '../utils/Graph';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;

h1{
  width: 90%;
  font-size: 30px;
  font-weight: 600;
  color:#EF781A;
  border-bottom: 1px solid #D1D1D1;
  margin-left: 40px;
}

h3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D1D1D1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 40px;
  margin-bottom: 60px;
  box-shadow: 0px 3px 3px 0px gray;

  p{
    margin-top: 6px;
    font-size: 14px;
    
  }

  .plus {
    color : green
  }

  .minus {
    color : red
  }
`;

export default function HomePage() {
  const saleStore = useSaleStore();

  const {
    monthChart, dateChart, todaySale, comparedSale,
  } = saleStore;

  const data = monthChart
    .map((e) => ({ x: e.month, y: e.totalPrice })).reverse();

  useEffect(() => {
    saleStore.createCharts();
    console.log(dateChart);
  }, []);

  return (
    <Container>
      <h1>OHGYM</h1>
      <Wapper>
        <h3>
          오늘 매출
          <p>
            {todaySale.toLocaleString()}
            원
          </p>
          {comparedSale >= 0
            ? <p className="plus">{comparedSale.toLocaleString()}</p>
            : <p className="minus">{comparedSale.toLocaleString()}</p>}
        </h3>
      </Wapper>
      <Graph data={data} />
    </Container>
  );
}
