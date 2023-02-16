import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSaleStore from '../hooks/useSaleStore';

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 80px;

h1{
  width: 90%;
  font-size: 28px;
  font-weight: 600;
  border-bottom: 1px solid #D1D1D1;
  padding: 20px;
  margin-bottom: 20px;
}

.hover{
  color: white;
  background-color: #EF781A;
}
`;

const TitleList = styled.ul`
  display: flex;
  width: 880px;
  justify-content: space-between;
  margin-bottom: 5px;

  li{
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TitleList2 = styled.ul`
  display: flex;
  margin-bottom: 5px;
  font-size: 0.7em;
  padding: 0px 20px;
  width: 910px;
  justify-content: space-between;
  
  li{
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SaleListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  border: 1px solid #D1D1D1;
  border-radius: 20px;
  width: 880px;
  height: 600px;
`;

const SaleList = styled.li`
  display: flex;
  width: 880px;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  height: 100%;
  border-bottom: 1px solid #D1D1D1;

  p {
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-bottom: 30px;
  
  button{
    width: 120px;
    height: 40px;
    border: 1px solid black;
  }
`;

export default function SalesPage() {
  const saleStore = useSaleStore();
  const [mode, setMode] = useState('monthly');

  const titles = [
    { id: 1, type: '계약일자' },
    { id: 2, type: '매출실적' },
    { id: 3, type: '합계' },
    { id: 4, type: '헬스' },
    { id: 5, type: '피티' },
    { id: 6, type: '락카' }];
  const titles2 = [
    { id: 1, type: '년월일' },
    { id: 2, type: '금액' },
    { id: 3, type: '건' },
    { id: 4, type: '금액' },
    { id: 5, type: '금액' },
    { id: 6, type: '금액' }];

  const { monthChart, dateChart } = saleStore;

  useEffect(() => {
    saleStore.createCharts();
    console.log(dateChart);
  }, []);

  if (mode === 'monthly') {
    return (
      <Container>
        <h1>매출</h1>
        <Buttons>
          <button type="button" onClick={() => setMode('daily')}>일별</button>
          <button type="button" className="hover" onClick={() => setMode('monthly')}>월별</button>
        </Buttons>
        <TitleList>
          {titles.map((title) => (
            <li key={title.id}>
              {title.type}
            </li>
          ))}
        </TitleList>
        <TitleList2>
          {titles2.map((title) => (
            <li key={title.id}>
              {title.type}
            </li>
          ))}
        </TitleList2>
        <SaleListWrapper>
          {monthChart.map((day) => (
            <SaleList key={day.month}>
              <p>
                {day.month}
              </p>
              <p>
                {day.totalPrice.toLocaleString()}
                원
              </p>
              <p>{day.orderTimes}</p>
              <p>
                {day.membershipPrice.toLocaleString()}
                원
              </p>
              <p>
                {day.ptPrice.toLocaleString()}
                원
              </p>
              <p>
                {day.lockerPrice.toLocaleString()}
                원
              </p>
            </SaleList>
          ))}
        </SaleListWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <h1>매출</h1>
      <Buttons>
        <button type="button" className="hover" onClick={() => setMode('daily')}>일별</button>
        <button type="button" onClick={() => setMode('monthly')}>월별</button>
      </Buttons>
      <TitleList>
        {titles.map((title) => (
          <li key={title.id}>
            {title.type}
          </li>
        ))}
      </TitleList>
      <TitleList2>
        {titles2.map((title) => (
          <li key={title.id}>
            {title.type}
          </li>
        ))}
      </TitleList2>
      <SaleListWrapper>
        {dateChart.map((day) => (
          <SaleList key={day.date}>
            <p>{day.date}</p>
            <p>
              {day.totalPrice.toLocaleString()}
              원
            </p>
            <p>{day.orderTimes}</p>
            <p>
              {day.membershipPrice.toLocaleString()}
              원
            </p>
            <p>
              {day.ptPrice.toLocaleString()}
              원
            </p>
            <p>
              {day.lockerPrice.toLocaleString()}
              원
            </p>
          </SaleList>
        ))}
      </SaleListWrapper>
    </Container>
  );
}
