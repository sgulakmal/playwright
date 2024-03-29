import { test, expect } from '@playwright/test';
import reqBodyJson from "./../mock/aml_check.json";

test('AML check', async ({ request }) => {

    const res = await request.post('aml-check', {data: reqBodyJson});

    // Check the API is success
    expect(res.ok(), 'Check API is success').toBeTruthy();

})