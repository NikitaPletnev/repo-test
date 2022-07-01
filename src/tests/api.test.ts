import {getProducts} from "../helpers/apiHelper";

it('api test one',  async () => {
    const res = await getProducts();
    expect(res).toHaveProperty('status');
    expect(res.status).toEqual(200);
})

it('api test two',  async () => {
    const res = await getProducts();
    const resource = await res.json();
    expect(resource.length).toBe(20);
    expect(resource[0]).toHaveProperty('title');
    expect(resource[0]).toHaveProperty('description');
    expect(resource[0]).toHaveProperty('price');
})
