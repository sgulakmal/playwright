import { test, expect } from '@playwright/test';
import { LookupResponse } from '../interface/Lookup';


test('Address Proofs lookup', async ({ request }) => {
  const star = 20;
  const index = 0;
  const noofrecords = 50
  const res = await request.get(`address-proofs/lookup?Star=${star}&index=${index}&Numberofrecords=${noofrecords}`);

  // Check the API is success
  expect(res.ok(), 'Check API is success').toBeTruthy();

  // Check the response is JSON
  expect(res.headers()['content-type'], 'Check the response is JSON').toContain('application/json');

  // Check the response is an array
  const resJson: LookupResponse[] = await res.json();
  expect(Array.isArray(resJson), 'Check the response is an array').toBeTruthy();

  // Check the response has at least one item
  // Need to conform with QA team on the expected number of items
  expect(resJson.length, 'Check the response has at least one item').toBeGreaterThan(0);

  // Check the response has the expected fields
  const expectedFields = ['id', 'code', 'desc'];
  for (const item of resJson) {
    for (const field of expectedFields) {
      expect(item, 'Check the response has the expected fields').toHaveProperty(field);
    }
  }

  // Check the response has the expected values
  // Need to conform with QA team on the expected values
  const expectedValues = [
    { id: 1, code: 'ER', desc: 'Confirmation of an electoral register search that a person lives at that address' }
  ];
  for (const item of resJson) {
    for (const expectedValue of expectedValues) {
      if (item.id === expectedValue.id) {
        expect(item.code, 'Check the response has the expected values for code').toBe(expectedValue.code);
        expect(item.desc, 'Check the response has the expected values for desc').toBe(expectedValue.desc);
      }
    }
  }

  // Check the response has the expected number of items
  expect(resJson.length, `The response length must be less than or equal ${noofrecords}`).toBeLessThanOrEqual(noofrecords);

});




