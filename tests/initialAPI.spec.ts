import { test, expect } from '@playwright/test';


test('Check initial API', async ({ request }) => {
  const res = await request.get(`General/GetInitialData`);
  expect(res.ok());
  const resJson = await res.json();
  expect(resJson, 'Data property mission fom response').toHaveProperty('data');
  expect(resJson, 'Status property mission fom response').toHaveProperty('status');
  expect(resJson, 'MessageBody property mission fom response').toHaveProperty('messageBody');
  expect(resJson, 'DetailStatus mission fom response').toHaveProperty('detailStatus');
});




