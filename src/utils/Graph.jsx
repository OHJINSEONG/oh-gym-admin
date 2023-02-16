import ReactApexChart from 'react-apexcharts';

export default function Graph({ data }) {
  const options = {
    chart: {
      id: 'date',
    },
    xaxis: {
      categories: data.map((e) => e.x),
    },
  };
  const series = [{
    name: 'amount',
    data: data.map((e) => e.y),
  }];

  return (
    <ReactApexChart options={options} series={series} type="line" height={300} width={800} />
  );
}
