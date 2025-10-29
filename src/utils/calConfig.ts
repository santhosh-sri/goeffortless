export interface CalProps {
    'data-cal-namespace': string;
    'data-cal-link': string;
    'data-cal-config': string;
  }
  
  export const CalcomConfig: CalProps = {
    'data-cal-namespace': 'demo',
    'data-cal-link': 'effortless/demo',
    'data-cal-config': JSON.stringify({ layout: 'month_view' }),
  };
  