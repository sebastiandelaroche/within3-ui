import { formatDateTime } from './date';

describe('Date Util', () => {

  it('should formatDateTime format raw Date', () => {
    const currentDate = new Date('2022-04-21T18:21:09.258Z');
    const currentDateFormatted = formatDateTime(currentDate);
    expect(currentDateFormatted).toEqual('21/4/2022 1:21pm');
  });

});
